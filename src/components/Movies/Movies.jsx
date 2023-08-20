import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesCards } from "../../utils/testcards";
import "./Movies.css";
import Page from "../Page/Page";

const Movies = () => {
  return (
    <Page>
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={moviesCards} />
      </section>
    </Page>
  );
};

export default Movies;
