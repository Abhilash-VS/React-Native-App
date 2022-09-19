import { Pressable, StyleSheet, Text, View } from "react-native";
function GetButton({onPress}) {
    return (
        <Pressable style={({ pressed }) => [pressed && styles.pressed]} onPress={onPress} >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttontext}>Get Started </Text>
            </View>
        </Pressable>
    )
}
export default GetButton;
const styles = StyleSheet.create({

    buttonContainer: {
        height: 45,
        backgroundColor: "#42A173",
        marginHorizontal:130,
        marginTop: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        fontFamily: "notoserif",
        
    },
    buttontext: {
        color: "white",
        fontSize: 15,
        marginRight: 5,
        fontWeight:'600'
    },
    pressed: {
        opacity: 0.5
    }
})