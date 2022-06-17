import { View, Text, StyleSheet } from 'react-native'

const MaintenanceRecordTile = () => {
    return (
        <View style={styles.tileContainer}>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>--</Text>
                <Text style={styles.unit}>Date</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>--</Text>
                <Text style={styles.unit}>Total Price</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>--</Text>
                <Text style={styles.unit}>Odometer Reading</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>--</Text>
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
        flexDirection: 'row'
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