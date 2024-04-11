import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth'; 
import app from '../firebase/firebase.config';
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    const res = createUserWithEmailAndPassword(auth, email, password);
    return res
  };
  
  const loginwithGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
    
  }

  const login = (email,password) => {
    setLoading(true);
    const res = signInWithEmailAndPassword(auth, email, password);
    return res
  }

  const logOut = () => {
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false);
    });
    return () => unsubscribe(); // Here, unsubscribe is invoked as a function
  }, [])
  

  const authInfo = {
    user,
    createUser,
    loginwithGoogle,
    loading,
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }; 
