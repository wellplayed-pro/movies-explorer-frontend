import React, { useMemo } from "react";
import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";
import useScreenWidth from "../../../utils/useScreenWidth";

const MoviesCardList = ({ movies = [], isRemovable = false }) => {
  const screenWidth = useScreenWidth();

  const showCount = useMemo(() => {
    if (screenWidth < 500) {
      return 5;
    }
    if (screenWidth < 800) {
      return 8;
    }
    return 16;
  }, [screenWidth]);
  const isBtnShow = useMemo(
    () => showCount <= movies.length,
    [showCount, movies.length]
  );

  return (
    <div className="movies-list">
      <ul className="movies-list__list">
        {movies.slice(0, showCount).map((movie) => (
          <MovieCard movie={movie} key={movie.name} isRemovable={isRemovable} />
        ))}
      </ul>
      {isBtnShow ? (
        <div className="movies-list__more-section">
          <button className="movies-list__more-btn">Еще</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MoviesCardList;
