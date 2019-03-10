import { combineReducers } from 'redux';
import formReducer from './formReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    form: formReducer,
    common: commonReducer
});

export default rootReducer;