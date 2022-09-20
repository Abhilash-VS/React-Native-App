import { Pressable, StyleSheet, Text, View } from "react-native";
function OtpButton({onPress}) {
    return (
        <Pressable style={({ pressed }) => [pressed && styles.pressed]} onPress={onPress} >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttontext}>Next </Text>
            </View>
        </Pressable>
    )
}
export default OtpButton;
const styles = StyleSheet.create({

    buttonContainer: {
        height: 45,
        backgroundColor: "#42A173",
        marginHorizontal:165,
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
        marginRight: 5
    },
    pressed: {
        opacity: 0.5
    }
})