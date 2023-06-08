import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth =getAuth(app);
const googleAuthProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser =(email, password)=>{
        console.log('createUser')
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
        form.reset();
    }

    const singIn=(email,password) =>{
        setloading(true);

        return signInWithEmailAndPassword(auth,email,password);
    }
    const singinWithGoogle=()=>{
        setloading(true);

        return signInWithPopup(auth, googleAuthProvider);
    }
    


    const logOut=()=>{
        setloading(true);

        return signOut(auth);

    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setloading(false);

        });
        return()=>{
            unsubscribe();
        }
    },[])



    const authInfo ={
        user,
        loading,
        createUser,
        singIn,
        singinWithGoogle,
        logOut
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;