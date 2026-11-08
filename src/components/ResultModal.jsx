export default function ResultModal({result , targetTime}){
    <dialog className="result-modal">
        <h2>You {result}:</h2>
    <p>The target time was <stong>{targetTime} seconds</stong></p>
    <p>You stopped the timer with <strong>X secounds left</strong></p>
    <form method="dialog">
    <button>Close</button>
    </form>
    </dialog>
}