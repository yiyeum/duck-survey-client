import {
    call, put, all, takeEvery
} from 'redux-saga/effects';
import axios from 'axios';
import * as formAction from '../actions/formActions';
import * as types from '../actions/actionTypes';
const baseURL = 'http://localhost:8885/api/';

function* submitForm({ fedTime, food, foodAmount, foodType, numberOfDucks, place, repeat }) {
    const model = {
        fedTime, food, foodAmount, foodType, numberOfDucks, place, repeat
    }
    try {
        const { data } = yield call(axios.post, baseURL, model);
        if (data) {
            yield put(formAction.saveForm(data));
        }
    } catch (error) {
        //handle error
    }
}


function* watchEntity() {
    yield all([
        takeEvery(types.SUBMIT_FORM, submitForm)
    ]);
}

export default watchEntity;