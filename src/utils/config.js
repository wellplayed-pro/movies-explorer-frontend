export const messageErrorMovies = "Во время запроса произошла ошибка.";
export const messageNotFound = "По вашему запросу ничего не найдено.";
export const messageKeyWordMovies = "Нужно заполнить поле для поиска";

export const MOVIES_SERVER_URL = "https://api.nomoreparties.co";

export const BASE_URL = process.env.NODE_ENV === "production"
  ? "ambernetdiploma.nomoreparties.co"
  : "http://localhost:3000";

export const API_URL = process.env.NODE_ENV === "production" ? "https://api.ambernetdiploma.nomoreparties.co" : 'http://localhost:3001'

export const DURATION_LENGTH = 40;


export const PAGE_WITHOUT_AUTH = ["/sign-in", "/sign-up"];
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const SHORT_FILM_DURATION = 40;
export const BREAKPOINTS = {
  tablet: 500,
  laptop: 800
}

export const START_MOVIES_COUNT = {
  laptop: 16,
  tablet: 8,
  mobile: 5
}

export const ADDITIONAL_MOVIES_COUNT = {
  laptop: 4,
  tablet: 2,
  mobile: 2

}