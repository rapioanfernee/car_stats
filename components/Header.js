import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import config1 from '../colors'

const Header = ({
    title,
    subtitle,
    actionIcon,
    actionIconOnPress
}) => {
    console.log(config1)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            {
                actionIcon ? (
                    <TouchableOpacity onPress={actionIconOnPress}>
                        {actionIcon}
                    </TouchableOpacity>
                ) : <View />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: config1.black,
        fontSize: 38,
        fontWeight: 'bold'
    },
    subtitle: {
        color: config1.black,
        fontSize: 20,
        opacity: 0.5
    },
})

export default Header;