import { View, Text, StyleSheet } from 'react-native'
import AddButton from './AddButton';
import MaintenanceRecordTile from './MaintenanceRecordTile';

const MaintenanceRecord = () => {
    const onAddButton = () => {
        console.log("Button Press");
    }

    return (
        <View style={styles.MaintenanceRecordContainer}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Maintenance Record</Text>
                    <Text style={styles.subtitle}>Latest two records</Text>
                </View>
                <View>
                    <AddButton onButtonPress={onAddButton} />
                </View>
            </View>
            <View>
                <MaintenanceRecordTile />
                <MaintenanceRecordTile />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MaintenanceRecordContainer: {
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

export default MaintenanceRecord;