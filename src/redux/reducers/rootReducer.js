import { combineReducers } from 'redux';

// reducers needed to combine
import authReducer from './authReducer';
import goalReducer from './goalReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
  auth: authReducer,
  goal: goalReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default rootReducer;