import React, { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0); 
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAnswer = (isCorrect, selectedOption) => {
    if (isCorrect) {
      setScore(prev => prev + 1); 
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setQuizFinished(true); 
    }
  };

  if (!questions || questions.length === 0) return <p>Loading questions...</p>;

  if (quizFinished) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Quiz Finished!</h2>
        <p>
          Your Score: {score} / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <QuizQuestion
      question={questions[currentIndex]}
      onAnswer={handleAnswer}
      current={currentIndex + 1}
      total={questions.length}
    />
  );
};

export default Quiz;
