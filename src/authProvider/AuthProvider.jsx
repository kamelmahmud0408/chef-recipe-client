import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.conflig';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app)
const gooogleAutrhProvider=new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    //  email password sign in

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google sign in
    const signInwithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,gooogleAutrhProvider)
       
    }
        // github sign in
    const signInwithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubAuthProvider)
       
    }
    
    //  log out

    const logOut = () => {
        return signOut(auth);
    }
  

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

  

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        signInwithGoogle,
        signInwithGithub,
        
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    };
export default AuthProvider;