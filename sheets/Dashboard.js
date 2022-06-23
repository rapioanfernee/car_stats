import { useState } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';


import FuelEconomy from '../components/FuelEconomy';
import Header from '../components/Header';
import ExpensesRecord from '../components/ExpensesRecord';
import AddFuelEfficiencyRecord from './AddFuelEfficiencyRecord';
import AddExpensesRecord from './AddExpensesRecord'
import DashboardConfiguration from './DashboardConfiguration';

import config1 from '../colors';
import { useCar } from '../context/car-context';

const DASHBOARD_SAMPLE_DATA = {
    title: "Dashboard",
    subtitle: "Toyota Corolla Cross 2022 1.8G CVT"
}

const Dashboard = () => {
    const { currentCar } = useCar();

    const [openConfig, setOpenConfig] = useState(false);
    const [openAddFuelRecord, setOpenAddFuelRecord] = useState(false);
    const [openAddExpensesRecord, setOpenAddExpensesRecord] = useState(false)

    const onHeaderActionButtonPress = () => {
        setOpenConfig(true)
    }

    const setDashboardSubtitle = (car) => {
        if (car === null) {
            return '--'
        }
        const { engineDisplacement, maker, model, transmission, variant, year } = car
        return `${maker} ${model} ${year} ${+engineDisplacement / 1000}L ${variant} ${transmission}`
    }


    return (
        <ScrollView style={styles.appContainer}>
            {
                openConfig && (
                    <DashboardConfiguration open={openConfig} setOpen={setOpenConfig} />
                )}
            {
                openAddFuelRecord && (
                    <AddFuelEfficiencyRecord open={openAddFuelRecord} setOpen={setOpenAddFuelRecord} />
                )
            }
            {
                openAddExpensesRecord && (
                    <AddExpensesRecord open={openAddExpensesRecord} setOpen={setOpenAddExpensesRecord} />
                )
            }
            <View style={styles.headerContainer}>
                <Header
                    title={DASHBOARD_SAMPLE_DATA.title}
                    subtitle={setDashboardSubtitle(currentCar)}
                    actionIcon={
                        <Image
                            style={styles.image}
                            source={require('../assets/images/settings-icon.png')}
                        />
                    }
                    actionIconOnPress={onHeaderActionButtonPress}
                />
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.panelContainer}>
                    <FuelEconomy setOpenAddFuelRecord={setOpenAddFuelRecord} />
                </View>
                <View style={{ ...styles.panelContainer, marginBottom: 64 }}>
                    <ExpensesRecord setOpenAddExpensesRecord={setOpenAddExpensesRecord} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 32,
    },
    headerContainer: {
        marginVertical: 16,
    },
    panelContainer: {
        marginVertical: 16
    },
    image: {
        tintColor: config1.text1,
        height: 25,
        width: 25,
        opacity: 0.75,
        marginBottom: 16
    }
});

export default Dashboard
