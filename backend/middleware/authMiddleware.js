const passport = require('passport');

const verifyEmail = async (req, res, next) => {
  if (!req.user.isVerified) {
    return res.status(403).json({
      error: 'Please verify your email to access this resource',
      isVerified: false
    });
  }
  next();
};

const requireAuth = [
  passport.authenticate('jwt', { session: false }),
  verifyEmail
];

module.exports = requireAuth;