import React from 'react'

import Main from './sheets/Main'

import { UserProvider } from './context/user-context';
import { FirebaseProvider } from './context/firebase-context';

export default function App() {

  // Add context providers here
  return (
    <FirebaseProvider>
      <UserProvider>
        <Main />
      </UserProvider>
    </FirebaseProvider>
  );
}

