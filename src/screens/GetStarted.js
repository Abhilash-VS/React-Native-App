/* eslint-disable no-dupe-keys */
import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import GetButton from "../Ui/GetButton";
import Back from "../assets/img/Image.png";
import { SafeAreaView } from "react-native-safe-area-context";

function GetStarted({ navigation }) {
  function NextHandler() {
    navigation.navigate("Home");
  }
  return (
    <>
      <SafeAreaView style={styles.view}>
        <View style={styles.Textview}>
          <Text style={styles.text1}>Keypy Yoga </Text>
          <Text style={styles.text}>
            Practice yoga {"\n"}whenever you want.
          </Text>
        </View>
        <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
          <ScrollView>
            <View style={styles.Screen} />
          </ScrollView>
          <GetButton onPress={NextHandler} style={styles.button} />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}
export default GetStarted;

const styles = StyleSheet.create({
  Screen: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 32,
    fontFamily: "sans-serif",
    margin: 5,
    fontWeight: "700",
    lineHeight: 36,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    marginTop: "0%",
    marginBottom: "0%",
  },
  view: {
    flex: 1,
    backgroundColor: "#DAE2EB",
    width: "100%",
    height: "100%",
  },
  Textview: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  text1: {
    color: "#AFBCCB",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "900",
    margin: 10,
    paddingTop: "10%",
    fontWeight: "700",
    lineHeight: 36,
  },
});
