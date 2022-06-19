import { View, Text, StyleSheet } from 'react-native'

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
        backgroundColor: "#902923",
        borderRadius: 8,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    valueContainer: {
        marginHorizontal: 8
    },
    value: {
        color: '#D6D5C9',
        fontSize: 18
    },
    unit: {
        color: '#D6D5C9',
        fontSize: 14
    }
})

export default MaintenanceRecordTile