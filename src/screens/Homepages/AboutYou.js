import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../Ui/backArrow";
import LoginButton from "../../Ui/LoginButton";

const AboutYou = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <View style={styles.homeScreen}>
            <BackButton onPress={() => navigation.navigate("TellYourGoal")} />
          </View>
          <View style={styles.homeScreen1}>
            <Text style={styles.dot}>______________</Text>
          </View>
          <View style={styles.homeScreen2}>
            <Text style={styles.welcome}>What’s your email address?</Text>
            <TextInput
              keyboardType="email"
              style={styles.inputtext}
            ></TextInput>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <LoginButton>Continue</LoginButton>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AboutYou;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "1%",
  },
  homeScreen1: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 0,
  },
  text: {
    color: "#a3a7a8",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "400",
    paddingTop: "5%",
    lineHeight: 36,
    marginRight: 35,
  },
  dot: {
    color: "#E3E5E5",
    fontSize: 50,
    fontWeight: "600",
    color: "#6B4EFF",
  },
  wrapper: {
    flex: 1,
  },
  homeScreen2: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 0,
  },
  welcome: {
    color: "#090A0A",
    textAlign: "left",
    justifyContent: "flex-start",
    fontSize: 18,
    fontFamily: "sans-serif",
    paddingTop: "5%",
    fontWeight: "700",
    lineHeight: 36,
  },

  inputtext: {
    borderColor: "#e3e4e8",
    borderWidth: 2,
    borderRadius: 8,
    height: 48,
    marginTop: 10,
    paddingLeft: 20,
    flex: 1,
    fontWeight: "400",
  },
});
