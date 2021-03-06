import axios from 'axios';
import { BASE_URL, API_KEY, LANGUAGE, DISCOVER_URL, SEARCH_ID_URL, RATING_URL, URL_REQUEST_GUEST_SESSION } from '../config/api';

// Configuración inicial para la api
export function configureAxios() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}

export function fetchDiscoverFilms(page) {
    const url = `${DISCOVER_URL}?api_key=${API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    return axios.get(url);
}

export function fetchDetailFilm(id) {
    const url = `${SEARCH_ID_URL}/${id}?api_key=${API_KEY}&language=${LANGUAGE}`;
    return axios.get(url);
}

export function postRatingFilm(id, rating, guestSession) {
    const url = `${RATING_URL}/${id}/rating?api_key=${API_KEY}&guest_session_id=${guestSession}`;
    return axios.post(url, rating);
}

export function requestGuestSession() {
    const url = URL_REQUEST_GUEST_SESSION;
    return axios.post(url);
}

