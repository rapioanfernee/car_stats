import { View, Text, StyleSheet } from 'react-native'

import config1 from '../colors'

const ExpensesRecordTile = ({ data }) => {

    const transformDate = (date) => {

    }

    return (
        <View style={styles.tileContainer}>
            <View style={styles.mainValueContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...styles.value, ...styles.mainValue }}>{data.totalPrice} </Text>
                    <Text style={{ ...styles.unit, ...styles.mainUnit }}>PHP</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start' }}>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>{data.recordedDate}</Text>
                    <Text style={styles.unit}>Date</Text>
                </View>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>{data.odometerReading} km</Text>
                    <Text style={styles.unit}>Odometer</Text>
                </View>
            </View>
            {/* <View style={styles.valueContainer}>
                <Text style={styles.value}>{data.receipt}</Text>
                <Text style={styles.unit}>Receipt</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: config1.olive,
        borderRadius: 8,
        paddingVertical: 16,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    mainValueContainer: {
        marginLeft: 8,
        marginRight: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    valueContainer: {
        marginHorizontal: 8,
    },
    mainValue: {
        fontSize: 48,
    },
    value: {
        color: config1.white,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'left'
    },
    mainUnit: {
        fontSize: 22,
        fontWeight: "300"
    },
    unit: {
        color: config1.white,
        fontSize: 14,
        textAlign: 'left'
    }
})

export default ExpensesRecordTile