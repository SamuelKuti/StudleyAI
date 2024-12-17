const express = require('express');
const router = express.Router();
const multer = require('multer');
const flashcardService = require('../services/flashcardService');
const requireAuth = require('../middleware/authMiddleware');

// Configure multer for PDF upload
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

    const flashcards = await flashcardService.generateFlashcards(req.file.buffer);
    res.json({ flashcards });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;