import { View, Text, StyleSheet } from 'react-native'

import config1 from '../colors'

const FuelEfficiencyTile = ({ data }) => {
    return (
        <View style={styles.tileContainer}>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.fuelEconomy}</Text>
                <Text style={styles.unit}>km/L</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.date}</Text>
                <Text style={styles.unit}>Date</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.odometerReading} km</Text>
                <Text style={styles.unit}>Odometer Reading</Text>
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

export default FuelEfficiencyTile