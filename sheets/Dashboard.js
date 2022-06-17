
import { StyleSheet, View, ScrollView } from 'react-native';
import { } from 'react-native-web';
import FuelEfficiency from '../components/FuelEfficiency';
import Header from '../components/Header';
import MaintenanceRecord from '../components/MaintenanceRecord';

const Dashboard = () => {
    return (
        <ScrollView style={styles.appContainer}>
            <View style={styles.headerContainer}>
                <Header />
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
    }
});

export default Dashboard
