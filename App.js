import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth'

import { firebaseConfig } from './firebase/firebase.config'

import NavigationTabs from './components/NavigationTabs';
import GetStarted from './sheets/GetStarted';
import Login from './sheets/Login';
import Register from './sheets/Register';

export default function App() {
  initializeApp(firebaseConfig)
  const auth = getAuth();
  // Temporary authentication
  // To-do: Do the real thing
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState();

  const [startScreenOpen, setStartScreenOpen] = useState(true);
  const [loginScreenOpen, setLoginScreenOpen] = useState(false);
  const [registerScreenOpen, setRegisterScreenOpen] = useState(false);


  const initializeFirebase = () => {
    onAuthStateChanged(auth, authUser => {
      if (user !== null) {
        setUser(authUser)
      }
    })
  }

  // Set authentication true if there's a user already
  useEffect(() => {
    setAuthenticated(!!user)
  }, [user])

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

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <GetStarted
        open={startScreenOpen}
        setOpen={setStartScreenOpen}
        setLoginScreenOpen={setLoginScreenOpen}
      />
      <Login
        authenticated={authenticated}
        open={loginScreenOpen}
        setOpen={setLoginScreenOpen}
        setStartScreenOpen={setStartScreenOpen}
        setRegisterScreenOpen={setRegisterScreenOpen}
        setUser={setUser}
      />
      <Register
        authenticated={authenticated}
        open={registerScreenOpen}
        setOpen={setRegisterScreenOpen}
        setLoginScreenOpen={setLoginScreenOpen}
        setUser={setUser}
      />
      {authenticated && <NavigationTabs />}
    </NavigationContainer >
  );
}

