import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import NavigationTabs from '../components/NavigationTabs';
import LoadingOverlay from './LoadingOverlay'
import GetStarted from './GetStarted';
import Login from './Login';
import Register from './Register';
import { useUser } from '../context/user-context';
import { useFirebase } from '../context/firebase-context';

export default function Main() {
    const { onAuthStateChanged, accessToken, loadingToken, storeToken, removeToken } = useFirebase();

    const { currentUser, setCurrentUser } = useUser();

    const [authenticated, setAuthenticated] = useState(false);

    const [startScreenOpen, setStartScreenOpen] = useState(true);
    const [loginScreenOpen, setLoginScreenOpen] = useState(false);
    const [registerScreenOpen, setRegisterScreenOpen] = useState(false);


    const initializeFirebase = () => {
        onAuthStateChanged(authUser => {
            if (authUser !== null) {
                setCurrentUser(authUser)
                storeToken(authUser.accessToken)
            }
            else {
                setCurrentUser(null)
                removeToken()
            }
        })
    }

    // Set authentication true if there's a user already
    useEffect(() => {
        setAuthenticated(!!currentUser)
    }, [currentUser])

    // Close all authentication screen
    useEffect(() => {
        if (authenticated) {
            setStartScreenOpen(false)
            setLoginScreenOpen(false)
            setRegisterScreenOpen(false)
        }
        else if (!authenticated && !startScreenOpen) {
            setStartScreenOpen(true)
        }
    }, [authenticated])

    // Firebase initialize
    useEffect(() => {
        initializeFirebase();
    }, [])

    useEffect(() => {
        console.log({
            loadingToken,
            accessToken
        })
    }, [loadingToken])

    return (
        <NavigationContainer>

            {/* <StatusBar style='auto' /> */}
            {startScreenOpen && (
                <GetStarted
                    open={startScreenOpen}
                    setOpen={setStartScreenOpen}
                    setLoginScreenOpen={setLoginScreenOpen}
                />
            )}
            {
                loginScreenOpen && (
                    <Login
                        authenticated={authenticated}
                        open={loginScreenOpen}
                        setOpen={setLoginScreenOpen}
                        setStartScreenOpen={setStartScreenOpen}
                        setRegisterScreenOpen={setRegisterScreenOpen}
                        setUser={setCurrentUser}
                    />
                )
            }
            {
                registerScreenOpen && (
                    <Register
                        authenticated={authenticated}
                        open={registerScreenOpen}
                        setOpen={setRegisterScreenOpen}
                        setLoginScreenOpen={setLoginScreenOpen}
                        setUser={setCurrentUser}
                    />
                )
            }
            {/* <LoadingOverlay />  To-Do : Add overlay when loading user*/}
            {authenticated && <NavigationTabs />}
        </NavigationContainer >
    );
}
