import { combineReducers } from 'redux';
import formReducer from './formReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    data: formReducer,
    common: commonReducer
});

export default rootReducer;