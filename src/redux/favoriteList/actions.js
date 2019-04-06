import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import * as types from './types';
import { FILM_FAV } from '../../commons/constants';

function updateFavoriteList(list) {
    return {
        type: types.FAVORITE_UPDATE_LIST,
        list: list
    }
}

function updateFetching(value) {
    return {
        type: types.FAVORITE_UPDATE_FETCHING,
        value
    }
}

export function initFavoriteList() {
    return async (dispatch, getState) => {
        dispatch(updateFetching(true));

        try {
            const list = await AsyncStorage.getItem(FILM_FAV)
            const favList = JSON.parse(list);

            if (list !== null) {
                dispatch(updateFavoriteList(favList));
            }

            dispatch(updateFetching(false));
        } catch(e) {
            console.log('actions error: ', e);
            dispatch(updateFetching(false));
        }
    };
};

export function saveFavoriteList(film) {
    return async (dispatch, getState) => {
        dispatch(updateFetching(true));
        try {
            const { favoriteList } = getState().favoriteList;
            const favoriteListUpdated = _.concat(favoriteList, film)
            await AsyncStorage.setItem(FILM_FAV, JSON.stringify(favoriteListUpdated));
            dispatch(updateFavoriteList(favoriteListUpdated));
            dispatch(updateFetching(false));
        } catch(e) {
            console.log('actions error: ', e);
            dispatch(updateFetching(false));
        }
    };
};

export function removeFavoriteFilm(film) {
    return async (dispatch, getState) => {
        dispatch(updateFetching(true));
        try {
            const { favoriteList } = getState().favoriteList;
            const favoriteListUpdated = _.filter(favoriteList, item => item.id != film.id);
            await AsyncStorage.setItem(FILM_FAV, JSON.stringify(favoriteListUpdated));
            dispatch(updateFavoriteList(favoriteListUpdated));
            dispatch(updateFetching(false));
        } catch(e) {
            console.log('actions error: ', e);
            dispatch(updateFetching(false));
        }
    };
};
