import { View, Modal, Text, StyleSheet, ActivityIndicator } from 'react-native';
import config1 from '../colors';

const LoadingOverlay = () => {
    return (
        <View style={{
            flex: 1,
            position: 'absolute',
            left: 0,
            top: 100,
            bottom: 0,
            right: 0,
            backgroundColor: 'black',
            width: '100%'
        }}>
            <ActivityIndicator size="large" color={config1.panel1} />
            <Text>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default LoadingOverlay