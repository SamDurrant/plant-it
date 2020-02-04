import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
let config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUT_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(config);
export const db = firebase.firestore();
export const auth = firebase.auth();


export const setUserProfile = async (userAuth, email, firstName, lastName) => {
  const docRef = db.doc(`users/${userAuth}`);
  const newUser = {
    email,
    firstName,
    lastName,
    userId: userAuth,
    createdAt: new Date().toISOString()
  }

  await docRef
    .get()
    .then(user => {
      if (!user.exists) {
        docRef.set(newUser);
      }
    })
    .catch(err => {
      console.log(err);
      return err;
    })
}

export const getUserProfile = async userAuth => {
  const docRef = db.doc(`users/${userAuth}`);
  let userData;

  await docRef
    .get()
    .then(doc => {
      if (doc.exists) {
        userData = doc.data();
      }
    })
    .catch(err => {
      console.log(err);
      return err;
    })
  
  return userData;
}