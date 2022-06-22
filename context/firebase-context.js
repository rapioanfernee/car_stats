import React, { useState, useContext, useEffect, useMemo } from 'react'
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInAnonymously,
    signInWithEmailAndPassword,
    signInWithCredential,
    FacebookAuthProvider
} from 'firebase/auth';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase/firebase.config'

const FirebaseContext = React.createContext();

export const useFirebase = () => {
    return useContext(FirebaseContext)
}

export const FirebaseProvider = ({ children }) => {
    initializeApp(firebaseConfig)

    const [auth, setAuth] = useState(getAuth());

    useEffect(() => {

    }, [])

    const firebaseValues = useMemo(() => ({
        auth,
        createUserWithEmailAndPassword: (formData, onSuccess, onError) => {
            createUserWithEmailAndPassword(auth, formData.emailAddress, formData.password)
                .then(onSuccess)
                .catch(onError)
        },
        setAuth,
        onAuthStateChanged: (callbackFn) => {
            onAuthStateChanged(auth, callbackFn)
        },
        signInAnonymously: (onSuccess, onError) => {
            signInAnonymously(auth)
                .then(onSuccess)
                .catch(onError)
        },
        signInWithEmailAndPassword: (formData, onSuccess, onError) => {
            signInWithEmailAndPassword(auth, formData.emailAddress, formData.password)
                .then(onSuccess)
                .catch(onError)
        },
        signInWithCredential,
    }), [])

    return (
        <FirebaseContext.Provider value={firebaseValues}>
            {children}
        </FirebaseContext.Provider>
    )
}