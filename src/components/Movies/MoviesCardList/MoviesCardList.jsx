import React from "react";
import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesCardList = ({ movies = [] }) => {
  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesCardList;
