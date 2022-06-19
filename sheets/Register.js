import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';


import Button from '../components/Button'
import Form from "../components/Form"
import Header from '../components/Header'

const Register = ({
    open,
    setOpen,
    setLoginScreenOpen,
    setStartScreenOpen
}) => {

    const REGISTER_FIELDS = [
        {
            id: `register-email-address-${Math.random(100)}`,
            label: "Email Address",
            name: 'emailAddress',
            defaultValue: '',
            placeHolder: '0',
            required: true,
            keyboardType: 'default'
        },
        {
            id: `register-confirm-email-address-${Math.random(100)}`,
            label: "Confirm Email Address",
            name: 'confirmEmailAddress',
            defaultValue: '',
            placeHolder: '0',
            required: true,
            keyboardType: 'default'
        },
        {
            id: `register-password-${Math.random(100)}`,
            label: "Password",
            name: 'password',
            defaultValue: '',
            placeHolder: '0',
            required: true,
            keyboardType: 'default'
        },
        {
            id: `register-confirm-password-${Math.random(100)}`,
            label: "Confirm Password",
            name: 'confirmPassword',
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

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                    setOpen(false)
                    setStartScreenOpen(false)
                    setLoginScreenOpen(true)
                }}>
                <Text style={styles.loginbuttonText}>
                    Aleady have an account? Login now!
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
                            setStartScreenOpen(true)
                        }}
                    />
                </View>
                {/* Form */}
                <Form
                    fields={REGISTER_FIELDS}
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
    loginButton: {
        marginVertical: 64,
    },
    loginbuttonText: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#A22C29',
        color: '#A22C29',
        textAlign: 'center',
    }
})

export default Register