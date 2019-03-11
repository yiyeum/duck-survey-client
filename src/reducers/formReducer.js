import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

function formReducer(state = initialState.data, action) {
    switch (action.type) {
        case types.GOT_FORMS: {
            return {
                ...state,
                forms: action.data
            }
        }
        default:
            return state;
    }
}

export default formReducer;