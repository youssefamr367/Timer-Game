import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef(null);
  const dialog = useRef(null);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;


  function handleStart() {
    if (timer.current !== null || !Number.isFinite(targetTime) || targetTime <= 0) {
      return;
    }

    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) =>
        Math.max(0, prevTimeRemaining - 10),
      );
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    timer.current = null;
    dialog.current.showModal();
  }

  useEffect(() => {
    if (timeRemaining === 0) {
      clearInterval(timer.current);
      timer.current = null;
      dialog.current.showModal();
    }
  }, [timeRemaining]);

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result={timeRemaining}
        onClose={() => setTimeRemaining(targetTime * 1000)}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? "" : "s"}
        </p>

        <p>
          <button
            type="button"
            onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
