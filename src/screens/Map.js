import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";


function Map({ navigation }) {
    function NextHandler() {
        navigation.navigate("VoiceScreen");
      }
  return (
    <>
      <ScrollView>
        <View style={styles.OtpScreen}>
          <Text>Map Screen</Text>
        </View>
      </ScrollView>
    </>
  );
}
export default Map;