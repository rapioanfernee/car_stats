import { useMemo } from 'react'
import { Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/Header'
import config1 from '../colors'
import { useFirebase } from '../context/firebase-context'

const SETTINGS = [
    {
        category: 'account',
        label: 'Account',
        subSettings: [
            {
                id: `edit-profile-info-${Math.random()}`,
                label: "Edit profile information",
                name: 'editProfileInformation',
                category: 'account',
            },
            {
                id: `customize-appearance-${Math.random()}`,
                label: "Customize appearance ",
                name: 'customizeAppearance',
                category: 'account',
            },
        ]
    },
    {
        category: 'car',
        label: 'Cars',
        subSettings: [
            {
                id: `edit-car-info-${Math.random()}`,
                label: "Edit cars",
                name: 'editCars',
                category: 'car',
            }
        ]
    },
    {
        category: 'authentication',
        label: 'Authentication',
        subSettings: [
            {
                id: `continue-create-account-${Math.random()}`,
                label: "Continue to create account",
                name: 'continueCreateAccount',
                category: 'authentication',
            },
            {
                id: `user-logout-${Math.random()}`,
                label: "Logout user",
                name: 'logoutUser',
                category: 'authentication',
            },
        ]
    }
]

const UserSettings = () => {
    const { auth } = useFirebase();

    const filterUserSettings = (settings) => {
        let disabledSettings = []
        if (auth.currentUser.isAnonymous) {
            disabledSettings = ['editProfileInformation']
        }
        else {
            disabledSettings = ['continueCreateAccount']
        }
        return settings.filter(setting => !disabledSettings.includes(setting.name))
    }

    const settingAction = useMemo(() => ({
        logoutUser: () => {
            auth.signOut();
        }
    }), [])

    const HorizontalLine = ({ borderColor, marginLeft }) => (
        <View style={{ ...styles.horizontalLine, borderColor, marginLeft }} />
    )

    return (
        <View style={styles.userSettingsContainer}>
            <View style={styles.headerContainer}>
                <Header
                    title="Hello user!"
                    actionIcon={
                        <Image
                            style={styles.image}
                            source={require('../assets/images/user-icon.png')}
                        />
                    }
                />
                <View>
                    <ScrollView>
                        {SETTINGS.map((category, indexFirst) => (
                            <View key={`${category.id}-${indexFirst}`}>
                                <View
                                    style={styles.category}
                                >
                                    <Text style={styles.categoryText}>
                                        {category.label}
                                    </Text>
                                    <View>
                                        {filterUserSettings(category.subSettings).map((setting, indexSecond) => (
                                            <View key={`${setting.id}-${indexSecond}`}>
                                                <TouchableOpacity
                                                    style={styles.setting}
                                                    onPress={settingAction[setting.name]}
                                                    delayPressIn={500}
                                                >
                                                    <Text style={styles.settingText}>
                                                        {setting.label}
                                                    </Text>
                                                </TouchableOpacity>
                                                <HorizontalLine borderColor={config1.grey} marginLeft={16} />
                                            </View>
                                        ))}
                                    </View>
                                </View>
                                {indexFirst !== SETTINGS.length - 1 && (
                                    <HorizontalLine borderColor={config1.black} marginLeft={0} />
                                )}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userSettingsContainer: {
        padding: 32
    },
    headerContainer: {
        marginTop: 16
    },
    image: {
        tintColor: config1.black,
        height: 50,
        width: 50,
    },
    category: {
        marginVertical: 16,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    setting: {
        marginVertical: 8,
        marginLeft: 16,
    },
    settingText: {
        fontSize: 20,
    },
    horizontalLine: {
        borderWidth: 1,
    }
})

export default UserSettings;