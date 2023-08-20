import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { moviesCards } from "../../utils/testcards";
import Page from "../Page/Page";

const Movies = () => {
  return (
    <Page>
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={moviesCards.slice(0, 3)} isRemovable />
      </section>
    </Page>
  );
};

export default Movies;
