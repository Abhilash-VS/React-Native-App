import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import OTPInputView from "@twotalltotems/react-native-otp-input";
function OtpScreen() {
  const [code,setCode]=useState()
  return (
    <View style={styles.container}>

      <OTPInputView
        style={styles.OTPInput}
        pinCount={6}
        code={code}
        autoFocusOnLoad={true}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeChanged={(value) => {
        setCode(value);
        }}
      />
    </View>
  );
}
export default OtpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  underlineStyleBase: {
    width: 48,
    borderRadius: 64,
    height: 48,
    borderWidth: 1,
    color: "black",
    borderColor: "#E3E5E5",
  },

  underlineStyleHighLighted: {
    borderColor: "#6B4EFF",
    width: 50,
    borderRadius: 64,
    height: 50,
  },
  OTPInput:
   { height: 100,
     width: "100%",
    backgroundColor: "transparent" },
});
