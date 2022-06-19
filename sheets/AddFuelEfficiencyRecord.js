import { useState } from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native'

import Header from '../components/Header'
import Form from '../components/Form'

const AddFuelEfficiencyRecord = ({ open, setOpen }) => {

    const fields = [
        {
            id: `distance-traveled-${Math.random(100)}`,
            label: "Distance Traveled",
            name: 'distanceTraveled',
            defaultValue: '',
            placeHolder: '0',
            required: true,
        },
        {
            id: `fuel-refilled-${Math.random(100)}`,
            label: "Fuel Refiled",
            name: 'fuelRefilled',
            defaultValue: '',
            placeHolder: '0',
            required: true,
        },
        {
            id: `odomoeter-reading-${Math.random(100)}-1`,
            label: "Odometer Reading",
            name: 'odometerReading',
            defaultValue: '',
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

            <Form fields={fields} handleFormSubmit={handleFormSubmit} />
        </Modal>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        padding: 32,
    },
})

export default AddFuelEfficiencyRecord