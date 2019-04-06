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

export function initFilmsList() {
    return function(dispatch, getState) {
      dispatch(updateFilmsList([], 1));
      const initialPage = 1;
      dispatch(updateOffset(initialPage));
      dispatch(fetchFilmsList());
    };
}

// TODO: Repasar...
export function addFilm(film) {
    return function(dispatch, getState) {
        const list = [film, ...getState().discoverFilms.discoverList];
        const totalPages = getState().discoverFilms.totalPages;
        dispatch(updateFilmsList(list, totalPages))
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
                this.setState({ err: err });
            })
            .finally( () => {
                dispatch(updateFetching(false));
            });
    };
};
