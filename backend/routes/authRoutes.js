// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require('crypto');
const emailService = require('../utils/emailService');
const requireAuth = require('../middleware/authMiddleware');

// Helper function to generate JWT
const generateToken = (user) => {
    return jwt.sign({ sub: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Generate verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');

        const user = await User.create({
            email,
            password,
            name,
            verificationToken: crypto
                .createHash('sha256')
                .update(verificationToken)
                .digest('hex'),
            verificationExpires: Date.now() + 86400000 // 24 hours
        });

        // Send verification email
        await emailService.sendVerificationEmail(email, verificationToken);

        res.json({
            message: 'Registration successful. Please check your email to verify your account.'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, async (err, user, info) => {
        try {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).json({ error: info.message });
            }

            if (!user.isVerified) {
                return res.status(403).json({
                    error: 'Please verify your email before logging in',
                    isVerified: false
                });
            }

            const token = generateToken(user);
            res.json({ token });
        } catch (error) {
            next(error);
        }
    })(req, res, next);
});

router.get('/verify-email/:token', async (req, res) => {
    try {
        const verificationToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex');

        const user = await User.findOne({
            verificationToken,
            verificationExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                error: 'Invalid or expired verification token'
            });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationExpires = undefined;
        await user.save();

        // Generate token for automatic login after verification
        const token = generateToken(user);

        res.json({
            message: 'Email verified successfully',
            token
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/resend-verification', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                message: 'If an account exists, a verification email will be sent.'
            });
        }

        if (user.isVerified) {
            return res.status(400).json({
                error: 'Email is already verified'
            });
        }

        // Generate new verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        user.verificationToken = crypto
            .createHash('sha256')
            .update(verificationToken)
            .digest('hex');
        user.verificationExpires = Date.now() + 86400000; // 24 hours
        await user.save();

        // Send new verification email
        await emailService.sendVerificationEmail(email, verificationToken);

        res.json({
            message: 'If an account exists, a verification email will be sent.'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Google OAuth routes
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { session: false }),
    async (req, res) => {
        try {
            const user = req.user;

            // Automatically verify Google OAuth users
            if (!user.isVerified) {
                user.isVerified = true;
                await user.save();
            }

            const token = generateToken(user);
            res.redirect(`${process.env.FRONTEND_URL}/auth-callback?token=${token}`);
        } catch (error) {
            res.redirect(`${process.env.FRONTEND_URL}/auth-callback?error=true`);
        }
    }
);

// Request password reset
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        console.log('Request body:', req.body);

        if (!user) {
            // Return success even if email doesn't exist for security
            return res.json({ message: 'If an account exists, a password reset email will be sent.' });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');


        // Token expires in 1 hour
        user.resetPasswordExpires = Date.now() + 3600000;
        await user.save();

        // Send reset email
        await emailService.sendPasswordResetEmail(email, resetToken);

        res.json({
            message: 'If an account exists, a password reset email will be sent.'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Reset password
router.post('/reset-password/:token', async (req, res) => {
    try {
        const { password } = req.body;
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex');

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                error: 'Password reset token is invalid or has expired'
            });
        }

        // Update password and clear reset token fields
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        // Generate new JWT
        const token = generateToken(user);

        res.json({
            message: 'Password has been reset successfully',
            token
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Protected route
router.get('/profile', ...requireAuth,
    (req, res) => {
        res.json(req.user);
    }
);

module.exports = router;