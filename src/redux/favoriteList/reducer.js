import * as types from './types';

const initialState = {
    favoriteList: [],
    isFetching: false
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.FAVORITE_UPDATE_LIST:
            return {
                ...state,
                favoriteList: action.list
            }

        case types.FAVORITE_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        default:
            return state
    }
}