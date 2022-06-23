import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button';
import FuelEfficiencyTile from './FuelEconomyTile';

import config1 from '../colors'

import { useUser } from '../context/user-context';
import { useFirebase } from '../context/firebase-context';
import { useCar } from '../context/car-context';

const FuelEconomy = ({ setOpenAddFuelRecord }) => {

    const { currentUser } = useUser();
    const { currentCar } = useCar();
    const { getData } = useFirebase();

    const [fuelEconomyData, setFuelEconomyData] = useState(null);

    const transformData = (data) => Object.keys(data).map((key) => ({
        id: key,
        ...data[key]
    })).sort((a, b) => Number(b.odometerReading) - Number(a.odometerReading))



    const onAddButton = () => {
        setOpenAddFuelRecord(true)
    }

    useEffect(() => {
        getData(
            { userId: currentUser.uid, carId: currentCar.id },
            '/fuelEconomy',
            (snapshot) => {
                const data = snapshot.val();
                setFuelEconomyData(transformData(data))
            }
        )
    }, [])

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
                                    width: 40,
                                    tintColor: config1.text2
                                }}
                                source={require('../assets/images/plus-sign-icon-31.png')}
                            />
                        }
                    />
                </View>
            </View>
            {fuelEconomyData && fuelEconomyData.slice(
                // Get latest 3 entries
                fuelEconomyData.length > 3 ? fuelEconomyData.length - 3 : 0,
                fuelEconomyData.length
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
        backgroundColor: config1.panel1,
        borderRadius: 16,
        padding: 16,
        elevation: 4
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: config1.text1,
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        color: config1.text1,
        fontSize: 14,
    },
})

export default FuelEconomy;