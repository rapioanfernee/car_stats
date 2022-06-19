import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button';
import MaintenanceRecordTile from './MaintenanceRecordTile';

const MAINTENANCE_RECORD_SAMPLE_DATA = [
    {
        id: '123-M',
        date: "MAR 2022",
        totalPrice: '1000',
        odometerReading: '100',
        receipt: 'N/A'
    },
    {
        id: '124-M',
        date: "MAY 2022",
        TotalPrice: "7000",
        odometerReading: '1050',
        receipt: "N/A"
    },
]

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

            {MAINTENANCE_RECORD_SAMPLE_DATA.slice(
                MAINTENANCE_RECORD_SAMPLE_DATA.length - 2, // Get latest 3 entries
                MAINTENANCE_RECORD_SAMPLE_DATA.length
            ).map((data, index) => (
                <View key={`${data.id}-${index}`}>
                    <MaintenanceRecordTile data={data} />
                </View>
            ))}
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