import * as types from './types';
import * as api from '../../webservice';

import { Actions } from 'react-native-router-flux';
import { Alert } from "react-native";

function updateFilmsList(list, totalPages) {
    return {
        type: types.DISCOVER_UPDATE_LIST,
        list: list,
        totalPages
    }
}

export function updateFilmSelected(value) {
    // ACCION PURA
    return {
        type: types.DISCOVER_UPDATE_SELECTED,
        value
    };
}

function updateFetching(value) {
    return {
        type: types.DISCOVER_UPDATE_FETCHING,
        value
    }
}

export function fetchFilmsList() {
    // ACCION CON THUNK
    return (dispatch, getState) => {
        //const list = [...getState(), 1, 2, 3] // Concatenación de elementos

        dispatch(updateFetching(true));

        api
            .fetchDiscoverFilms()
            .then( res => {
                const list = res.data.results;
                const totalPages = res.data.total_pages;
                dispatch(updateFilmsList(list, totalPages))
            })
            .catch( err => {
                console.log("fetchDiscoverFilms err: ", err);
                this.setState({ err: err });
            })
            .finally( () => {
                dispatch(updateFetching(false));
            });
    };
};

export function addFilm(film) {
    return function (dispatch, getState) {
        if (!film) {
            return
        }

        const list = [film, ...getState().discoverFilms.discoverList];
        const totalPages = getState().discoverFilms.totalPages;

        dispatch(updateFilmsList(list, totalPages));

        Actions.pop();

        Alert.alert('Añadida', 'Tu película se ha añadido a la colección');
    }
}
