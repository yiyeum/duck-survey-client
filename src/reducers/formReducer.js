import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

function formReducer(state = initialState.form, action) {
    switch (action.type) {
        case types.SAVE_FORM: {
            return {
                ...state,
                form: action.model
            }
        }
        case types.CLEAR_FORM: {
            return {
                ...state,
                form: {}
            }
        }
        default:
            return state;
    }
}

export default formReducer;