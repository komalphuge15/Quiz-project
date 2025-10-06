import express from 'express';
import { getQuizQuestions, submitQuiz } from '../controllers/quizController.js';

const router = express.Router();

router.get('/', getQuizQuestions);
router.post('/submit', submitQuiz);

export default router;
