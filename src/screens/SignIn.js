/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import { View, ScrollView, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import BackButton from "../Ui/backArrow";
import SignInButton from "../Ui/SignInButton";
import auth from "@react-native-firebase/auth";

function SignIn({ navigation, route }) {
  function signin() {
    auth()
      .createUserWithEmailAndPassword(
        "abhilashsenapthy123@gmail.com",
        "abhilash"
      )
      .then(() => {
        Alert.alert("User account created & signed in!");
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
              <Text style={styles.text}> Sign In</Text>
            </View>
            <View style={styles.imagecontainer}>
              <Input>Email</Input>
              <Input>Password</Input>
              <Input>Email</Input>
              <Input>Password</Input>
              <Input>Email</Input>
              <Input>Password</Input>
            </View>
          </View>

          <View style={styles.button}>
            <View style={styles.text3}>
              <Text style={styles.text2}>
                By continuing, you agree to our{" "}
                <Text style={styles.highlight}>Terms of Service</Text> and{"\n"}
                <Text style={styles.highlight}>Privacy Policy.</Text>
              </Text>
            </View>
            <SignInButton onPress={signin}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default SignIn;

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
    fontWeight: "700",
    lineHeight: 36,
    marginRight: 188,
  },
  imagecontainer: {
    alignItems: "center",
    marginHorizontal: 24,
    marginVertical: 20,
  },
  text2: {
    color: "#6C7072",
    fontFamily: "sans-serif",
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
  highlight: {
    color: "#6B4EFF",
    fontWeight: "400",
  },
  log: {
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    marginTop: 110,
  },
  wrapper: {
    flex: 1,
  },
});
