import Player from "./components/Player.jsx";
import TimerChallenge from "./components/timerChallenge.jsx";

function App() {
  return (
    <>
      <Player />

      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Hard" targetTime={2} />
      </div>
    </>
  );
}

export default App;
