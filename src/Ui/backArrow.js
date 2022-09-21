import { StyleSheet, View, Image, Pressable } from "react-native";

function BackButton({ onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Image
          size={25}
          source={require("../assets/img/back.png")}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
}
export default BackButton;
const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 20,
    justifyContent: "center",
    marginTop: 60,
  },
  image: {
    width: 25,
    height: 25,
  },
  pressed: {
    opacity: 0.5,
  },
});
