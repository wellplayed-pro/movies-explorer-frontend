import { createContext, useEffect, useState } from "react";
import { getMoviesSaved, saveMovie, deleteMovieSaved } from "./MainApi";

export const SavedMoviesContext = createContext();

export const SavedMoviesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const fetchSavedMovies = async () => {
    setIsLoading(true);
    const movies = await getMoviesSaved();
    setSavedMovies(movies);
    setIsLoading(false);
  };

  const likeMovie = async (movie) => {
    setIsLoading(true);
    try {
      const newMovie = await saveMovie(movie);
      const newSavedMovies = [...savedMovies, newMovie];
      setSavedMovies(newSavedMovies);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };
  const unlikeMovieById = async (movieId) => {
    setIsLoading(true);
    try {
      await deleteMovieSaved(movieId);
      const newMovies = savedMovies.filter((m) => m._id !== movieId);
      setSavedMovies(newMovies);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  return (
    <SavedMoviesContext.Provider
      value={{ savedMovies, likeMovie, unlikeMovieById, isLoading }}
    >
      {children}
    </SavedMoviesContext.Provider>
  );
};
