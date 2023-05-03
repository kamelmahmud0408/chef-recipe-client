import React, { Children, createContext, useState } from 'react';
import app from '../firebase/firebase.conflig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app)

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
        return signInWithPopup(auth,gooogleAutrhProvider)
    }



    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        signInwithGoogle
    }
    


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    };
export default AuthProvider;