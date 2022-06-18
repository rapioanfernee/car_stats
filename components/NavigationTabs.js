import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../sheets/Dashboard'
import Fuel from '../sheets/Fuel'

const Tab = createBottomTabNavigator()

// TO-DO: Add another route for Trips section
const NavigationTabs = () => {
    return <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#0A100D',
            tabBarInactiveTintColor: "#0A100D",
            tabBarActiveBackgroundColor: '#B9BAA3',
            tabBarInactiveBackgroundColor: '#D6D5C9'
        }}
    >
        <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
                headerShown: false,
                tabBarIcon: ({ size }) => (
                    <Image style={{ height: size, width: size }} source={require('../assets/images/dashboard-icon.png')} />
                ),
            }}
        />
        <Tab.Screen
            name="Fuel"
            component={Fuel}
            options={{
                headerShown: false,
                tabBarIcon: ({ size }) => (
                    <Image style={{ height: size, width: size }} source={require('../assets/images/fuel-icon.png')} />
                ),
            }}
        />
        <Tab.Screen
            name="Maintenance"
            component={Dashboard}
            options={{
                headerShown: false,
                tabBarIcon: ({ size }) => (
                    <Image style={{ height: size, width: size }} source={require('../assets/images/maintenance-icon.png')} />
                ),
            }}
        />
        <Tab.Screen
            name="Get Started"
            component={Dashboard}
            options={{
                headerShown: false,
                tabBarIcon: ({ size }) => (
                    <Image style={{ height: size, width: size }} source={require('../assets/images/maintenance-icon.png')} />
                ),
            }}
        />
    </Tab.Navigator>
}

export default NavigationTabs