import React, { useEffect, useMemo } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./Movies.css";
import Page from "../Page/Page";
import Preloader from "../Preloader/Preloader";
import { useMovies } from "../../utils/useMovies";
import { useSavedMovies } from "../../utils/useSavedMovies";

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

  const { savedMovies, fetchSavedMovies } = useSavedMovies();

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  const mo = useMemo(() => {
    return movies.map((m) => {
      const saved = savedMovies.find((sm) => sm.movieId === m.id);
      return {
        ...m,
        isLiked: saved !== undefined,
        _id: saved?._id,
      };
    });
  }, [movies, savedMovies]);

  return (
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
          <MoviesCardList
            actionBtn={Btn}
            onDelete={fetchSavedMovies}
            movies={mo}
          />
        )}
        {errorString}
      </section>
    </Page>
  );
};

export default Movies;
