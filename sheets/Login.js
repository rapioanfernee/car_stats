import React, { useState } from 'react'
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import Button from '../components/Button'
import Form from "../components/Form"
import Header from '../components/Header'

import loginValidationSchema from '../components/formSchemas/loginValidationSchema';

import config1 from '../colors'
import { useFirebase } from '../context/firebase-context';

const LOGIN_FIELDS = [
    {
        id: `login-email-address-${Math.random(100)}`,
        label: "Email Address",
        name: 'emailAddress',
        defaultValue: '',
        placeHolder: 'Email Address',
        required: true,
        keyboardType: 'email-address'
    },
    {
        id: `login-password-${Math.random(100)}`,
        label: "Password",
        name: 'password',
        defaultValue: '',
        placeHolder: '0',
        required: true,
        keyboardType: 'default',
        secureTextEntry: true,
    }
]

const Login = ({
    open,
    setOpen,
    setRegisterScreenOpen,
    setStartScreenOpen,
    setUser
}) => {
    const {
        auth,
        signInWithEmailAndPassword,
        signInAnonymously
    } = useFirebase();

    const [loginError, setLoginError] = useState('');

    const handleLogin = (formData) => {
        signInWithEmailAndPassword(
            formData,
            (userCredentials) => setUser(userCredentials.user),
            error => setLoginError(error.code)
        )
    }

    const anonymousLogin = () => {
        signInAnonymously(
            () => setOpen(false),
            (error) => {
                console.log(error)
            }
        );
    }

    // const signInWithFacebook = async () => {
    //     try {
    //         await Facebook.initializeAsync({
    //             appId: process.env.FACEBOOK_APP_ID,
    //         });
    //         const { type, token } =
    //             await Facebook.logInWithReadPermissionsAsync({
    //                 permissions: ['public_profile'],
    //             });
    //         if (type === 'success') {
    //             // Get the user's name using Facebook's Graph API
    //             const facebookAuthProvider = new FacebookAuthProvider();
    //             const credential = facebookAuthProvider.credential(token);
    //             const response = await signInWithCredential(auth, credential).catch(error => {
    //                 console.log(error)
    //             });
    //             console.log(response)
    //             Alert.alert('Logged in!!');
    //         } else {
    //             // type === 'cancel'
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         alert(`Facebook Login Error: ${error.message}`);
    //     }
    // }

    const ActionButtons = (handleSubmit, reset) => (
        <>
            {loginError ? <LoginErrorMessage code={loginError} /> : <View />}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: '45%' }}>
                    <Button
                        text="Submit"
                        textColor="white"
                        buttonStyle={styles.buttonSubmitStyle}
                        onButtonPress={handleSubmit(handleLogin)}
                    />
                </View>
                <View style={{ width: '45%' }}>
                    <Button
                        text="Clear"
                        textColor={config1.black}
                        buttonStyle={styles.buttonClearStyle}
                        onButtonPress={() => {
                            setLoginError('')
                            reset()
                        }}
                    />
                </View>
            </View>

            <View style={styles.oAuthContainer}>
                {/* Facebook Login Button - Implement once published in Google Play*/}
                {/* <View style={styles.oAuthButtons}>
                    <Button onButtonPress={signInWithFacebook} icon={
                        <Image
                            style={{
                                height: 50,
                                width: 50
                            }}
                            source={require('../assets/images/facebook-icon.png')}
                        />
                    } />
                </View> */}

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
                    setRegisterScreenOpen(true)
                }}>
                <Text style={styles.registerbuttonText}>
                    Don't have an account yet? Register now!
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={anonymousLogin}>
                <Text style={{ ...styles.registerbuttonText, borderBottomWidth: 0 }}>
                    Or sign-in anonymously
                </Text>
            </TouchableOpacity>
        </>
    )


    const LoginErrorMessage = ({ code }) => {
        let errorMessage = ''
        switch (code) {
            case 'auth/user-not-found': {
                errorMessage = 'User does not exist';
                break;
            }
            default: {
                errorMessage = code
                break;
            }
        }
        return (
            <View>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
        )
    }

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
                    actionButton={ActionButtons}
                    validationSchema={loginValidationSchema}
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
        backgroundColor: config1.red,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonClearStyle: {
        border: 1,
        borderRadius: 8,
        backgroundColor: config1.grey,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    registerButton: {
        marginVertical: 64,
    },
    registerbuttonText: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: config1.red,
        color: config1.red
    },
    oAuthContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 32,
    },
    oAuthButtons: {
        marginHorizontal: 32,
    },
    errorMessage: {
        color: config1.red,
        marginBottom: 16
    }
})

export default Login