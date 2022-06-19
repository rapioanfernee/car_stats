import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Button = ({ buttonStyle, icon, onButtonPress, text, textColor }) => {
    const styles = StyleSheet.create({
        textButton: buttonStyle ? buttonStyle : { elevation: 5 },
        text: {
            color: textColor ? textColor : 'black',
            textAlign: 'center'
        }
    })

    return (
        <TouchableOpacity onPress={onButtonPress}>
            {icon ? icon : (
                <View style={styles.textButton}>
                    <Text style={styles.text}>
                        {text ? text : ''}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    )
}


export default Button;