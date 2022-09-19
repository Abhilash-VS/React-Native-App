import { Pressable, StyleSheet, Text, View } from "react-native";
function NextButton({onPress}) {
    return (
        <Pressable style={({ pressed }) => [pressed && styles.pressed]} onPress={onPress} >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttontext}>Get OTP</Text>
            </View>
        </Pressable>
    )
}
export default NextButton;
const styles = StyleSheet.create({

    buttonContainer: {
        height: 45,
        backgroundColor: "#42A173",
        marginHorizontal:110,
        marginTop: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        fontFamily: "notoserif",
        marginBottom:10,
        
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