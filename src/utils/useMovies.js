import { useState } from "react";
import { getMovies } from "./MoviesApi"

class ArrayLocalStorage {
  constructor(local_storage_key) {
    this.local_storage_key = local_storage_key
  }

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.local_storage_key)) ?? []
    }
    catch {
      return []
    }
  }

  set(newValues) {
    localStorage.setItem(this.local_storage_key, JSON.stringify(newValues))
  }

  isEmpty() {
    return localStorage.getItem(this.local_storage_key) === null
  }

  clear() {
    localStorage.removeItem(this.local_storage_key)
  }
}

class BooleanLocalStorage {
  constructor(local_storage_key) {
    this.local_storage_key = local_storage_key
  }

  get() {
    try {
      return localStorage.getItem(this.local_storage_key) === 'true'
    }
    catch {
      return false
    }
  }

  set(newValues) {
    localStorage.setItem(this.local_storage_key, newValues)
  }

  clear() {
    localStorage.removeItem(this.local_storage_key)
  }
}


const searchIn = (where, what) =>
  where?.toLowerCase()?.includes(what?.toLowerCase());

export const useMovies = () => {
  const allMoviesStorage = new ArrayLocalStorage('allMovies');
  const prevSearchMoviesStorage = new ArrayLocalStorage('prevSearchMovies');
  const isShortFilmStorage = new BooleanLocalStorage('shortFilmFilter');
  const keywordsStorage = new ArrayLocalStorage('keywords');

  const [movies, setMovies] = useState(prevSearchMoviesStorage.get());
  const [isLoading, setLoading] = useState(false);
  const [errorString, setErrorString] = useState('');

  const filterMovies = async ({ keywords, isShortFilmFilter }) => {

    setErrorString('')

    if (allMoviesStorage.isEmpty()) {
      setLoading(true)
      try {
        const fetchedMovies = await getMovies()
        allMoviesStorage.set(fetchedMovies)
      }
      catch {
        setErrorString(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз."
        )
        setLoading(false)
        return;
      }
    }
    setLoading(false);
    const allMovies = allMoviesStorage.get();

    const filteredMovies = allMovies.filter((movie) =>
      keywords.some(
        (keyword) =>
          searchIn(movie.nameRU, keyword) || searchIn(movie.nameEn, keyword)
      ))
      .filter(movie => isShortFilmFilter ? movie.duration <= 40 : true)

    setMovies(filteredMovies)
    if (filteredMovies.length === 0) {
      setErrorString("Ничего не найдено")
      isShortFilmStorage.set(false)
      keywordsStorage.set([])
    }
    else {
      isShortFilmStorage.set(isShortFilmFilter)
      keywordsStorage.set(keywords)
    }

    prevSearchMoviesStorage.set(filteredMovies)
  }

  const clearAll = () => {
    prevSearchMoviesStorage.clear()
    isShortFilmStorage.clear()
    keywordsStorage.clear()
    allMoviesStorage.clear()
  }

  return { filterMovies, movies, errorString, isLoading, keywords: keywordsStorage.get(), isShortFilm: isShortFilmStorage.get(), clearAll }
}
