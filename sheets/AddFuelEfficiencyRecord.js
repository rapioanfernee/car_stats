import { useState } from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native'

import Header from '../components/Header'
import Form from '../components/Form'

const AddFuelEfficiencyRecord = ({ open, setOpen }) => {

    const [distanceTraveled, setDistanceTraveled] = useState(0);
    const [fuelRefilled, setFuelRefilled] = useState(0);
    const [odometerReading, SetOdometerReading] = useState(0);

    const fields = [
        {
            label: "Distance Traveled",
            name: distanceTraveled,
            value: '',
            placeHolder: '0',
            required: true,
        },
        {
            label: "Fuel Refiled",
            name: fuelRefilled,
            value: '',
            placeHolder: '0',
            required: true,
        },
        {
            label: "Odometer Reading",
            name: odometerReading,
            value: '',
            placeHolder: '0',
            required: false,
        },
    ]

    const handleSubmit = () => {

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

            <Form fields={fields} onSubmit={handleSubmit} />
        </Modal>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        padding: 32,
    },
})

export default AddFuelEfficiencyRecord