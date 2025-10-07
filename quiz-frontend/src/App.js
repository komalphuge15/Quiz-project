import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";
import QuizStart from "./components/QuizStart";
import "./styles/quiz.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/questions");
        setQuestions(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quiz:", err);
        setError("Failed to load questions. Please try again later.");
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect, selectedOption) => {
    setAnswers(prev => [...prev, selectedOption || "Not answered"]);
    if (isCorrect) setScore(prev => prev + 1);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setQuizFinished(true);
      }
    }, 500);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
    setQuizFinished(false);
    setQuizStarted(false);
  };

  if (loading) return <p className="center-text">Loading questions...</p>;
  if (error) return <p className="center-text error-text">{error}</p>;

  if (!quizStarted) {
    return <QuizStart totalQuestions={questions.length} onStart={handleStartQuiz} />;
  }

  if (quizFinished) {
    return (
      <QuizResult
        score={score}
        totalQuestions={questions.length}
        answers={answers}
        questions={questions}
        onRestart={handleRestart}
      />
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

export default App;
