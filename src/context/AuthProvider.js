import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // sign in by google provider
    const loginUsingProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // register user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile 
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    // sign in 
    const login = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // email verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // signout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // on auth state changed 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
            return () => unsubscribe();
        });
        return () => unsubscribe();
    }, [])
    //console.log(loading);
    const authInfo = { user, loginUsingProvider, createUser, updateUserProfile, login, logOut, loading, verifyEmail, setLoading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;