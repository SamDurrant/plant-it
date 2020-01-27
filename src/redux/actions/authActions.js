import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_CURRENT_USER,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../types';
import {db, auth} from '../../config/fbConfig';


// logs a user into their account
export const doSignInWithEmailAndPassword = userAccount => dispatch => {
  let { email, password } = userAccount;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ 
        type: LOGIN_SUCCESS 
      });
    })
    .then(() => {
      getCurrentUser();  
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
  auth
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
export const doCreateUserWithEmailAndPassword = userData => dispatch => {
  const { email, password, firstName, lastName } = userData;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      const  userAuth = data.user;

      if (!userAuth) return;
      const docRef = db.doc(`users/${userAuth.uid}`);
      docRef
        .get()
        .then(user => {
          if (!user.exists) {
            const newUser = {
              email,
              userId: userAuth.uid,
              firstName,
              lastName,
              createdAt: new Date().toISOString()
            }
            
            docRef.set(newUser)
          }
          dispatch({ type: LOGIN_SUCCESS });
          getCurrentUser();
        })
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

// logs a user out
export const doSignOutUser = () => dispatch => {
  auth
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