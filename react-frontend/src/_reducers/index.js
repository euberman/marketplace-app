import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productReducer from './productReducer'
import shoppingCartReducer from './shoppingCartReducer'

const rootReducer = combineReducers({
    //   all of the reducers names
    shoppingCart: shoppingCartReducer,
    products: productReducer,
    user: userReducer
});

export default rootReducer
