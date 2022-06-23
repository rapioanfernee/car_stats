import { View, Text, StyleSheet } from 'react-native'

import config1 from '../colors'

const FuelEfficiencyTile = ({ data }) => {
    return (
        <View style={styles.tileContainer}>
            <View style={styles.mainValueContainer}>
                <Text style={{ ...styles.value, ...styles.mainValue }}>{data.fuelEconomy}</Text>
                <Text style={{ ...styles.unit, ...styles.mainUnit }}>km/L</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <View style={{ ...styles.valueContainer, marginRight: 32 }}>
                    <Text style={styles.value}>{data.distanceTraveled} km</Text>
                    <Text style={styles.unit}>Trip</Text>
                </View>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>{data.odometerReading} km</Text>
                    <Text style={styles.unit}>Odometer Reading</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: config1.panel1,
        borderRadius: 8,
        paddingVertical: 16,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    mainValueContainer: {
        marginLeft: 8,
        marginRight: 32,
        flexDirection: "row",
        alignItems: "center"
    },
    valueContainer: {
        marginHorizontal: 8,
    },
    mainValue: {
        fontSize: 64,
        marginRight: 8
    },
    value: {
        color: config1.text2,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'right'
    },
    mainUnit: {
        fontSize: 32,
        fontWeight: "300"
    },
    unit: {
        color: config1.text2,
        fontSize: 14,
        textAlign: 'right'
    }
})

export default FuelEfficiencyTile