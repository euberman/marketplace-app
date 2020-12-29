import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer'; //import all of the reducers.

const rootReducer = combineReducers({
    //   all of the reducers names
    productState: productReducer,
    userState: userReducer
});

export default rootReducer
