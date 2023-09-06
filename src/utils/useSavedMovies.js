import { useState } from "react"
import { getMoviesSaved } from "../utils/MainApi"

export const useSavedMovies = () => {
  const [isLoading, setIsLoading] = useState(false)


  const [savedMovies, setSavedMovies] = useState([])

  const fetchSavedMovies = async () => {
    setIsLoading(true)
    const movies = await getMoviesSaved()
    setSavedMovies(movies)
    setIsLoading(false)
  }

  return { savedMovies, isLoading, fetchSavedMovies }
}