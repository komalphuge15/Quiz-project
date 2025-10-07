import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "../styles/quiz.css";

const QuizQuestion = ({ question, onAnswer, current, total }) => {
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setSelected(null);
    setDisabled(false);
    setKey(prev => prev + 1);
  }, [question]);

  if (!question) return <p className="center-text">Loading question...</p>;

  const handleOptionClick = (option) => {
    if (disabled) return;
    setSelected(option);
    setDisabled(true);
    const isCorrect = option === question.correct;
    onAnswer(isCorrect, option);
  };

  const handleTimeUp = () => {
    if (!disabled) {
      setDisabled(true);
      onAnswer(false, "Not answered");
    }
  };

  return (
    <div className="quiz-question-container">
      <div className="question-header">
        <h3>Question {current} / {total}</h3>
        <Timer key={key} seconds={15} onTimeUp={handleTimeUp} />
      </div>
      <h2 className="question-text">{question.text}</h2>
      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selected === option
                ? option === question.correct
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
