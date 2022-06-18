import { View, Text, TextInput, StyleSheet } from 'react-native'

import Button from './Button'

const Form = (props) => {
    const { onSubmit, fields } = props;

    const styles = StyleSheet.create({
        formContainer: {
            padding: 32,
        },
        fieldContainer: {
            marginVertical: 8,
        },
        textInput: {
            borderWidth: 1,
            borderColor: "#D6D5C9",
            borderRadius: 8,
            padding: 8,
            marginVertical: 8
        },
        buttonStyle: {
            border: 1,
            borderRadius: 8,
            backgroundColor: '#902923',
            paddingVertical: 8,
            paddingHorizontal: 16,
            width: '30%',
        }
    })

    handleSubmit = () => {
        onSubmit()
    }

    return (
        <View style={styles.formContainer}>
            {/* Actual Form */}
            {
                fields.map(field => (
                    <View style={styles.fieldContainer}>
                        <Text>
                            {field.label}
                            {field.required ? (<Text style={{ color: 'red' }}>{' '}*</Text>) : ''}
                        </Text>
                        <TextInput
                            keyboardType='number-pad'
                            placeholder={field.placeholder}
                            style={styles.textInput}
                        />
                    </View>
                ))
            }
            <View>
                <Button
                    text="Submit"
                    textColor="white"
                    buttonStyle={styles.buttonStyle}
                    onButtonPress={handleSubmit}
                />
            </View>
        </View>
    )
}


export default Form;