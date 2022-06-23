import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../sheets/Dashboard'
import Fuel from '../sheets/Fuel'
import UserSettings from '../sheets/UserSettings';

import config1 from '../colors'

const Tab = createBottomTabNavigator()

// TO-DO: Add another route for Trips section
const NavigationTabs = () => {
    return <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: config1.black,
            tabBarInactiveTintColor: config1.black,
            tabBarActiveBackgroundColor: config1.white,
            tabBarInactiveBackgroundColor: config1.grey
        }}
    >
        <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
                headerShown: false,
                tabBarIcon: ({ size }) => (
                    <Image style={{ height: size, width: size, opacity: 0.5 }} source={require('../assets/images/dashboard-icon.png')} />
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
            name="Expenses"
            component={Fuel}
            options={{
                headerShown: false,
                tabBarIcon: ({ size }) => (
                    <Image style={{ height: size, width: size }} source={require('../assets/images/maintenance-icon.png')} />
                ),
            }}
        />
        <Tab.Screen
            name="Account"
            component={UserSettings}
            options={{
                headerShown: false,
                tabBarIcon: ({ size }) => (
                    <Image style={{ height: size, width: size, opacity: 0.5 }} source={require('../assets/images/user-icon.png')} />
                ),
            }}
        />
    </Tab.Navigator>
}

export default NavigationTabs