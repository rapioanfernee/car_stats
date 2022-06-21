import { View, Text, StyleSheet } from 'react-native'

import config1 from '../colors'

const MaintenanceRecordTile = ({ data }) => {
    return (
        <View style={styles.tileContainer}>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.date}</Text>
                <Text style={styles.unit}>Date</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.price}PHP</Text>
                <Text style={styles.unit}>Price</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.odometerReading} km</Text>
                <Text style={styles.unit}>Odometer</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.receipt}</Text>
                <Text style={styles.unit}>Receipt</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: config1.red,
        borderRadius: 8,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    valueContainer: {
        marginHorizontal: 8
    },
    value: {
        color: config1.grey,
        fontSize: 18
    },
    unit: {
        color: config1.grey,
        fontSize: 14
    }
})

export default MaintenanceRecordTile