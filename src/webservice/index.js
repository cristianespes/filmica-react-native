import axios from 'axios';
import { BASE_URL, API_KEY, LANGUAGE, DISCOVER_URL } from '../config/api';

// Configuración inicial para la api
export function configureAxios() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}

export function fetchDiscoverFilms() {
    //const url = DISCOVER_URL;
    const url = 'discover/movie?api_key=e68728e1e31dcda82f7b2b896f0c47be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

    return axios.get(url);
}

