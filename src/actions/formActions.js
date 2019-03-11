import * as types from './actionTypes';

/**
 * Submit form with the data model
 * @param {*} model form data 
 */
export function submitForm(model) {
    return {
        type: types.SUBMIT_FORM,
        ...model
    }
}

/**
 * To get forms from db
 */
export function getForms() {
    return {
        type: types.GET_FORMS
    }
}

/**
 * Send the data(forms) to redux store 
 * @param {*} data 
 */
export function gotForms(data) {
    return {
        type: types.GOT_FORMS,
        data
    }
}