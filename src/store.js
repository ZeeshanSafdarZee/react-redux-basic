
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // third party middleware

import user from './reducers/userReducer'

export const initialState = {
    result: 1,
    lastValues: [],
    user: {
        name: 'Zeeshan',
        age: 23
    }
  }


let store = createStore(
    combineReducers({ user }), 
    {}, // as we passed initialState in reducer
    applyMiddleware(logger) 
); 

export default store;

