import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./Movies.css";
import Page from "../Page/Page";
import Preloader from "../Preloader/Preloader";
import { useMovies } from "../../utils/useMovies";
import { SavedMoviesProvider } from "../../utils/savedMoviesContext";

import Btn from "./likeBtn";

const Movies = () => {
  const {
    movies,
    filterMovies,
    errorString,
    isLoading,
    isShortFilm,
    keywords,
  } = useMovies();

  return (
    <SavedMoviesProvider>
      <Page>
        <section className="movies">
          <SearchForm
            isShortFilm={isShortFilm}
            keywords={keywords}
            searchFn={filterMovies}
          />
          {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList actionBtn={Btn} movies={movies} />
          )}
          {errorString}
        </section>
      </Page>
    </SavedMoviesProvider>
  );
};

export default Movies;
