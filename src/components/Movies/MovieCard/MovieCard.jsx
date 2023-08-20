import "./MovieCard.css";
import liked from "../../../images/liked.svg";
import notLiked from "../../../images/notLiked.svg";
import unlike from "../../../images/unlike.svg";
import { useMemo } from "react";

const MovieCard = ({ movie, isRemovable = false }) => {
  const currentImg = useMemo(() => {
    if (isRemovable) return unlike;
    if (movie.isLiked) return liked;
    return notLiked;
  }, [movie.isLiked, isRemovable]);

  return (
    <li className="movie">
      <img className="movie__image" src={movie.image} alt={movie.name} />
      <div className="movie__description">
        <h2 className="movie__name">{movie.name}</h2>

        <button className="movie__btn" type="button">
          <img src={currentImg} alt="like" />
        </button>
      </div>
      <p className="movie__time">{movie.time}</p>
    </li>
  );
};

export default MovieCard;
