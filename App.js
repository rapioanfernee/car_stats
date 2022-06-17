import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './components/NavigationTabs';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <NavigationTabs />
    </NavigationContainer >
  );
}

