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
        //const page = getState().discoverFilms.page;
        dispatch(updateFetching(true));

        try {
            const list = await AsyncStorage.getItem(FILM_FAV)
            console.log('saveFavoriteList list: ', list);
            console.log('saveFavoriteList film: ', film);
            if (list !== null) {
                const favList = JSON.parse(list);

                if ( favList.filter((item) => { return item.id === film.id}).length > 0 ) {
                    
                } else {
                    const updatedFavList = _.concat(favList, film);
                    console.log('updatedFavList: ', updatedFavList);
                    await AsyncStorage.setItem(FILM_FAV, JSON.stringify(updatedFavList))
                    dispatch(updateFavoriteList(updatedFavList));
                }
            } else {
                const favList = [film];
                await AsyncStorage.setItem(FILM_FAV, JSON.stringify(favList));
            }
            dispatch(updateFetching(false));
        } catch(e) {
            console.log('actions error: ', e);
            dispatch(updateFetching(false));
        }
    };
};
