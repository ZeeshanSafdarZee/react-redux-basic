import { initialState } from '../store'
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
  
export default userReducer;