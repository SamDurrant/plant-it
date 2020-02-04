import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_CURRENT_USER,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../types';
import {db, auth} from '../../firebase/fbConfig';
import axios from 'axios';


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

export const getItems = () => dispatch => {
  const appId = '4d8cfdde';
  const appKey = 'a1e12734a782482fea04b983b75c562e';
  const apiEndpoint = 'https://trackapi.nutritionix.com/v2/search/instant';
  const headers = {
    "x-app-id": appId,
    "x-app-key": appKey,
    "x-remote-user-id": 0
  }
  const params = { query: "olive oil"};
  
  // returns list of foods both common and branded
  axios.get(`${apiEndpoint}?query=${params.query}`, {
    headers
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })

  // retrieves nutrition for food item
  const apiEnd = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

  axios.post(apiEnd, params, {
    headers
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err.message)
  })

  // retrieves nutrition for branded item
  // const p = { query: '54072a751701ffb9576b74ec' }
  // const apiBranded = 'https://trackapi.nutritionix.com/v2/search/item';
  // axios.get(apiBranded + `?nix_item_id=${p.query}`, { headers })
  // .then(res => {
  //   console.log(res.data.foods)
  // })
  // .catch(err => {
  //   console.log(err);
  // })
}