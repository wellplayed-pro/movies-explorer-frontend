import { useContext, useMemo, useState } from "react";
import liked from "../../images/liked.svg";
import notLiked from "../../images/notLiked.svg";
import { SavedMoviesContext } from "../../utils/savedMoviesContext";

const Btn = ({ ...movie }) => {
  const { savedMovies, likeMovie, unlikeMovieById } =
    useContext(SavedMoviesContext);

  const savedMovie = useMemo(() => {
    return savedMovies.find((sm) => sm.nameRU === movie.nameRU);
  }, [savedMovies, movie]);

  const isLiked = useMemo(() => savedMovie !== undefined, [savedMovie]);

  const currentImg = useMemo(() => {
    if (isLiked) return liked;
    return notLiked;
  }, [isLiked]);

  const [loading, setLoading] = useState(false);

  const onClick = async (evt) => {
    evt?.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      if (isLiked) {
        await unlikeMovieById(savedMovie._id);
      } else {
        await likeMovie(movie);
      }
    } catch {}
    setLoading(false);
  };

  return (
    <button onClick={onClick} className="btn movie__btn" type="button">
      <img src={currentImg} alt="like" />
    </button>
  );
};

export default Btn;
