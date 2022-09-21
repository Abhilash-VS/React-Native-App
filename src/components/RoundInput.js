/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";

function RoundInput({
  children,
  keyBoardtype = "default",
  onChange,
  isvalid,
  value,
  max = 50,
  style,
  textStyle,
  icon,
  isOpen,
}) {
  return (
    <View style={[styles.container, isvalid && styles.errorText, style]}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          style={styles.input}
          keyboardType={"number-pad"}
          autoCapitalize={false}
          autoCorrect={false}
          onChangeText={onChange}
          maxLength={1}
          returnKeyType="next"
        />
        <Pressable onPress={isOpen}>{icon}</Pressable>
      </View>
    </View>
  );
}
export default RoundInput;
const styles = StyleSheet.create({
  container: {
    borderColor: "#d9d9d9",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    maxWidth: "18%",
    padding: 8,
  },
  labelContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 7,
  },
  text: {
    color: "#B5B7BD",
    fontWeight: "500",
    fontSize: 14,
  },
  inputContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    fontWeight: "600",
    color: "#414141",
    fontSize: 14,
    width: "100%",
    marginRight: 2,
  },
  errorText: {
    textAlign: "center",
    borderColor: "#ff4405",
    borderWidth: 1,
  },
});
