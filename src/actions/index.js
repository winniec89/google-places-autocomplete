import { SEARCH_LOCATION,  LOAD_HISTORY } from './types';

export const search_location = (payload) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_LOCATION,
            payload
        })
    }
}

export const search_history = () => {
    return {
        type: LOAD_HISTORY
    }
}
