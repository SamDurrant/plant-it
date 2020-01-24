import {
  LOGIN_SUCCESS,
  
} from '../types';

const initialState = {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case LOGIN_SUCCESS:
      return {
        ...state
      }
    
    default:
      return state;
  }
}

export default authReducer;