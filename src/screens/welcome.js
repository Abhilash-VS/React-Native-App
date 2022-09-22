/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import Input from "../components/Input";
import LoginButton from "../Ui/LoginButton";
import BackButton from "../Ui/backArrow";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from "@react-native-firebase/auth";
import { useState } from "react";

function HomeScreen({ navigation, route }) {
  const [phone, setPhone] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function signInWithPhoneNumber() {
    if (phone.length !== 10) {
      setError(true);
    }
    setIsLoading(true);
    if (phone.length === 10) {
      await auth()
        .signInWithPhoneNumber(`+91${phone}`)
        .then((confirmation) => {
          setIsLoading(false);
          navigation.navigate("Authpage", confirmation);
        })
        .catch((err) => {
          if (err.code === "auth/too-many-requests") {
            Alert.alert("Something went wrong.Please try again later");
            return;
          }
        });
    }
    setIsLoading(false);
  }

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <View>
            <BackButton onPress={() => navigation.navigate("Home")} />
            <View style={styles.homeScreen}>
              <Text style={styles.text}>Welcome back.</Text>
              <Text style={styles.log}>Log in to your account</Text>
            </View>
            <View style={styles.imagecontainer}>
              <Input
                keyboardType="number-pad"
                onText={(value) => {
                  setPhone(value);
                }}
              >
                <Text style={{ fontWeight: "400", color: "#090A0A" }}>
                  +91{" "}
                </Text>{" "}
                Mobile Number
              </Input>
            </View>

            <View style={styles.view1}>
              <Text style={styles.text2}>
                You will receive an SMS verification that may apply{"\n"}message
                and data rates.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <LoginButton disabled={isLoading} onPress={signInWithPhoneNumber} />
          <View style={styles.text3}>
            <Text
              style={styles.highlight}
              onPress={() => navigation.navigate("Signin")}
            >
              Use email, instead
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 24,
    marginTop: 0,
  },
  text: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 32,
    fontFamily: "sans-serif",
    fontWeight: "900",
    paddingTop: "10%",
    fontWeight: "700",
    lineHeight: 36,
  },
  imagecontainer: {
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 24,
  },
  text2: {
    color: "#6C7072",
    fontFamily: "sans-serif",
    marginHorizontal: 24,
    fontSize: 12,
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
    fontSize: 16,
    fontWeight: "500",
  },
  log: {
    fontSize: 16,
    fontWeight: "400",
    color: "#090A0A",
  },
  button: {
    marginBottom: 60,
  },
  wrapper: {
    flex: 1,
  },
});
