import * as types from './actionTypes';

/**
 * Send error of form validation or from saga (data fetch error)
 * @param {*} status true if there is an error
 * @param {*} message message in string
 */
export function sendError(status, message) {
    return {
        type: types.SEND_ERROR,
        status,
        message
    }
}

/**
 * Clear the error with the false status and 
 * empty string of message
 */
export function clearError() {
    return {
        type: types.CLEAR_ERROR
    }
}