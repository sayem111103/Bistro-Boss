import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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

    const updatEProfile =(name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    const deleteAnUser =()=>{
        return deleteUser(auth.currentUser)
    }

    const data = {
        auth,
        user,
        loader,
        createWithemailAndPass,
        signInWithEmailPass,
        updatEProfile,
        deleteAnUser
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