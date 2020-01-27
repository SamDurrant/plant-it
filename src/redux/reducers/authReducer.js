import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SET_CURRENT_USER
} from '../types';

const initialState = {
  authenticated: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true
      }
    case LOGIN_ERROR:
      console.log('error logging in');
      return  state;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        authenticated: false
      }
    case LOGOUT_ERROR:
      console.log('could not log you out');
      return state;
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true
      };
    default:
      return state;
  }
}

export default authReducer;