import { SEARCH_LOCATION,  LOAD_HISTORY } from '../actions/types';

const initialState = {
    address: '',
    coordinates: {
        lat: 3.140853,
        lng: 101.693207
    },
    history: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_LOCATION:
            return { ...state,
                address: action.payload.address,
                coordinates: action.payload.coordinates,
                history: state.history.concat(action.payload.address)
            }
        case LOAD_HISTORY:
            return {
                history: state.history
            };
        default:
            return state;
    }
}

export default reducer;
