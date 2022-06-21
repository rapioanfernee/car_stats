import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import config1 from '../colors'

const Form = ({
    actionButton,
    fields,
    validationSchema = undefined,
}) => {


    const formDefaultValues = fields.reduce((acc, cur) => ({
        ...acc,
        [cur.name]: cur.defaultValue
    }), {})

    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: 'all',
        defaultValues: formDefaultValues,
        reValidateMode: 'onChange',
        resolver: validationSchema ? yupResolver(validationSchema) : undefined,
        delayError: 1000
    })

    const CustomField = ({ onChange, onBlur, value, field }) => {
        if (field.customField) {
            const { CustomFieldComponent } = field
            const customStyle = {
                borderColor: errors[field.name]?.message ? 'red' : config1.grey,
            }
            const fieldProps = { onChange, onBlur, value, field, customStyle }
            return <CustomFieldComponent {...fieldProps} />
        }

        return <TextInput
            style={{
                ...styles.textInput,
                borderColor: errors[field.name]?.message ? 'red' : config1.grey,
            }}
            onBlur={onBlur}
            onChangeText={(val) => {
                onChange(val)
            }}
            value={value}
            {...field}
        />
    }


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
                                    <Text >
                                        {field.label}
                                        {field.required ? (<Text style={{ color: 'red' }}>{' '}*</Text>) : ''}
                                    </Text>
                                    <CustomField onChange={onChange} onBlur={onBlur} value={value} field={field} />
                                    {
                                        errors[field.name]?.message ?
                                            <Text
                                                style={styles.errorMessage}
                                            >
                                                {errors[field.name]?.message}
                                            </Text>
                                            : <Text></Text>
                                    }
                                </View>
                            )}
                            name={field.name}
                        />
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
        marginVertical: 4,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginVertical: 4,
    },
    errorMessage: {
        color: config1.red
    }
})


export default Form;