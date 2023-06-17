import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';

export const authContext = createContext()
const Auth = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createWithemailAndPass = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailPass = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updatEProfile = (name, photo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const deleteAnUser = () => {
        setLoader(true)
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
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, user => {
                setUser(user)
                if (user) {
                    axios.post('http://localhost:5000/jwt', { email: user.email })
                        .then(res => {
                            const token = res.data.token;
                            localStorage.setItem('bistro-token', token)
                            setLoader(false)
                        })
                }
                else{
                    localStorage.removeItem('bistro-token')
                    setLoader(false)
                }
            })
        }

        return () => {
            return unsubscribe();
        }
    }, [user])
    return <authContext.Provider value={data}>{children}</authContext.Provider>;
};

export default Auth;