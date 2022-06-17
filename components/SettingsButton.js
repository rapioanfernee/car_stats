import { TouchableOpacity, Image, StyleSheet } from 'react-native'

const SettingsButton = ({ onButtonPress }) => {
    return (
        <TouchableOpacity onPress={onButtonPress}>
            <Image style={styles.image} source={require('../assets/images/settings-icon-1.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
        // backgroundColor: 'white'
    }
})

export default SettingsButton;