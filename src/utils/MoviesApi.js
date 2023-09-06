import { MOVIES_URL } from "./config"
// ответ сервера при ошибке
const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

// получение фильмов
export const getMovies = () => {
    return fetch(`${MOVIES_URL}`, {
    })
        .then(response => handleResponse(response));
}