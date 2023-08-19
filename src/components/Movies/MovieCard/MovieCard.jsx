import "./MovieCard.css";
import liked from "../../../images/liked.svg";
import notLiked from "../../../images/notLiked.svg";
import unlike from "../../../images/unlike.svg";
import { useMemo, useState } from "react";

const MovieCard = ({ movie }) => {
  const [isHoverd, setHovered] = useState(false);
  const currentImg = useMemo(() => {
    if (movie.isLiked) {
      if (isHoverd) return unlike;
      else return liked;
    }
    if (isHoverd) return liked;
    return notLiked;
  }, [isHoverd, movie.isLiked]);

  return (
    <li className="movie">
      <img className="movie__image" src={movie.image} alt={movie.name} />
      <div className="movie__description">
        <h2 className="movie__name">{movie.name}</h2>

        <button
          className="movie__btn"
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={currentImg} alt="like" />
        </button>
      </div>
      <p className="movie__time">{movie.time}</p>
    </li>
  );
};

export default MovieCard;
