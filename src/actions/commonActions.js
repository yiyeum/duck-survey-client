import * as types from './actionTypes';

export function sendError(status, message) {
    return {
        type: types.SEND_ERROR,
        status,
        message
    }
}

export function clearError() {
    return {
        type: types.CLEAR_ERROR
    }
}