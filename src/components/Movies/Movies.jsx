import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesCards } from "../../utils/testcards";
import "./Movies.css";

const Movies = () => {
  return (
    <>
      <Header isAuth />
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={moviesCards} />
      </section>
    </>
  );
};

export default Movies;
