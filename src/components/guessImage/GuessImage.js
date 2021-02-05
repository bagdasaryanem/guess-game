import { useEffect } from "react";

import "./guessImage.css";

const GuessImage = ({ picUrl, setCurrentPhoto, setRound, round }) => {
  const Image = require(`../../contents/images/${picUrl}`)?.default;

  useEffect(() => {
    setTimeout(() => {
      setCurrentPhoto(null);
      setRound(round + 1);
    }, 3000);
  }, []);

  return <img className="guessImage" src={Image} />;
};

export default GuessImage;
