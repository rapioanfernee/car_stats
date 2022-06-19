import { Modal, View, StyleSheet, Image } from 'react-native';


import Header from '../components/Header'
import Form from '../components/Form'

const AddMaintenanceRecord = ({ open, setOpen }) => {

    const fields = [
        {
            label: "Recorded Date",
            name: 'recordedDate',
            defaultValue: '',
            placeHolder: '0',
            required: true,
            id: `distance-traveled-${Math.random(100)}`
        },
        {
            label: "Total Price",
            name: 'totalPrice',
            defaultValue: '',
            placeHolder: '0',
            required: true,
            id: `distance-traveled-${Math.random(100)}`
        },
        {
            label: "Odometer Reading",
            name: 'odometerReading',
            defaultValue: '',
            placeHolder: '0',
            required: false,
            id: `distance-traveled-${Math.random(100)}`
        },
        {
            label: "Receipt",
            name: 'receipt',
            defaultValue: '',
            placeHolder: '0',
            required: false,
            id: `distance-traveled-${Math.random(100)}`
        },
    ]

    const handleFormSubmit = (data) => {
        console.log(data)
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
            <Form fields={fields} handleFormSubmit={handleFormSubmit} />
        </Modal>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        padding: 32,
    }
})

export default AddMaintenanceRecord