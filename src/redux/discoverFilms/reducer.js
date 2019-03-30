import * as types from './types';

const initialState = {
    discoverList: [],
    isFetching: false,
    page: 1,
    total_pages: 0
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        
        case types.DISCOVER_UPDATE_LIST:
            return {
                ...state,
                discoverList: action.discoverList,
                page: action.page
            }

        case types.DISCOVER_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        default:
            return initialState
    }
}
