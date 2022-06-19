import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form';

const Form = ({
    actionButton,
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
                                        keyboardType={field.keyboardType}
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
            {/* Optional action buttons. ex: Submit and clear button */}
            {actionButton(handleSubmit, reset)}
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
    }
})


export default Form;