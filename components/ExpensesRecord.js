import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button';
import ExpensesRecordTile from './ExpensesRecordTile';

import config1 from '../colors'

import { useUser } from '../context/user-context';
import { useFirebase } from '../context/firebase-context';
import { useCar } from '../context/car-context';
const ExpensesRecord = ({ setOpenAddExpensesRecord }) => {

    const { currentUser } = useUser();
    const { currentCar } = useCar();
    const { getData } = useFirebase();

    const [expensesData, setExpensesData] = useState(null);

    const transformData = (data) => Object.keys(data).map((key) => ({
        id: key,
        ...data[key]
    })).sort((a, b) => Number(b.odometerReading) - Number(a.odometerReading))


    const onAddButton = () => {
        setOpenAddExpensesRecord(true)
    }

    useEffect(() => {
        getData(
            { userId: currentUser.uid, carId: currentCar.id },
            '/expensesRecord',
            (snapshot) => {
                const data = snapshot.val();
                setExpensesData(transformData(data))
            }
        )
    }, [])

    return (
        <View style={styles.ExpensesRecordContainer}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Expenses Record</Text>
                    <Text style={styles.subtitle}>Latest two records</Text>
                </View>
                <View>
                    <Button onButtonPress={onAddButton} icon={
                        <Image
                            style={{
                                height: 40,
                                width: 40,
                                tintColor: config1.text2
                            }}
                            source={require('../assets/images/plus-sign-icon-31.png')}
                        />
                    } />
                </View>
            </View>
            {expensesData && expensesData.slice(
                expensesData.length > 2 ? expensesData.length - 2 : 0, // Get latest 2 entries
                expensesData.length
            ).map((data, index) => (
                <View key={`${data.id}-${index}`}>
                    <ExpensesRecordTile data={data} />
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    ExpensesRecordContainer: {
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

export default ExpensesRecord;