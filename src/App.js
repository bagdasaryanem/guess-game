import { useState } from "react";

import "./App.css";
import Game from "./components/game/Game";

const App = () => {
  const [totalScore, setTotalScore] = useState(0);

  return (
    <div className="App">
      <Game totalScore={totalScore} setTotalScore={setTotalScore} />
    </div>
  );
};

export default App;
