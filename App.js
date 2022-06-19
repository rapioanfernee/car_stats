import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import NavigationTabs from './components/NavigationTabs';
import GetStarted from './sheets/GetStarted';
import Login from './sheets/Login';
import Register from './sheets/Register';

const IS_AUTHENTICATED = false;

export default function App() {

  const [startScreenOpen, setStartScreenOpen] = useState(true);
  const [loginScreenOpen, setLoginScreenOpen] = useState(false);
  const [registerScreenOpen, setRegisterScreenOpen] = useState(false);

  useEffect(() => {
    if (!startScreenOpen && !IS_AUTHENTICATED) {
      setLoginScreenOpen(true)
    }
    else {
      setLoginScreenOpen(false)
    }
  }, [startScreenOpen])

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <GetStarted open={startScreenOpen} setOpen={setStartScreenOpen} />
      <Login
        open={loginScreenOpen}
        setRegisterScreenOpen={setRegisterScreenOpen}
        setStartScreenOpen={setStartScreenOpen}
        setOpen={setLoginScreenOpen}
      />
      <Register
        open={registerScreenOpen}
        setLoginScreenOpen={setLoginScreenOpen}
        setStartScreenOpen={setStartScreenOpen}
        setOpen={setRegisterScreenOpen}
      />
      {IS_AUTHENTICATED && <NavigationTabs />}
    </NavigationContainer >
  );
}

