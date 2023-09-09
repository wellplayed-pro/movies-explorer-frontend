import React, { useEffect, useMemo, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import "../Movies/Movies.css";
import Page from "../Page/Page";
import { useSavedMovies } from "../../utils/useSavedMovies";
import DeleteBtn from "./deleteBtn";
import { SHORT_FILM_DURATION } from "../../utils/config";

const Movies = () => {
  const { savedMovies, fetchSavedMovies } = useSavedMovies();

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  const [isShortFilmFilter, setShortFilmFilter] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const filterFilms = ({ keywords, isShortFilmFilter }) => {
    setShortFilmFilter(isShortFilmFilter);
    setKeywords(keywords);
  };

  const searchIn = (where, what) =>
    where?.toLowerCase()?.includes(what?.toLowerCase());

  const mo = useMemo(
    () =>
      savedMovies
        .filter(
          (movie) =>
            keywords.length === 0 ||
            keywords.some(
              (keyword) =>
                searchIn(movie.nameRU, keyword) ||
                searchIn(movie.nameEn, keyword)
            )
        )
        .filter((movie) =>
          isShortFilmFilter ? movie.duration <= SHORT_FILM_DURATION : true
        ),
    [keywords, isShortFilmFilter, savedMovies]
  );

  return (
    <Page>
      <section className="movies">
        <SearchForm
          isShortFilm={false}
          keywords={[]}
          searchFn={filterFilms}
          canBeEmpty={true}
        />
        <MoviesCardList
          onDelete={fetchSavedMovies}
          actionBtn={DeleteBtn}
          alwaysShowAll={true}
          movies={mo}
        />
      </section>
    </Page>
  );
};

export default Movies;
