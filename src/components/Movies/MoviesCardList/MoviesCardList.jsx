import React, { useMemo } from "react";
import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";
//import useScreenWidth from "../../../utils/useScreenWidth";

function MoviesCardList(props) {
  const location = useLocation();
  const isLocationMovies = location.pathname === '/movies';
  const [visibleMovies, setVisibleMovies] = React.useState([]); // карточки, которые будут отображаться
  const [moviesCount, setMoviesCount] = React.useState(0); // количество карточек для отображения
  const [additionMovies, setAdditionMovies] = React.useState(0); // количество карточек которые добаляются
  const [buttonMoviesVisible, setButtonMoviesVisible] = React.useState(true); // кнопка добавления фильмов

  const movies= props.isChecked || props.isCheckedSaved ? props.searchShortMovies : props.movies;

  function handleMoviesCount() {
      if (document.documentElement.clientWidth > 800) {
          setMoviesCount(7);
          setAdditionMovies(7);
      } else if (document.documentElement.clientWidth > 500) {
          setMoviesCount(7);
          setAdditionMovies(2);
      } else {
          setMoviesCount(5);
          setAdditionMovies(1);
      }
  }

  React.useEffect(() => {
      handleMoviesCount();
  }, []);

  React.useEffect(() => {
      setVisibleMovies(movies.slice(0, moviesCount))
  },// eslint-disable-next-line
    [
      movies,
      moviesCount,
  ]);

  React.useEffect(() => {
      if(visibleMovies.length === movies.length) {
          setButtonMoviesVisible(false);
      } else {
          setButtonMoviesVisible(true);
      }
  },[movies,
    visibleMovies,
  ]);

  React.useEffect(() => {
      const handleResizeWindow = () => {
          setTimeout(handleMoviesCount, 3000);
      }
      window.addEventListener("resize", handleResizeWindow);
      return () => {
          window.removeEventListener("resize", handleResizeWindow);
      }
  }, []);

  function handleIsAddMovies() {
      setVisibleMovies(
          visibleMovies.concat(movies.slice(visibleMovies.length, visibleMovies.length + additionMovies))
      );
  }

  return (
    <div className="movies-list">
      <ul className="movies-list__list">
      {visibleMovies &&
                    visibleMovies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id || movie.movieId}
                                movie={movie}
                                isLiked={props.isLiked}
                                storedMovies={props.storedMovies}
                                name={movie.nameRU}
                                duration={movie.duration}
                                {...movie}
                                isChecked={props.isChecked}
                                onMoviesSaved={props.onMoviesSaved}
                                onDeleteMoviesSaved={props.onDeleteMoviesSaved}
                                handleMovieLike={props.handleMovieLike}
                                onGetMovies={props.onGetMovies}
                            />
                        );
                    })
                }
            </ul>
      {isLocationMovies && buttonMoviesVisible &&
                (
        <div className="movies-list__more-section">
          <button className="btn movies-list__more-btn" onClick={handleIsAddMovies} type="button" >Еще</button>
        </div>
      ) 
    }
    </div>
  );
};

export default MoviesCardList;
