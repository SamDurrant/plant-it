import React, { createContext, useState, useEffect } from 'react';
import { auth, setUserProfile, getUserProfile } from '../firebase/fbConfig';

export const authContext  = createContext();

function AuthProvider (props) {
  const [userAuth, setUserAuth] = useState(null);
  const [userAccount, setUserAccount] = useState(null);

  const signIn = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(async res => {
        // get profile from fb database to set as current user profile
        let profile = await getUserProfile(res.user.uid);
        setUserAccount(profile);

        // set user auth to current logged in profile
        setUserAuth(res.user);
        return res.user;
      });
  };

  const signUp = (email, password, first, last) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(async res => {
        // set profile in fb database
        await setUserProfile(res.user.uid, email, first, last);
        // get profile from fb database to set as current user profile
        let profile = await getUserProfile(res.user.uid);
        setUserAccount(profile);

        // set user auth to current logged in profile
        setUserAuth(res.user);
        return res.user;
      });
  };

  const signOut = () => {
    return auth
      .signOut()
      .then(() => {
        // sign out user and set auth and account to false
        setUserAuth(false);
        setUserAccount(false);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        let profile = await getUserProfile(user.uid);
        setUserAccount(profile);
        setUserAuth(user);
      } else {
        setUserAccount(false);
        setUserAuth(false);
      }
    });

    // Cleanup subscription on unMount
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ userAuth, userAccount, signIn, signUp, signOut }}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthProvider;