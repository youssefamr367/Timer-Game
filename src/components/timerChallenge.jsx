import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  function handleStart() {
    if (timerStarted || !Number.isFinite(targetTime) || targetTime <= 0) {
      return;
    }

    setTimerExpired(false);
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      timer.current = null;
      setTimerExpired(true);
      setTimerStarted(false);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    timer.current = null;
    setTimerStarted(false);
  }

  return (
    <>
      {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>

        {timerExpired && <p>You lost!</p>}

        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? "" : "s"}
        </p>

        <p>
          <button
            type="button"
            onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>

        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
