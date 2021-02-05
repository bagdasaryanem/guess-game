import "./countryButton.css";

const CountryButton = ({
  nationality,
  position,
  clicked,
  setCurrentPhoto,
  currentPhoto,
  score,
  setScore,
  setClicked,
}) => {
  return (
    <button
      disabled={clicked}
      className={`countryButton ${position}`}
      onClick={() => {
        if (currentPhoto) {
          if (currentPhoto.nationality === nationality) {
            setScore(score + 20);
          } else {
            setScore(score - 5);
          }
          setClicked(true);
          setCurrentPhoto(null);
        }
      }}
    >
      {nationality}
    </button>
  );
};

export default CountryButton;
