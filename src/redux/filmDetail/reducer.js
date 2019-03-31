import * as types from './types';

const initialState = {
    film: {},
    isFetching: false
}

export default function(state = initialState, action = {}) {
    switch(action.type) {
        case types.DETAIL_UPDATE_FILM:
            return {
                ...state,
                film: action.film
            };

        case types.DETAIL_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };

        default:
            return state;
    }
}
