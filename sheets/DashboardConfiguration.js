import { Modal, View, Text, StyleSheet, Image } from 'react-native'
import Header from '../components/Header'

const DashboardConfiguration = ({ open, setOpen }) => {
    return (
        <Modal visible={open}>
            <View style={styles.dashboardContainer}>
                <Header
                    title="Dashboard Settings"
                    actionIcon={
                        <Image
                            style={{
                                height: 18,
                                width: 18
                            }}
                            source={require('../assets/images/close-icon.png')}
                        />
                    }
                    actionIconOnPress={() => setOpen(false)}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        padding: 32,
    }
})

export default DashboardConfiguration