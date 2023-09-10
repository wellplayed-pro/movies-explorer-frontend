import React, { useContext, useMemo, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import "../Movies/Movies.css";
import Page from "../Page/Page";
import DeleteBtn from "./deleteBtn";
import { SHORT_FILM_DURATION } from "../../utils/config";
import {
  SavedMoviesContext,
  SavedMoviesProvider,
} from "../../utils/savedMoviesContext";

const SavedMoviesWrapper = ({ children }) => {
  const { savedMovies, unlikeMovieById } = useContext(SavedMoviesContext);
  const [isShortFilmFilter, setShortFilmFilter] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const filterFilms = ({ keywords, isShortFilmFilter }) => {
    setShortFilmFilter(isShortFilmFilter);
    setKeywords(keywords);
  };

  const searchIn = (where, what) =>
    where?.toLowerCase()?.includes(what?.toLowerCase());

  const mo = useMemo(() => {
    return savedMovies
      .filter(
        (movie) =>
          keywords.length === 0 ||
          keywords.some(
            (keyword) =>
              searchIn(movie.nameRU, keyword) || searchIn(movie.nameEn, keyword)
          )
      )
      .filter((movie) =>
        isShortFilmFilter ? movie.duration <= SHORT_FILM_DURATION : true
      );
  }, [savedMovies, keywords, isShortFilmFilter]);

  return (
    <SavedMoviesProvider>
      <Page>
        <section className="movies">
          <SearchForm
            isShortFilm={false}
            keywords={[]}
            searchFn={filterFilms}
            canBeEmpty={true}
          />
          <MoviesCardList
            actionBtn={DeleteBtn}
            alwaysShowAll={true}
            unlikeMovie={unlikeMovieById}
            movies={mo}
          />
        </section>
      </Page>
    </SavedMoviesProvider>
  );
};

const SavedMovies = () => {
  return (
    <SavedMoviesProvider>
      <SavedMoviesWrapper></SavedMoviesWrapper>
    </SavedMoviesProvider>
  );
};

export default SavedMovies;
