import { View, Modal, StyleSheet, Image } from 'react-native';

import Button from '../components/Button'
import Form from "../components/Form"
import Header from '../components/Header'

import registerValidationSchema from '../components/formSchemas/registerValidationSchema'

import config1 from '../colors'
import { useFirebase } from '../context/firebase-context';

const REGISTER_FIELDS = [
    {
        id: `register-email-address-${Math.random(100)}`,
        label: "Email Address",
        name: 'emailAddress',
        defaultValue: '',
        placeHolder: '0',
        required: true,
        keyboardType: 'email-address'
    },
    {
        id: `register-confirm-email-address-${Math.random(100)}`,
        label: "Confirm Email Address",
        name: 'confirmEmailAddress',
        defaultValue: '',
        placeHolder: '0',
        required: true,
        keyboardType: 'email-address'
    },
    {
        id: `register-password-${Math.random(100)}`,
        label: "Password",
        name: 'password',
        defaultValue: '',
        placeHolder: '0',
        required: true,
        secureTextEntry: true,
        keyboardType: 'default'
    },
    {
        id: `register-confirm-password-${Math.random(100)}`,
        label: "Confirm Password",
        name: 'confirmPassword',
        defaultValue: '',
        placeHolder: '0',
        required: true,
        secureTextEntry: true,
        keyboardType: 'default'
    }
]

const Register = ({
    open,
    setOpen,
    setLoginScreenOpen,
    setUser
}) => {
    const { auth, createUserWithEmailAndPassword } = useFirebase();

    const handleSignUp = (formData) => {
        createUserWithEmailAndPassword(
            auth,
            formData,
            (response) => setUser(response.user),
            (error) => console.log(error)
        )
    }

    const ActionButtons = (handleSubmit, reset) => (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: '45%' }}>
                    <Button
                        text="Submit"
                        textColor="white"
                        buttonStyle={styles.buttonSubmitStyle}
                        onButtonPress={handleSubmit(handleSignUp)}
                    />
                </View>
                <View style={{ width: '45%' }}>
                    <Button
                        text="Clear"
                        textColor={config1.black}
                        buttonStyle={styles.buttonClearStyle}
                        onButtonPress={() => reset()}
                    />
                </View>
            </View>
        </>
    )

    return (
        <Modal visible={open} animationType="slide">
            <View style={styles.loginContainer}>
                {/* Header */}
                <View>
                    <Header
                        title="Register"
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
                            setLoginScreenOpen(true)
                        }}
                    />
                </View>
                {/* Form */}
                <Form
                    fields={REGISTER_FIELDS}
                    actionButton={ActionButtons}
                    validationSchema={registerValidationSchema}
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
    loginButton: {
        marginVertical: 64,
    },
    loginbuttonText: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: config1.red,
        color: config1.red,
        textAlign: 'center',
    }
})

export default Register