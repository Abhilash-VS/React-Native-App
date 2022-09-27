/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Input from "../../components/Input";
import BackButton from "../../Ui/backArrow";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";

import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GoogleMap from "../../components/googleMap";
import { border } from "@shopify/restyle";

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.view1}>
        <BackButton onPress={() => navigation.navigate("AboutYou")} />
        <View style={styles.homeScreen}>
          <Text style={styles.text}>Find nearby shop</Text>
          <Text style={styles.log}>Enter your location to find them.</Text>
          <View style={styles.homeScreen2}>
            <GoogleMap/>
          </View>
        </View>
      </View>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 24,

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

  view1: {
    flex: 1,
    marginBottom: 80,
    marginTop: 50,
    alignItems: "flex-start",
  },

  log: {
    fontSize: 16,
    fontWeight: "400",
    color: "#090A0A",
    paddingVertical: 10,
  },
  wrapper: {
    flex: 1,
    marginTop: 300,
  },
  homeScreen2: {
    flex: 1,
    width:'100%',
    flexDirection: "row",
    marginVertical:15
  },
});
