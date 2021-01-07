import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productReducer from './productReducer'
import shoppingCartReducer from './shoppingCartReducer'
import orderReducer from './orderReducer'
import checkoutReducer from './checkoutReducer'

const rootReducer = combineReducers({
    //   all of the reducers names
    checkout: checkoutReducer,
    shoppingCart: shoppingCartReducer,
    products: productReducer,
    user: userReducer,
    order: orderReducer
});

export default rootReducer
