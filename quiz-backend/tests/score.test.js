import request from 'supertest';
import app from '../src/server.js';  


describe('Quiz Scoring API', () => {
  test('should return a valid score when answers are submitted', async () => {
    const quizResponse = await request(app).get('/api/quiz');
    expect(quizResponse.status).toBe(200);

    const questions = quizResponse.body;
    expect(Array.isArray(questions)).toBe(true);

    const answers = questions.map(q => ({
      questionId: q.id || q._id,
      selectedOption: q.options[0],
    }));

    const submitResponse = await request(app)
  .post('/api/quiz/submit')  
  .send({ answers });

    expect(submitResponse.status).toBe(200);
    expect(submitResponse.body).toHaveProperty('score');
    expect(typeof submitResponse.body.score).toBe('number');
  });
});
