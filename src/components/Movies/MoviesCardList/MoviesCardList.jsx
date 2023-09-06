import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";

function MoviesCardList({ actionBtn, alwaysShowAll = false, ...props }) {
  const location = useLocation();
  const isLocationMovies = location.pathname === "/movies";
  const [visibleMovies, setVisibleMovies] = React.useState([]);
  const [moviesCount, setMoviesCount] = React.useState(0);
  const [additionMovies, setAdditionMovies] = React.useState(0);
  const [buttonMoviesVisible, setButtonMoviesVisible] = React.useState(true);

  const movies =
    props.isChecked || props.isCheckedSaved
      ? props.searchShortMovies
      : props.movies;

  function handleMoviesCount() {
    if (alwaysShowAll) return setMoviesCount(10000);
    if (document.documentElement.clientWidth > 800) {
      setMoviesCount(16);
      setAdditionMovies(4);
    } else if (document.documentElement.clientWidth > 500) {
      setMoviesCount(8);
      setAdditionMovies(2);
    } else {
      setMoviesCount(5);
      setAdditionMovies(2);
    }
  }

  React.useEffect(() => {
    handleMoviesCount();
  }, []);

  React.useEffect(() => {
    if (alwaysShowAll) setVisibleMovies(movies);
    setVisibleMovies(movies.slice(0, moviesCount));
  }, [movies, moviesCount, alwaysShowAll]);

  React.useEffect(() => {
    if (visibleMovies.length === movies.length) {
      setButtonMoviesVisible(false);
    } else {
      setButtonMoviesVisible(true);
    }
  }, [movies, visibleMovies]);

  React.useEffect(() => {
    const handleResizeWindow = () => {
      setTimeout(handleMoviesCount, 3000);
    };
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  function handleIsAddMovies() {
    setVisibleMovies(
      visibleMovies.concat(
        movies.slice(
          visibleMovies.length,
          visibleMovies.length + additionMovies
        )
      )
    );
  }

  return (
    <div className="movies-list">
      <ul className="movies-list__list">
        {visibleMovies &&
          visibleMovies.map((movie) => {
            return (
              <MovieCard
                key={movie._id ?? movie.name}
                movie={movie}
                isLiked={props.isLiked}
                storedMovies={props.storedMovies}
                name={movie.nameRU}
                duration={movie.duration}
                {...movie}
                isChecked={props.isChecked}
                onMoviesSaved={props.onMoviesSaved}
                onDelete={props.onDelete}
                handleMovieLike={props.handleMovieLike}
                onGetMovies={props.onGetMovies}
                actionBtn={actionBtn}
              />
            );
          })}
      </ul>
      {isLocationMovies && buttonMoviesVisible && (
        <div className="movies-list__more-section">
          <button
            className="btn movies-list__more-btn"
            onClick={handleIsAddMovies}
            type="button"
          >
            Еще
          </button>
        </div>
      )}
    </div>
  );
}

export default MoviesCardList;
