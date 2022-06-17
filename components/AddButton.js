import { TouchableOpacity, Image, StyleSheet } from 'react-native'

const AddButton = ({ onButtonPress }) => {
    return (
        <TouchableOpacity onPress={onButtonPress}>
            <Image style={styles.image} source={require('../assets/images/plus-sign-icon-31.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        // backgroundColor: 'white'
    }
})

export default AddButton;