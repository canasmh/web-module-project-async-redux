import { FETCH_JOKE_START, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAILURE} from "../actions";

const initialState = {
    joke: undefined,
    error: '',
    isFetching: false,
};

function reducer(state=initialState, action) {
    console.log('reducer', action);

    switch (action.type) {
        case FETCH_JOKE_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }

        case FETCH_JOKE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                joke: {...action.payload}
            }

        case FETCH_JOKE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                joke: undefined
            }
        
        default:
            return state;
    }   
}

export default reducer;