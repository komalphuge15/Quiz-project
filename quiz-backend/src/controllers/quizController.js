import Question from '../models/Question.js';

export const getQuizQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    const quizWithoutAnswers = questions.map(q => ({
      id: q.id,
      text: q.text,
      options: q.options
    }));
    res.json(quizWithoutAnswers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

// POST /api/quiz/submit
export const submitQuiz = async (req, res) => {
  const { answers } = req.body;
  try {
    const questions = await Question.findAll();
    let score = 0;

    answers.forEach(a => {
      const q = questions.find(q => q.id === a.questionId);
      if (q && q.correct === a.selectedOption) score++;
    });

    res.json({ score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to calculate score' });
  }
};
