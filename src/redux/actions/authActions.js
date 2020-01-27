import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_CURRENT_USER,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../types';
import firebase from 'firebase/app';
import db from '../../config/fbConfig';


// logs a user into their account
export const loginUser = userAccount => dispatch => {
  let { email, password } = userAccount;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ 
        type: LOGIN_SUCCESS 
      });
    })
    .catch(err => {
      let errorCode = err.code;
      let errorMessage = err.message;

      dispatch({ 
        type: LOGIN_ERROR,
        payload: { errorMessage, errorCode }
      })
  });
}

// gets current user
export const getCurrentUser = () => dispatch => {
  firebase
    .auth()
    .onAuthStateChanged(userAuth => {
    if (userAuth) {
      // if user is authorized, retrieve user profile from database
      db.doc(`users/${userAuth.uid}`)
        .get()
        .then(doc => {
          dispatch({ 
            type: SET_CURRENT_USER,
            payload: doc.data()
          })
        })
    } else {
      console.log('no user signed in');
    }
  });
}

// creates a new user
export const createNewUser = userData => dispatch => {
  let { email, password, firstName, lastName } = userData;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      // create user profile in our database
      createUserProfile(data.user, firstName, lastName);
      //
      getCurrentUser();
    })
    .catch(err => {
      let errorCode = err.code;
      let errorMessage = err.message;

      dispatch({ 
        type: LOGIN_ERROR,
        payload: { errorMessage, errorCode }
      })
  })
}

// creates a new user profile in database
export const createUserProfile = (userAuth, first, last) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  userRef.get()
    .then(user => {
      if (!user.exists) {
        const newUser = {
          email: userAuth.email,
          id: userAuth.uid,
          firstName: first,
          lastName: last
        }
        userRef.set(newUser);
      }
    })
    .catch(err => {
      console.log(err, 'something went wrong');
    })
}

// logs a user out
export const logoutUser = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS
      })
    })
    .catch(err => {
      dispatch({
        type: LOGOUT_ERROR,
        payload: err
      })
    })
}