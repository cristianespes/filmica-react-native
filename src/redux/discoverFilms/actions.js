import * as types from './types';
import * as api from '../../webservice';

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
