/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import { View, ScrollView, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Input2 from "../components/Input2";
import BackButton from "../Ui/backArrow";
import LoginButton from "../Ui/LoginButton";
import auth from "@react-native-firebase/auth";

import { emailRegex } from "../components/Regex";
import { useState } from "react";

function HomeScreen({ navigation, route }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function login() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.code === "auth/user-not-found") {
          Alert.alert("No user found");
          return;
        }
        if (error.code === "auth/wrong-password") {
          Alert.alert("The password is invalid");
          return;
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
          return;
        }

        Alert.alert(error);
        return;
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
              <Input
                onChangeText={(value) => {
                  setEmailError(false);
                  setEmail(value);
                }}
              >
                Email
              </Input>
              <Input
                onChangeText={(value) => {
                  setPasswordError(false);
                  setPassword(value);
                }}
              >
                Password
              </Input>
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
    marginBottom: 60,
  },
  wrapper: {
    flex: 1,
  },
});
