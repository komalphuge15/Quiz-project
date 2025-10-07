import React from "react";
import "../styles/quiz.css";

const QuizStart = ({ onStart }) => {
  return (
    <div className="quiz-start-container">
      <h1>Welcome to the Quiz</h1>
      <p>Test your knowledge and logical reasoning!</p>
      <button className="start-btn" onClick={onStart}>
        Start Quiz 
      </button>
    </div>
  );
};

export default QuizStart;
