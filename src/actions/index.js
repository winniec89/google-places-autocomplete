import { SEARCH_LOCATION,  LOAD_HISTORY } from './types';

export const searchLocation = (payload) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_LOCATION,
            payload
        })
    }
}

export const searchHistory = () => {
    return {
        type: LOAD_HISTORY
    }
}
