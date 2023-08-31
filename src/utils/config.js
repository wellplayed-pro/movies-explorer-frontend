export const messageErrorMovies = "Во время запроса произошла ошибка.";
export const messageNotFound = "По вашему запросу ничего не найдено.";
export const messageKeyWordMovies = "Нужно заполнить поле для поиска";

export const MOVIES_SERVER_URL  = "https://api.nomoreparties.co";

export const BASE_URL = process.env.NODE_ENV === "production"
  ? "ambernetdiploma.nomoreparties.co"
  : "http://localhost:3000";

export  const DURATION_LENGTH = 40;


export const PAGE_WITHOUT_AUTH = ["/sign-in", "/sign-up"];