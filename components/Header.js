import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Header = ({
    title,
    subtitle,
    actionIcon,
    actionIconOnPress
}) => {
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
        color: '#0A100D',
        fontSize: 38,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#0A100D',
        fontSize: 20,
        opacity: 0.5
    },
})

export default Header;