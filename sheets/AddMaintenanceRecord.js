import { useState } from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native'

import Header from '../components/Header'
import Form from '../components/Form'

const AddMaintenanceRecord = ({ open, setOpen }) => {

    const [recordedDate, setRecordedDate] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [odometerReading, SetOdometerReading] = useState(0);
    const [receipt, setReceipt] = useState(null)

    const fields = [
        {
            label: "Recorded Date",
            name: recordedDate,
            value: '',
            placeHolder: '0',
            required: true,
            id: `distance-traveled-${Math.random(100)}`
        },
        {
            label: "Total Price",
            name: totalPrice,
            value: '',
            placeHolder: '0',
            required: true,
            id: `distance-traveled-${Math.random(100)}`
        },
        {
            label: "Odometer Reading",
            name: odometerReading,
            value: '',
            placeHolder: '0',
            required: false,
            id: `distance-traveled-${Math.random(100)}`
        },
        {
            label: "Receipt",
            name: receipt,
            value: '',
            placeHolder: '0',
            required: false,
            id: `distance-traveled-${Math.random(100)}`
        },
    ]

    const handleSubmit = () => {

    }

    return (
        <Modal visible={open}>
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
            <Form fields={fields} onSubmit={handleSubmit} />
        </Modal>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        padding: 32,
    }
})

export default AddMaintenanceRecord