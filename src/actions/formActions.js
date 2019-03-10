import * as types from './actionTypes';

export function submitForm(model) {
    return {
        type: types.SUBMIT_FORM,
        ...model
    }
}

export function saveForm(model) {
    return {
        type: types.SAVE_FORM,
        model
    }
}

export function clearForm() {
    return {
        type: types.CLEAR_FORM
    }
}
