import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const authContext = createContext()
const Auth = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createWithemailAndPass = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const data = {
        auth,
        user,
        loader,
        createWithemailAndPass,
        signInWithEmailPass
    }

    // state observer 
    useEffect(()=>{
        const unsubscribe = () =>{
            onAuthStateChanged(auth, user=>{
                setUser(user)
                setLoader(false)
            })
        }

        return ()=>{
            return unsubscribe();
        }
    }, [user])
    return <authContext.Provider value={data}>{children}</authContext.Provider>;
};

export default Auth;