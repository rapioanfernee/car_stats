import { useState } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import FuelEfficiency from '../components/FuelEfficiency';
import Header from '../components/Header';
import MaintenanceRecord from '../components/MaintenanceRecord';
import DashboardConfiguration from './DashboardConfiguration';

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const onHeaderActionButtonPress = () => {
        setShowModal(true)
    }

    return (
        <ScrollView style={styles.appContainer}>
            <DashboardConfiguration open={showModal} setOpen={setShowModal} />
            <View style={styles.headerContainer}>
                <Header
                    title="Dashboard"
                    subtitle="Toyota Corolla Cross 2022 1.8G CVT"
                    actionIcon={
                        <Image
                            style={styles.image}
                            source={require('../assets/images/settings-icon-1.png')}
                        />
                    }
                    actionIconOnPress={onHeaderActionButtonPress}
                />
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.panelContainer}>
                    <FuelEfficiency />
                </View>
                <View style={styles.panelContainer}>
                    <MaintenanceRecord />
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
        height: 35,
        width: 35,
        opacity: 0.75
    }
});

export default Dashboard
