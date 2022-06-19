import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Button from '../components/Button'
import Form from "../components/Form"
import Header from '../components/Header'

const Login = ({
    open,
    setOpen,
    setRegisterScreenOpen,
    setStartScreenOpen
}) => {

    const LOGIN_FIELDS = [
        {
            id: `login-email-address-${Math.random(100)}`,
            label: "Email Address",
            name: 'emailAddress',
            defaultValue: '',
            placeHolder: '0',
            required: true,
            keyboardType: 'default'
        },
        {
            id: `login-password-${Math.random(100)}`,
            label: "Password",
            name: 'password',
            defaultValue: '',
            placeHolder: '0',
            required: true,
            keyboardType: 'default'
        }
    ]

    const handleFormSubmit = (data) => {
        console.log(data)
    }

    const ActionButtons = (handleSubmit, reset) => (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: '45%' }}>
                    <Button
                        text="Submit"
                        textColor="white"
                        buttonStyle={styles.buttonSubmitStyle}
                        onButtonPress={handleSubmit(handleFormSubmit)}
                    />
                </View>
                <View style={{ width: '45%' }}>
                    <Button
                        text="Clear"
                        textColor="#0A100D"
                        buttonStyle={styles.buttonClearStyle}
                        onButtonPress={() => reset()}
                    />
                </View>
            </View>

            <View style={styles.oAuthContainer}>
                {/* Facebook Login Button */}
                <View style={styles.oAuthButtons}>
                    <Button onButtonPress={() => console.log("Login with Facebook")} icon={
                        <Image
                            style={{
                                height: 50,
                                width: 50
                            }}
                            source={require('../assets/images/facebook-icon.png')}
                        />
                    } />
                </View>

                {/* Google Login Button */}
                <View style={styles.oAuthButtons}>
                    <Button onButtonPress={() => console.log("Login with Google")} icon={
                        <Image
                            style={{
                                height: 50,
                                width: 50
                            }}
                            source={require('../assets/images/google-icon.png')}
                        />
                    } />
                </View>
            </View>

            <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                    setOpen(false)
                    setStartScreenOpen(false)
                    setRegisterScreenOpen(true)
                }}>
                <Text style={styles.registerbuttonText}>
                    Don't have an account yet? Register now!
                </Text>
            </TouchableOpacity>
        </>
    )

    return (
        <Modal visible={open} animationType="slide">
            <View style={styles.loginContainer}>
                {/* Header */}
                <View>
                    <Header
                        title="Login"
                        actionIcon={
                            <Image
                                style={{
                                    height: 18,
                                    width: 18
                                }}
                                source={require('../assets/images/close-icon.png')}
                            />
                        }
                        actionIconOnPress={() => {
                            setOpen(false)
                            setStartScreenOpen(true)
                        }}
                    />
                </View>
                {/* Form */}
                <Form
                    fields={LOGIN_FIELDS}
                    handleFormSubmit={handleFormSubmit}
                    actionButton={ActionButtons}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        padding: 32,
    },
    loginHeaderText: {
        fontSize: 42,
        fontWeight: 'bold'
    },
    buttonSubmitStyle: {
        border: 1,
        borderRadius: 8,
        backgroundColor: '#902923',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonClearStyle: {
        border: 1,
        borderRadius: 8,
        backgroundColor: '#D6D5C9',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    registerButton: {
        marginVertical: 64,
    },
    registerbuttonText: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#A22C29',
        color: '#A22C29'
    },
    oAuthContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 32,
    },
    oAuthButtons: {
        marginHorizontal: 32,
    }
})

export default Login