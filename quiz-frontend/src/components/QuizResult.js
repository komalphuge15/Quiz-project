import React from "react";
import "../styles/quiz.css";

const QuizResult = ({ score, totalQuestions, answers = [], questions = [], onRestart }) => {
  if (!questions.length) return <p className="center-text">No results available.</p>;

  return (
    <div className="quiz-result-container">
      <h2>🎉 Quiz Completed!</h2>
      <h3>Your Score: {score} / {totalQuestions}</h3>
      <button className="restart-btn" onClick={onRestart}>
        Restart Quiz
      </button>
      <div className="result-list">
        {questions.map((q, index) => (
          <div key={index} className="result-item">
            <p className="question">{q.text}</p>
            <p>
              Correct Answer: <strong>{q.correct}</strong>
            </p>
            <p className={answers[index] === q.correct ? "correct-answer" : "wrong-answer"}>
              Your Answer: {answers[index] || "Not answered"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizResult;
