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

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInwithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,gooogleAutrhProvider)
       
    }

    const signInwithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubAuthProvider)
       
    }

    const logOut = () => {
        return signOut(auth);
    }
  const updateUser=()=>{
    setUser(currentUser)
    return updateProfile(auth.currentUser,(name,photo))
  }
   

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
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
        updateUser
    }
    


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    };
export default AuthProvider;