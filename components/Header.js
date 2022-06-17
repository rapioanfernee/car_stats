import { View, Text, StyleSheet, Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Your Car Stats</Text>
                <Text style={styles.subtitle}>Toyota Corolla Cross 2022 1.8G CVT</Text>
            </View>
            <View>
                <Image style={styles.image} source={require('../assets/images/settings-icon-1.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#0A100D',
        fontSize: 38,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#0A100D',
        fontSize: 20,
        opacity: 0.5
    },
    image: {
        height: 35,
        width: 35,
        opacity: 0.75
    }
})

export default Header;