export default function ResultModal({ result, targetTime, ref, onClose }) {
  const userlost = result <= 0;
  const formatedRemainingTime = (result / 1000).toFixed(2);
  return (
    <dialog ref={ref} className="result-modal" onClose={onClose}>
      <h2>You {userlost ? "Lost" : "Won"}!</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formatedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
