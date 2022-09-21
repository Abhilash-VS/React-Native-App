import * as React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const Input2 = ({
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
}) => {
  const [text, setText] = React.useState("");

  return (
    <View style={[styles.container, isvalid && styles.errorText, style]}>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.Input2}
      />
    </View>
  );
};

export default Input2;

const styles = StyleSheet.create({
  container: {
    borderColor: "#d9d9d9",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 8,
    alignContent: "center",
    justifyContent: "center",
    maxWidth: "100%",
    padding: 3,
    marginVertical: 10,
  },
  Input2: {
    width: "100%",
    opacity: 0.3,
    flex: 1,
    maxHeight: 50,
    alignContent: "center",
    justifyContent: "center",
  },
});
