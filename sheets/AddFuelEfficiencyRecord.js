import { useState } from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native'

import Button from '../components/Button'
import Header from '../components/Header'
import Form from '../components/Form'

import config1 from '../colors'

const AddFuelEfficiencyRecord = ({ open, setOpen }) => {

    const fields = [
        {
            defaultValue: '',
            id: `distance-traveled-${Math.random(100)}`,
            keyboardType: 'number-pad',
            label: "Distance Traveled",
            name: 'distanceTraveled',
            placeHolder: '0',
            required: true,
        },
        {
            defaultValue: '',
            id: `fuel-refilled-${Math.random(100)}`,
            keyboardType: 'number-pad',
            label: "Fuel Refiled",
            name: 'fuelRefilled',
            placeHolder: '0',
            required: true,
        },
        {
            defaultValue: '',
            id: `odomoeter-reading-${Math.random(100)}-1`,
            keyboardType: 'number-pad',
            label: "Odometer Reading",
            name: 'odometerReading',
            placeHolder: '0',
            required: false,
        },
    ]

    const handleFormSubmit = (data) => {
        console.log(data)
    }

    return (
        <Modal visible={open} animationType="slide">
            <View style={styles.dashboardContainer}>
                <Header
                    title="Add record"
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
                actionButton={(handleSubmit, reset) => (
                    <>
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
                                    onButtonPress={() => reset()}
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

export default AddFuelEfficiencyRecord