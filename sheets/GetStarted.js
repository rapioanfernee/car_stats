import {
    Image,
    ImageBackground,
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import config1 from '../colors'

const GetStarted = ({ open, setOpen, setLoginScreenOpen }) => {
    return (
        <Modal
            visible={open}
            animationType="slide"
        >
            <ImageBackground
                source={require('../assets/gifs/asphalt-road.gif')}
                resizeMode="cover"
                style={styles.imageBackground}
            // To-do: Pan background image slightly to the right
            >
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {/* TO-DO: Replace this with a sample image of loading tiles */}
                        <Image
                            style={styles.image}
                            source={require('../assets/images/wheel-icon.png')}

                        />
                    </View>
                    <View style={{ opacity: 0.75 }}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                Always forget your car's fuel efficiency?
                            </Text>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                Or just want to check your car's expenses record?
                            </Text>
                        </View>
                        <View style={{ ...styles.titleContainer, marginTop: 32 }}>
                            <Text style={styles.title}>
                                Get started now!
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setOpen(false)
                            setLoginScreenOpen(true)
                        }}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </Modal>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',

        // overflow: 'hidden'
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0, 0.90)'
    },
    button: {
        backgroundColor: config1.red,
        borderRadius: 50,
        paddingVertical: 16,
        paddingHorizontal: 32,
        width: '65%',

    },
    buttonText: {
        color: "#D6D5C9",
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
    },
    imageContainer: {
        // opacity: 0.35
    },
    image: {
        height: 250,
        width: 250,
        tintColor: "rgba(185, 186, 163, 0.1)"
    },
    title: {
        color: config1.text2,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: "bold"
    },
    titleContainer: {
        paddingHorizontal: 32
    }
})

export default GetStarted