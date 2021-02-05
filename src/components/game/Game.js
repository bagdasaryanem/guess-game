import React, { useState, useEffect } from "react";

import "./game.css";
import GameOver from "../gameOver/GameOver";
import GuessImage from "../guessImage/GuessImage";
import getPeople from "../../services/peopleImageService";
import CountryButton from "../countryButton/CountryButton";

const nationalities = [
  {
    nationality: "Thai",
    position: "topLeft",
  },
  {
    nationality: "Korean",
    position: "topRight",
  },
  {
    nationality: "Chinese",
    position: "bottomLeft",
  },
  {
    nationality: "Japanese",
    position: "bottomRight",
  },
];

const Game = ({ totalScore, setTotalScore }) => {
  const [photos, setPhotos] = useState(getPeople());
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [clicked, setClicked] = useState(false);

  const tryAgain = () => {
    setPhotos(getPeople());
    setScore(0);
    setCurrentPhoto(null);
    setClicked(false);
    setRound(0);
  };

  useEffect(() => {
    if (round < 10) {
      setTimeout(() => {
        setCurrentPhoto(photos[round]);
        setClicked(false);
      }, 1000);
    }
  }, [round]);

  return (
    <div className="Game">
      {nationalities.map((nationality) => (
        <CountryButton
          {...nationality}
          clicked={clicked}
          setCurrentPhoto={setCurrentPhoto}
          currentPhoto={currentPhoto}
          score={score}
          setScore={setScore}
          setClicked={setClicked}
        />
      ))}

      {round <= 10 && currentPhoto && (
        <GuessImage
          {...currentPhoto}
          round={round}
          photos={photos}
          setCurrentPhoto={setCurrentPhoto}
          setRound={setRound}
        />
      )}
      {round === 10 && (
        <GameOver
          tryAgain={tryAgain}
          score={score}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
        />
      )}

      <div className="bottomBar">
        <p className="totalScore">Total Score: {totalScore}</p>
        <div className="currentGame">
          <p>Score: {score}</p>
          <p>Round: {round}/10</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
