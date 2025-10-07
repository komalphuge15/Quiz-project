import React, { useEffect, useState } from "react";

const Timer = ({ seconds, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return <span className="timer">{timeLeft}s</span>;
};

export default Timer;
