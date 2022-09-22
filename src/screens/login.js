/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import { View, ScrollView, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Input2 from "../components/Input2";
import BackButton from "../Ui/backArrow";
import LoginButton from "../Ui/LoginButton";
import auth from "@react-native-firebase/auth";

function HomeScreen({ navigation, route }) {
  function login() {
    auth()
      .signInWithEmailAndPassword(
        "abhilashsenapthy123@gmail.com",
        "abhilash"
      )
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

       Alert.alert(error);
      });
  }
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <View>
            <View style={styles.homeScreen}>
              <BackButton onPress={() => navigation.navigate("welcome")} />
              <Text style={styles.text}> Log in</Text>
            </View>
            <View style={styles.imagecontainer}>
              <Input2>Email</Input2>
              <Input>Password</Input>
            </View>

            <View style={styles.view1}>
              <Text style={styles.highlight1}>Forgot password?</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <View style={styles.text3}>
            <Text style={styles.text2}>
              By continuing, you agree to our{" "}
              <Text style={styles.highlight}>Terms of Service</Text> and{"\n"}
              <Text style={styles.highlight}>Privacy Policy.</Text>
            </Text>
          </View>
          <LoginButton onPress={login} />
        </View>
      </SafeAreaView>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "400",
    paddingTop: "5%",
    lineHeight: 36,
    marginRight: 188,
  },
  imagecontainer: {
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 24,
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
    fontSize: 16,
    fontWeight: "400",
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
  wrapper: {
    flex: 1,
  },
});
