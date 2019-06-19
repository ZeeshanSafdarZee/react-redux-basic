import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../containers/App';
import * as serviceWorker from '../serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // third party middleware
import { Provider } from 'react-redux';

// //////////////////////////////////////////////////////////////////////////////////////

// // npm install react-redux --save
// Now React + Redux
// 1st step is to connect your app with redux and this is through provider component
// which you import from react-redux
// which is --> import { Provider } from 'react-redux';
// then wrapp it with your whole App 
// like this
    // <Provider>  
    // <App />
    // </Provider>
// and provide your Redux store to the Provider Component
// like this
    // <Provider store={store}> // here store is your Redux store  
    // <App />
    // </Provider>

// Now second step is to use Redux Store
// which is is App.js


const initialState = {
    result: 1,
    lastValues: [],
    user: {
        name: 'Zeeshan',
        age: 23
    }
  }
  
  // this is the reducer which take action and update the appropriate state
  // reducer takes 2 arguments 
  // these arguments automatically passed by redux
  // 1st one is the state and the 2nd one is the action
  // reducer checks the type of the action and upon the type of action it update the state
  // and return the state
  // if a reducer not return the state then it will be an error because reducer is made
  // to change the state.
  
  const mathReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'ADD':
          // here we manage the state
          // this is mutable 
          // --> state.result += action.payload
          
          // but should be immutable
          // immutable mean we should make copy of the old one and manipulate that copy
            state = {
              // --> ...state, // spread operator as it make copies of the properties of the state and assign it to the properties of new one
              
              // ...state is equal to 
              // result: state.result,
              // lastValues: state.lastValues
              
            ...state,
            result: state.result + action.payload // override the property which you want to change
          }
          break;
        
        case 'SUBTRACT':
          state = {
              ...state,
              result: state.result - action.payload
          }
          
          break;
        
        default:
          
          break;
      }
      return state;
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AGE':
        state = {
            ...state,
            user: {
                ...state.user,
                age: action.payload
                
            }
        }
        break;
      
      case 'SET_NAME':
      state = {
        ...state,
        user: {
            ...state.user,
            name: action.payload
            
        }
    }
        break;
      
      default:
        
        break;
    }
    return state;
  }
  
// Here Creating middleware
// this is some special kind of thing
  const myLogger = (store) => (next) => (action) =>{
    console.log(action);
    next(action); // next method is very important
    // if we cannot call next method here then the action cannot go further 
    // it cannot go to the reducer and fail here hence it is an error ,
  }

  // this is just basics as we cannot use our own middleware
  // we will use other third party middleware in our projects

  
   // middleware is used before the state update and after the dispatch action
   // middleware is useful when we want do to some other stuff before updating the state
  
//   let store = createStore(
//       combineReducers({ firstReducer,userReducer }), 
//       {}, // as we passed initialState in reducer
//       applyMiddleware(myLogger)
//     ); 

    // applyMiddleware takes the argument which we want to execute as middleware

  let store = createStore(
      combineReducers({ user: userReducer }), 
      {}, // as we passed initialState in reducer
      applyMiddleware(logger) 
    ); 



  // createStore() --> takes 2 arguments
  // 1st one is reducer and 2nd one is the initial state
  // createStore() only take one reducer 
  // So if we want to make multiple reducer then we have to combine them using combineReducer()
  // combineReducer takes a javascript object and in this javascript object we have to pass 
  // reducers in key value pairs. 
  
  
  
  // whenever store update, the callback function in the subscribe function will be called 
  // basically this is the React JS or other language code which will be run whenever store update 
  
  
  store.subscribe(() => {
    console.log('Store updated!', store.getState());
  });
  
  
  // we dispatch the action to the store and store dispatch the action to reducer to do something
  // dispatch object take a javascript object which is our action
  // this object have 2 properties 
  // 1st one is the type and second one is the value often we name it payload but we can name it what we want
  // following is the example
  
//   store.dispatch({
//     type: 'ADD', // should be match which we define in reducer
//     payload: 100
//   });
  
//   store.dispatch({
//       type:'SUBTRACT',
//       payload: 30
//   });

//   store.dispatch({
//     type:'SET_AGE',
//     payload: 24
// });
 
  // we have to unique the type beacuase there can be many reducers and every reducer 
  // is maintaing many types. on redundant type store will not know that this type is belong
  // to which reducer

  ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>
    , 
    document.getElementById('root'));