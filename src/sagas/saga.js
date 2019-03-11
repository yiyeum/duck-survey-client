import {
    call, put, all, takeEvery
} from 'redux-saga/effects';
import axios from 'axios';
import * as formAction from '../actions/formActions';
import * as commonAction from '../actions/commonActions';
import * as types from '../actions/actionTypes';
const baseURL = 'http://duck-survey-api.herokuapp.com/api/';

function* submitForm({ fedTime, food, foodAmount, foodType, numberOfDucks, place, repeat }) {
    const model = {
        fedTime, food, foodAmount, foodType, numberOfDucks, place, repeat
    }
    try {
        const { data } = yield call(axios.post, baseURL, model);
        if (data) {
            yield put(commonAction.sendError(false));
        } else {
            yield put(commonAction.sendError(true, "There was an error submitting the form data. Please try again."));
        }
    } catch (error) {
        yield put(commonAction.sendError(true, "There was an error fetching data. Please try again."));
    }
}

function* getForms() {
    try {
        const { data } = yield call(axios.get, baseURL);
        if(data) {
            yield put(formAction.gotForms(data));
        } else {
            yield put(commonAction.sendError(true, "There was an error getting the form data. Please try again."));
        }
    } catch (error) {
        yield put(commonAction.sendError(true, "There was an error fetching data. Please try again."));
    }
}

function* watchEntity() {
    yield all([
        takeEvery(types.SUBMIT_FORM, submitForm),
        takeEvery(types.GET_FORMS, getForms)
    ]);
}

export default watchEntity;