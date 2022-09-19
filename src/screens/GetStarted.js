import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import GetButton from "../Ui/GetButton";
import Back from "../assets/img/back.jpg";
import Message from "../assets/img/message.png";

function GetStarted({ navigation }) {
  function NextHandler() {
    navigation.navigate("Home");
  }
  return (
    <>
      <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <View style={styles.Screen}>
            <Image style={styles.icon} source={Message} color="#fffff" />
            <Text style={styles.text}>The Ultimate Communication Platform</Text>
          </View>
          <GetButton onPress={NextHandler} style={styles.button} />
        </ScrollView>
      </ImageBackground>
    </>
  );
}
export default GetStarted;

const styles = StyleSheet.create({
  Screen: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  text: {
    flex: 1,
    color: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 28,
    fontFamily: "sans-serif",
    fontWeight: "900",
    marginTop: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  icon: {
    height: 80,
    width: 80,
  },
});
