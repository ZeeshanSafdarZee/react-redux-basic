// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();



// //////////////////////////////////////////////////////////////////////////////////////

// npm install redux --save


import { createStore, combineReducers } from 'redux';

const initialState = {
    number: 1
  }
  
  // this is the reducer which take action and update the appropriate state
  // reducer takes 2 arguments 
  // these arguments automatically passed by redux
  // 1st one is the state and the 2nd one is the action
  // reducer checks the type of the action and upon the type of action it update the state
  // and return the state
  // if a reducer not return the state then it will be an error because reducer is made
  // to change the state.
  
  const firstReducer = (state, action) => {
      switch (action.type) {
        case 'ADD':
          // here we manage the state
           state = state + action.payload
           console.log(state);
          break;
        
        case 'SUBTRACT':
          state = state - action.payload
          console.log(state);
          break;
        
        default:
          
          break;
      }
      return state;
  }
  
  const userReducer = (state, action) => {
    switch (action.type) {
      case 'SET_AGE':
        
        break;
      
      case 'SET_NAME':
      
        break;
      
      default:
        
        break;
    }
    return state;
  }
  
  
  // let store = createStore(combineReducers({
  //   firstReducer: firstReducer,
  //   secondReducer: secondReducer
  // }));
  
   
  
  let store = createStore(firstReducer, 1);
  // here 1 is our initial State of the application


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
  
  store.dispatch({
    type: 'ADD', // should be match which we define in reducer
    payload: 100
  });
  
  store.dispatch({
      type:'SUBTRACT',
      payload: 30
  });
 
  // we have to unique the type beacuase there can be many reducers and every reducer 
  // is maintaing many types. on redundant type store will not know that this type is belong
  // to which reducer