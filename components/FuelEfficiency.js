import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button';
import FuelEfficiencyTile from './FuelEfficiencyTile';

const FuelEfficiency = () => {
    const onAddButton = () => {
        console.log("Button Press");
    }

    return (
        <View style={styles.fuelEfficiencyContainer}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Fuel Efficiency</Text>
                    <Text style={styles.subtitle}>Latest three records</Text>
                </View>
                <View>
                    <Button
                        onButtonPress={onAddButton}
                        icon={
                            <Image
                                style={{
                                    height: 40,
                                    width: 40
                                }}
                                source={require('../assets/images/plus-sign-icon-31.png')}
                            />
                        }
                    />
                </View>
            </View>
            <View>
                <FuelEfficiencyTile />
                <FuelEfficiencyTile />
                <FuelEfficiencyTile />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fuelEfficiencyContainer: {
        backgroundColor: "#902923",
        borderRadius: 16,
        padding: 16
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
    },
})

export default FuelEfficiency;