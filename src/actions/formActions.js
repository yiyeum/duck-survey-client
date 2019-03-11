import * as types from './actionTypes';

export function submitForm(model) {
    return {
        type: types.SUBMIT_FORM,
        ...model
    }
}

export function getForms() {
    return {
        type: types.GET_FORMS
    }
}

export function gotForms(data) {
    return {
        type: types.GOT_FORMS,
        data
    }
}