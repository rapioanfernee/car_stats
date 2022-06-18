import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import NavigationTabs from './components/NavigationTabs';
import GetStarted from './sheets/GetStarted';

export default function App() {

  const [startScreenOpen, setStartScreenOpen] = useState(true)

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <GetStarted open={startScreenOpen} setOpen={setStartScreenOpen} />
      <NavigationTabs />
    </NavigationContainer >
  );
}

