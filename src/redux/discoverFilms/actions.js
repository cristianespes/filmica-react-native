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

function updateOffset(value) {
    return {
        type: types.DISCOVER_UPDATE_PAGINATION,
        value
    }
}

export function updateFilmsListOffset() {
    return function(dispatch, getState) {
        const newPage = getState().discoverFilms.page + 1;
        dispatch(updateOffset(newPage));
        dispatch(fetchFilmsList(newPage));
    }
}


export function fetchFilmsList() {
    // ACCION CON THUNK
    return (dispatch, getState) => {

        const page = getState().discoverFilms.page;

        dispatch(updateFetching(true));

        api
            .fetchDiscoverFilms(page)
            .then( res => {
                //const list = res.data.results;
                const list = [...getState().discoverFilms.discoverList, ...res.data.results];
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
