import { useEffect } from "react";

import "./gameOver.css";

const GameOver = ({ score, totalScore, setTotalScore, tryAgain }) => {
  useEffect(() => {
    if (score > totalScore) {
      setTotalScore(score);
    }
  }, []);

  return (
    <div className="GameOver">
      <h1>Game Over</h1>
      <p>Your score is {score}</p>
      <button onClick={tryAgain}>Try Again</button>
    </div>
  );
};

export default GameOver;
