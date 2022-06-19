import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form';

import Button from './Button'

const Form = ({
    fields,
    handleFormSubmit
}) => {

    const formDefaultValues = fields.reduce((acc, cur) => ({
        ...acc,
        [cur.name]: cur.defaultValue
    }), {})

    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: formDefaultValues
    })

    const onSubmit = (data) => {
        handleFormSubmit(data)
    };

    return (
        <View style={styles.formContainer}>
            {/* Actual Form */}
            {
                fields.map(field => (
                    <View key={field.id}>
                        <Controller
                            control={control}
                            rules={{
                                required: field.required
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View
                                    style={styles.fieldContainer}

                                >
                                    <Text>
                                        {field.label}
                                        {field.required ? (<Text style={{ color: 'red' }}>{' '}*</Text>) : ''}
                                    </Text>
                                    <TextInput
                                        keyboardType='number-pad'
                                        placeholder={field.placeholder}
                                        style={{
                                            ...styles.textInput,
                                            borderColor: errors[field.name]?.message ? 'red' : "#D6D5C9",
                                        }}
                                        onBlur={onBlur}
                                        onChangeText={(val) => {
                                            onChange(val)
                                        }}
                                        value={value}
                                    />
                                </View>
                            )}
                            name={field.name}
                        />
                        {errors[field.name]?.message ? <Text>errors[field.name]?.message</Text> : <Text></Text>}
                    </View>
                ))
            }
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '30%' }}>
                    <Button
                        text="Submit"
                        textColor="white"
                        buttonStyle={styles.buttonSubmitStyle}
                        onButtonPress={handleSubmit(onSubmit)}
                    />
                </View>
                <View style={{ width: '30%', marginHorizontal: 16 }}>
                    <Button
                        text="Clear"
                        textColor="#0A100D"
                        buttonStyle={styles.buttonClearStyle}
                        onButtonPress={() => reset()}
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    formContainer: {
        padding: 32,
    },
    fieldContainer: {
        marginVertical: 8,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginVertical: 8
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
    }
})


export default Form;