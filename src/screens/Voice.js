import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";


function VoiceScreen({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={styles.OtpScreen}>
          <Text>Voice</Text>
        </View>
      </ScrollView>
    </>
  );
}
export default VoiceScreen;