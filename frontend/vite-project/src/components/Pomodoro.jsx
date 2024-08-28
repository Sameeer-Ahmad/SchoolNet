import { useState, useEffect } from "react";

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession,  setIsWorkSession] = useState(true);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsWorkSession(true);
    setTimeLeft(25 * 60);
  };

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsWorkSession(!isWorkSession);
      setTimeLeft(isWorkSession ? 5 * 60 : 25 * 60);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isWorkSession]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pomodoro Timer</h1>
      <div style={{ fontSize: "48px", margin: "10px" }}>
        {isWorkSession ? "Work Session" : "Break Time"}
      </div>
      <div style={{ fontSize: "48px", margin: "20px" }}>
        {formatTime(timeLeft)}
      </div>
      <div>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;
