import * as types from './types';
import * as api from '../../webservice';

import { Actions } from 'react-native-router-flux';
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

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

export function initFilmsList() {
    return function(dispatch, getState) {
      dispatch(updateFilmsList([], 1));
      const initialPage = 1;
      dispatch(updateOffset(initialPage));
      dispatch(fetchFilmsList());
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


function fetchFilmsList() {
    // ACCION CON THUNK
    // todo: eliminar async
    return async (dispatch, getState) => {

        const page = getState().discoverFilms.page;

        dispatch(updateFetching(true));

        // TODO: ELIMINAR
        /*try {
            const value = await AsyncStorage.getItem('FILM_LIST')
            console.log('actions value: ', value);
            if(value !== null) {
                console.log('actions value DENTRO DEL IF')
                const list = JSON.parse(value);
                AsyncStorage.clear()
            } else {
                console.log('actions value DENTRO DEL ELSE');
            }
          } catch(e) {
            console.log('actions error: ', e);
          }*/

        api
            .fetchDiscoverFilms(page)
            .then( res => {
                //const list = res.data.results;
                const list = [...getState().discoverFilms.discoverList, ...res.data.results];
                const totalPages = res.data.total_pages;
                // TODO: ELIMINAR
                //AsyncStorage.setItem('FILM_LIST', JSON.stringify(list));
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
