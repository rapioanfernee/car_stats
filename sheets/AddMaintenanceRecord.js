import { useState } from 'react'
import { Modal, View, StyleSheet, Image } from 'react-native';

import Button from '../components/Button'
import Header from '../components/Header'
import Form from '../components/Form'

import config1 from '../colors'

import maintenanceRecordValidationSchema from '../components/formSchemas/maintenanceRecordValidationSchema'
import DatePickerTextInput from '../components/DatePickerTextInput';

import { useFirebase } from '../context/firebase-context';
import { useUser } from '../context/user-context';
import { useCar } from '../context/car-context'

const AddMaintenanceRecord = ({ open, setOpen }) => {
    const { addMaintenanceRecord } = useFirebase();
    const { currentUser } = useUser()
    const { currentCar } = useCar()

    const [submitError, setSubmitError] = useState('');

    const fields = [
        {
            defaultValue: '',
            id: `distance-traveled-${Math.random(100)}`,
            keyboardType: 'default',
            label: "Recorded Date",
            name: 'recordedDate',
            placeHolder: '0',
            required: true,
            customField: true,
            CustomFieldComponent: DatePickerTextInput
        },
        {
            defaultValue: '',
            id: `distance-traveled-${Math.random(100)}`,
            keyboardType: 'number-pad',
            label: "Total Price",
            name: 'totalPrice',
            placeHolder: '0',
            required: true,
        },
        {
            defaultValue: '',
            id: `distance-traveled-${Math.random(100)}`,
            keyboardType: 'number-pad',
            label: "Odometer Reading",
            name: 'odometerReading',
            placeHolder: '0',
            required: false,

        },
        // {
        //     defaultValue: '',
        //     id: `distance-traveled-${Math.random(100)}`,
        //     keyboardType: 'number-pad',
        //     label: "Receipt",
        //     name: 'receipt',
        //     placeHolder: '0',
        //     required: false,

        // },
    ]

    const handleFormSubmit = (formData) => {
        console.log(formData)
        addMaintenanceRecord(
            { formData, userId: currentUser.uid, carId: currentCar.id },
            (response) => setOpen(false), // To-Do: Add toast when success
            (error) => setSubmitError(error.code)
        )
    }

    return (
        <Modal visible={open} animationType="slide">
            <View style={styles.dashboardContainer}>
                <Header
                    title="Add maintenance record"
                    actionIcon={
                        <Image
                            style={{
                                height: 18,
                                width: 18
                            }}
                            source={require('../assets/images/close-icon.png')}
                        />
                    }
                    actionIconOnPress={() => setOpen(false)}
                />
            </View>
            <Form
                fields={fields}
                handleFormSubmit={handleFormSubmit}
                validationSchema={maintenanceRecordValidationSchema}
                actionButton={(handleSubmit, reset) => (
                    <>
                        {submitError ? <View>
                            <Text style={styles.errorMessage}>{submitError}</Text>
                        </View> : <View />}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '30%' }}>
                                <Button
                                    text="Submit"
                                    textColor="white"
                                    buttonStyle={styles.buttonSubmitStyle}
                                    onButtonPress={handleSubmit(handleFormSubmit)}
                                />
                            </View>
                            <View style={{ width: '30%', marginHorizontal: 16 }}>
                                <Button
                                    text="Clear"
                                    textColor={config1.black}
                                    buttonStyle={styles.buttonClearStyle}
                                    onButtonPress={() => {
                                        setSubmitError('')
                                        reset()
                                    }}
                                />
                            </View>
                        </View>
                    </>
                )}
            />
        </Modal>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        padding: 32,
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
    }
})

export default AddMaintenanceRecord