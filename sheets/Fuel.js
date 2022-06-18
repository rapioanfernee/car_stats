import { ScrollView, View, Text, StyleSheet } from 'react-native'

const Fuel = () => {
    return (
        <ScrollView style={styles.fuelContainer}>
            <View style={styles.firstTile}>
                <Text>Fuel</Text>
            </View>
            <View style={styles.secondTile}>
                <Text>Fuel</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fuelContainer: {
        height: '100%'
    },
    firstTile: {
        height: 500,
        width: '100%',
        backgroundColor: "lightgrey"
    },
    secondTile: {
        height: '50%',
        borderRadius: 50,
    }
})

export default Fuel;