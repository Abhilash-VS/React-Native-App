/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import RoundInput from "../components/RoundInput";
import BackButton from "../Ui/backArrow";
import ContinueButton from "../Ui/ContinueButton";
import LoginButton from "../Ui/LoginButton";

function AuthPage({ navigation, route }) {
  function NextHandler() {
    navigation.navigate("/");
  }
  return (
    <>
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
            <Text>
              {" "}
              phone number{" "}
              <Text style={{ fontWeight: "bold" }}>+62 813-8172-5977</Text>
            </Text>
          </View>
          <View style={styles.imagecontainer}>
            <RoundInput></RoundInput>
            <RoundInput></RoundInput>
            <RoundInput></RoundInput>
            <RoundInput></RoundInput>
          </View>
        </View>
      </ScrollView>

      <View style={styles.button}>
        <ContinueButton />
        <View style={styles.text3}>
          <Text style={styles.highlight}>Resend code</Text>
        </View>
      </View>
    </>
  );
}
export default AuthPage;

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: 12,
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
    paddingTop: "16%",
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
    marginBottom: 90,
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
  },
});
