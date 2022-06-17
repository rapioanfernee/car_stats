import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Button = ({ onButtonPress, icon }) => {
    return (
        <TouchableOpacity onPress={onButtonPress}>
            {icon ? icon : (
                <View>
                    <Text>
                        ''
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
    }
})

export default Button;