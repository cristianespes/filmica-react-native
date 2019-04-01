import * as types from './types';

const initialState = {
    discoverList: [],
    isFetching: false,
    page: 1,
    totalPages: 0,
    selected: null
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        
        case types.DISCOVER_UPDATE_LIST:
            return {
                ...state,
                discoverList: action.list,
                totalPages: action.totalPages
            }

        case types.DISCOVER_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        case types.DISCOVER_UPDATE_SELECTED:
            return {
                ...state,
                selected: action.value
            }
        
        case types.DISCOVER_UPDATE_PAGINATION:
            return {
                ...state,
                page: action.value
            }


        default:
            return state
    }
}
