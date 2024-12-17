const express = require('express');
const router = express.Router();
const multer = require('multer');
const quizService = require('../services/quizService');
const requireAuth = require('../middleware/authMiddleware');

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

router.post('/generate', ...requireAuth, upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No PDF file provided' });
    }

    const numQuestions = req.body.numQuestions || 5;
    const quiz = await quizService.generateQuiz(req.file.buffer, numQuestions);
    res.json({ quiz });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 