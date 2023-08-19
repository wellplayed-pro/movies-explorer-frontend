import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { moviesCards } from "../../utils/testcards";

const Movies = () => {
  return (
    <>
      <Header isAuth />
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={moviesCards.slice(0, 3)} />
      </section>
    </>
  );
};

export default Movies;
