import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import {thunk } from 'redux-thunk';
const rootReducers = combineReducers({
    products: reducers,
})
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
