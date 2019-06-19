import React, { Component } from 'react';

import Main from '../components/Main';
import User from '../components/User';

import { connect } from 'react-redux';
import { setName } from '../actions/userActions'

class App extends Component {
  
  render() {
    console.log(this.props.user);
    return (
      <div>
        <Main changeUserName={() => this.props.setName('Ali')} />
        <User username={this.props.user.user.name}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user // state.userReducer is the reducer which handle the data
    // now this component have properties which are define in the userReducer state 
    // so we can access the name  of the user like this
    // this.props.user.user.name // as user is the initial State and user.name is the
    // name of the user in the initial State
  }
  // in order to work we have to execute this function 
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // key is the prop name but value is the action which i want to execute
//     setName: (name) => {
//       // dispatch is the same function which i understand in the index.js earlier
//       dispatch({
//         type: 'SET_NAME',
//         payload: name
//       });
//     } 
//     // now we can execute this setName props in our app component which is indeed a function 
//     // this.props.setName('Ali')
//   }
//   // in order to work we have to execute this function 
// };

const mapDispatchToProps = (dispatch) => {
  return {
    // key is the prop name but value is the action which i want to execute
    setName: (name) => {
      // dispatch is the same function which i understand in the index.js earlier
      dispatch(setName(name));
    } 
    // now we can execute this setName props in our app component which is indeed a function 
    // this.props.setName('Ali')
  }
  // in order to work we have to execute this function 
};



// in order to execute mapStateToProps we have to define aonther function connect()
// connect function connect your component with redux store
// though we wrapp whole App in Provider to connect with the store but in order to work
// we have to specifically tell the redux that which component will connect with store
// and which is good thing , sometime we may want that not whole app but neccessary components
// will connect to redux store otherwise it increase the complexity
// connect function takes 2 parameters, 
// 1st one is mapStateToProps and 2nd one is mapDispatchToProps
// this connect method return me a function and this function then takes component as an argument
// like define below
export default connect(mapStateToProps,mapDispatchToProps)(App);


// // //////////////////////////////////////////////////////////////////////////////////////

// to user redux store we have to define 
// which properties of my state i use in which component and which actions i have to dispatch there
// this is done throuhg 2 methods
// 1st one is mapStateToProps which define
// which properties of my gloabal application state do i want to use in this component
// mapStateToProps have state parameter given by redux 
// it return a javascript object which have key values pairs data
// keys are the properties and values are the data of the properties or say reducers
// const mapStateToProps = (state) => {
  
// }


// const mapStateToProps = (state) => {
//   return {
//     user: state.userReducer // state.userReducer is the reducer which handle the data
//     // now this component have properties which are define in the userReducer state 
//     // so we can access the name  of the user like this
//     // this.props.user.name
//   }
//   // in order to work we have to execute this function 
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // key is the prop name but value is the action which i want to execute
//     setName: (name) => {
//       // dispatch is the same function which i understand in the index.js earlier
//       dispatch({
//         type: 'SET_NAME',
//         payload: name
//       });
//     } 
//     // now we can execute this setName props in our app component which is indeed a function 
//     // this.props.setName('Ali')
//   }
//   // in order to work we have to execute this function 
// };


// // in order to execute mapStateToProps we have to define aonther function connect()
// // connect function connect your component with redux store
// // though we wrapp whole App in Provider to connect with the store but in order to work
// // we have to specifically tell the redux that which component will connect with store
// // and which is good thing , sometime we may want that not whole app but neccessary components
// // will connect to redux store otherwise it increase the complexity
// // connect function takes 2 parameters, 
// // 1st one is mapStateToProps and 2nd one is mapDispatchToProps
// // this connect method return me a function and this function then takes component as an argument
// // like define below
// connect(mapStateToProps,mapDispatchToProps)(App);




