import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
