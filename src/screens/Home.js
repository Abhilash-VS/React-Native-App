/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NextButton from "../Ui/NextButton";

function HomeScreen({ navigation, route }) {
  function NextHandler() {
    navigation.navigate("welcome");
  }
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView scrollEnabled={false} style={styles.main}>
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
                <Text>
                  Have an account?{" "}
                  <Text
                    style={styles.highlight}
                    onPress={() => navigation.navigate("login")}
                  >
                    Login
                  </Text>
                </Text>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    margin: 12,
    flex: 1,
  },
  wrapper:{
    flex:1
  },
  text: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "900",
    margin: 10,
    paddingTop:20,
    fontWeight: "700",
    lineHeight: 36,
  },
  imagecontainer: {
    alignItems: "center",
    marginVertical: 40,
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
});
