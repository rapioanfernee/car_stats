import React, { useState, useContext, useEffect, useMemo } from 'react'
import { initializeApp } from 'firebase/app'
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInAnonymously,
    signInWithEmailAndPassword,
    signInWithCredential,
    FacebookAuthProvider
} from 'firebase/auth';
import { getDatabase, ref, onValue, push } from 'firebase/database'

import { firebaseConfig } from '../firebase/firebase.config'

const FirebaseContext = React.createContext();

export const useFirebase = () => {
    return useContext(FirebaseContext)
}

export const FirebaseProvider = ({ children }) => {
    const firebaseApp = initializeApp(firebaseConfig)
    const db = getDatabase(firebaseApp)


    const [auth, setAuth] = useState(getAuth(firebaseApp));

    const authentication = useMemo(() => ({
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
    }), [auth])

    const database = useMemo(() => ({
        db,
        addUser: (email, userId, onSuccess, onError) => {
            push(ref(db, '/users'), { email, userId })
                .then(onSuccess)
                .catch(onError)
        },
        addFuelEconomy: ({ formData, userId, carId }, onSuccess, onError) => {
            const dbRef = ref(db, '/fuelEconomy' + `/${userId}` + `/${carId}`)
            push(dbRef, { ...formData, userId, carId })
                .then(onSuccess)
                .catch(onError)
        },
        addExpensesRecord: ({ formData, userId, carId }, onSuccess, onError) => {
            const dbRef = ref(db, '/expensesRecord' + `/${userId}` + `/${carId}`)
            push(dbRef, { ...formData, userId, carId })
                .then(onSuccess)
                .catch(onError)
        },
        getData: ({ userId, carId }, path, snapshotFunction) => {
            const dbRef = ref(db, path + `/${userId}` + `/${carId}`)
            let data = {}
            onValue(dbRef, snapshotFunction)
            return data
        },
        updateUser: () => {

        },
        deleteUser: () => { }
    }), [db])

    const props = useMemo(() => ({
        ...authentication,
        ...database,
    }), [authentication,])


    useEffect(() => {

    }, [])


    return (
        <FirebaseContext.Provider value={props}>
            {children}
        </FirebaseContext.Provider>
    )
}