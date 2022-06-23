import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import config1 from '../colors'

const Button = ({ buttonStyle, icon, onButtonPress, text, textColor }) => {
    const styles = StyleSheet.create({
        textButton: buttonStyle ? buttonStyle : { elevation: 5 },
        text: {
            color: textColor ? textColor : config1.text1,
            textAlign: 'center'
        }
    })

    return (
        <TouchableOpacity delayPressIn={0} onPress={onButtonPress}>
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