export function scoreAnswers(questions, userAnswers) {
  const qMap = new Map(questions.map(q => [q.id, q]));
  let score = 0;

  const details = userAnswers.map(u => {
    const q = qMap.get(u.id);
    const correct = q ? q.correct === u.answer : false;
    if (correct) score++;
    return {
      id: u.id,
      correct,
      correctOption: q ? q.correct : null,
      yourAnswer: u.answer
    };
  });

  return { score, total: userAnswers.length, details };
}
