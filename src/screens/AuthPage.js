/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  LogBox,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundInput from "../components/RoundInput";
import BackButton from "../Ui/backArrow";
import ContinueButton from "../Ui/ContinueButton";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import RNOtpVerify from "react-native-otp-verify";

function AuthPage({ navigation, route }) {
  const confirm = route.params;
  const [code, setCode] = useState();

  async function confirmCode() {
    try {
      await confirm
        .confirm(code)
        .then((result) => navigation.navigate("Home2"))
        .catch((error) => {
          if (error.code === "auth/invalid-verification-code") {
            Alert.alert("Invalid code.");
            return;
          }
        });
    } catch (error) {
      Alert.alert("Invalid code.");
    }
  }

  useEffect(() => {
    RNOtpVerify.getHash().then(console.log).catch(console.log);

    RNOtpVerify.getOtp()
      .then((p) => RNOtpVerify.addListener(otpHandler))
      .catch((p) => console.log(p));
  }, []);

  const otpHandler = (message) => {
    if (message.includes("Error")) {
      return;
    }
    let otp = "";
    if (message.length > 0) {
      otp = message.replace(/^\D+/g, "");
    }
    setCode(otp);
    RNOtpVerify.removeListener();
  };
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <View>
            <View style={styles.homeScreen}>
              <BackButton onPress={() => navigation.navigate("welcome")} />
              <Text style={styles.text}> Change number</Text>
            </View>
            <View style={styles.homeScreen2}>
              <Text style={styles.welcome}>Enter authentication code</Text>
              <Text style={styles.log}>
                Enter the 4-digit that we have sent via the
              </Text>
              <Text style={{ color: "#090A0A" }}>
                {" "}
                phone number{" "}
                <Text style={{ fontWeight: "bold" }}>+62 813-8172-5977</Text>
              </Text>
            </View>
            <View style={styles.imagecontainer}>
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
          </View>
        </ScrollView>

        <View style={styles.button}>
          <ContinueButton onPress={confirmCode} />
          <View style={styles.text3}>
            <Text style={styles.highlight}>Resend code</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
export default AuthPage;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeScreen2: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 0,
  },
  text: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "500",
    paddingTop: "5%",
    lineHeight: 36,
    marginRight: 24,
    color: "#6B4EFF",
  },
  imagecontainer: {
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text2: {
    color: "#6C7072",
    fontFamily: "sans-serif",
    marginHorizontal: 24,
    fontSize: 14,
    marginBottom: 20,
    fontWeight: "400",
  },
  text3: {
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    marginBottom: 80,
    marginTop: 0,
    alignItems: "flex-start",
  },
  highlight1: {
    color: "#6B4EFF",
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 24,
  },
  highlight: {
    color: "#6B4EFF",
  },
  log: {
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    marginBottom: 60,
  },
  welcome: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "900",
    paddingTop: "10%",
    fontWeight: "700",
    lineHeight: 36,
  },
  log: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 24,
    color: "#090A0A",
  },
  wrapper: {
    flex: 1,
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
  OTPInput: { height: 100, width: "100%", backgroundColor: "transparent" },
});
