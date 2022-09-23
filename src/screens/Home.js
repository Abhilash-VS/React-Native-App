/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import { View, StyleSheet, Text, Image, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NextButton from "../Ui/NextButton";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import auth from "@react-native-firebase/auth";

function HomeScreen({ navigation, route }) {
  GoogleSignin.configure({
    webClientId:
      "912166501685-m30ns7q2urq90fnlu9mrasag4n14g2dl.apps.googleusercontent.com"
  });
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    await GoogleSignin.signOut();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sigin_in = auth().signInWithCredential(googleCredential);

    user_sigin_in((user) => {
      console.log(user);
    }).catch((error) => {
      console.log(error);
    });
  }
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  function NextHandler() {
    navigation.navigate("welcome");
  }
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.homeScreen}>
          <Text style={styles.text}>
            you
            <Text style={styles.highlight}>learn</Text>
          </Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require("../assets/img/page.png")} />
        </View>

        <View style={styles.view1}>
          <Text style={styles.text2}>
            Create brilliant learning {"\n"} pathways
          </Text>
          <Text style={styles.dot}>
            ...<Text style={styles.highlight}>.</Text>
          </Text>
        </View>
        <View style={styles.button}>
          <NextButton onPress={NextHandler} />
          <View style={styles.text3}>
            <Text style={{ color: "#090A0A" }}>
              Have an account?{" "}
              <Text
                style={styles.highlight}
                onPress={() => navigation.navigate("login")}
              >
                Login
              </Text>
            </Text>
            <Text style={{ color: "#090A0A" }}>Or</Text>
            <View style={styles.google}>
              <View style={styles.cardConatiner}>
                <Pressable onPress={onGoogleButtonPress}>
                  <Image
                    source={require("../assets/img/google.png")}
                    style={styles.sociall}
                  />
                </Pressable>
              </View>
              <View style={styles.cardConatiner}>
                <Pressable onPress={onFacebookButtonPress}>
                  <Image
                    source={require("../assets/img/facebook.png")}
                    style={styles.sociall}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    margin: 12,
    maxHeight: "50%",
  },
  wrapper: {
    flex: 1,
  },
  text: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    fontFamily: "sans-serif",
    margin: 10,
    paddingTop: 20,
    fontWeight: "700",
    lineHeight: 32,
  },
  imagecontainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  text2: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "700",
    lineHeight: 36,
  },
  text3: {
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    color: "#6B4EFF",
  },
  dot: {
    color: "#E3E5E5",
    fontSize: 70,
    fontWeight: "600",
    margin: 0,
  },
  button: {
    marginBottom: 114,
  },
  google: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardConatiner: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    flex: 1,
  },
  sociall: {
    maxHeight: 50,
    maxWidth: 50,
    resizeMode: "contain",
  },
});
