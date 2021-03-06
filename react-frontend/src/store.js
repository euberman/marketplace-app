import { createStore } from 'redux'
import rootReducer from './_reducers/index'

export function configureStore(){
  return createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = configureStore()

export default store