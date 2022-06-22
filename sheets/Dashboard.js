import { useState } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';


import FuelEconomy from '../components/FuelEconomy';
import Header from '../components/Header';
import MaintenanceRecord from '../components/MaintenanceRecord';
import AddFuelEfficiencyRecord from './AddFuelEfficiencyRecord';
import AddMaintenanceRecord from './AddMaintenanceRecord'
import DashboardConfiguration from './DashboardConfiguration';

import config1 from '../colors';

const DASHBOARD_SAMPLE_DATA = {
    title: "Dashboard",
    subtitle: "Toyota Corolla Cross 2022 1.8G CVT"
}

const Dashboard = () => {
    const [openConfig, setOpenConfig] = useState(false);
    const [openAddFuelRecord, setOpenAddFuelRecord] = useState(false);
    const [openAddMaintenanceRecord, setOpenAddMaintenanceRecord] = useState(false)

    const onHeaderActionButtonPress = () => {
        setOpenConfig(true)
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
                openAddMaintenanceRecord && (
                    <AddMaintenanceRecord open={openAddMaintenanceRecord} setOpen={setOpenAddMaintenanceRecord} />
                )
            }
            <View style={styles.headerContainer}>
                <Header
                    title={DASHBOARD_SAMPLE_DATA.title}
                    subtitle={DASHBOARD_SAMPLE_DATA.subtitle}
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
                <View style={styles.panelContainer}>
                    <MaintenanceRecord setOpenAddMaintenanceRecord={setOpenAddMaintenanceRecord} />
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
        tintColor: config1.black,
        height: 25,
        width: 25,
        opacity: 0.75
    }
});

export default Dashboard
