import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button';
import FuelEfficiencyTile from './FuelEconomyTile';


const FUEL_EFFICIENCY_SAMPLE_DATA = [
    {
        id: '123',
        fuelEconomy: '9',
        date: "April 2022",
        odometerReading: '500'
    },
    {
        id: '124',
        fuelEconomy: '10',
        date: "May 2022",
        odometerReading: '1050'
    },
    {
        id: '125',
        fuelEconomy: '11',
        date: "June 2022",
        odometerReading: '1550'
    }
]


const FuelEconomy = ({ setOpenAddFuelRecord }) => {
    const onAddButton = () => {
        setOpenAddFuelRecord(true)
    }

    return (
        <View style={styles.fuelEfficiencyContainer}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Fuel Economy</Text>
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
            {FUEL_EFFICIENCY_SAMPLE_DATA.slice(
                // Get latest 3 entries
                FUEL_EFFICIENCY_SAMPLE_DATA.length - 3,
                FUEL_EFFICIENCY_SAMPLE_DATA.length
            ).map((data, index) => (
                <View key={`${data.id}-${index}`}>
                    <FuelEfficiencyTile data={data} />
                </View>
            ))}
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

export default FuelEconomy;