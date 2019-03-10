import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

function commonReducer(state = initialState.common, action) {
    switch (action.type) {
        case types.SEND_ERROR: {
            return {
                ...state,
                error: {
                    status: action.status,
                    message: action.message
                }
            }
        }
        case types.CLEAR_ERROR: {
            return {
                ...state,
                error: {
                    status: false,
                    message: ''
                }
            }
        }
        default:
            return state;
    }
}

export default commonReducer;