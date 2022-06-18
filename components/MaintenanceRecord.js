import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button';
import MaintenanceRecordTile from './MaintenanceRecordTile';

const MaintenanceRecord = ({ setOpenAddMaintenanceRecord }) => {
    const onAddButton = () => {
        setOpenAddMaintenanceRecord(true)
    }

    return (
        <View style={styles.MaintenanceRecordContainer}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Maintenance Record</Text>
                    <Text style={styles.subtitle}>Latest two records</Text>
                </View>
                <View>
                    <Button onButtonPress={onAddButton} icon={
                        <Image
                            style={{
                                height: 40,
                                width: 40
                            }}
                            source={require('../assets/images/plus-sign-icon-31.png')}
                        />
                    } />
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
        padding: 16,
        elevation: 4
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