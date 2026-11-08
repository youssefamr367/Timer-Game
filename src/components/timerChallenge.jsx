import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimer] = useState(false);
  function handleStart() {
    setTimeout(() => {
      setTimer(true);
    }, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>Start</button>
      </p>
    </section>
  );
}
