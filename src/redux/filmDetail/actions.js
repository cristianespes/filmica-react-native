import * as types from './types';
import * as api  from '../../webservice';

function updateFilm(film) {
    return {
        type: types.DETAIL_UPDATE_FILM,
        film
    };
}

function updateFetching(value) {
    return {
        type: types.DETAIL_UPDATE_FETCHING,
        value
    }
}

export function fetchDetailFilm(filmSelected) {
    return function(dispatch, getState) {
        
        if (!filmSelected) {
            return;
        }

        dispatch(updateFetching(true));

        const id = filmSelected.id
        api
            .fetchDetailFilm(id)
            .then( res => {
                const filmDetail = res.data;
                dispatch(updateFilm(filmDetail));
            })
            .catch( err => {
                console.log("fetchDetailFilm err: ", err);
                this.setState({ err: err });
            })
            .finally( () => {
                dispatch(updateFetching(false));
            });
    }
}
