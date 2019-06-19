import { initialState } from '../store'
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

export default mathReducer;