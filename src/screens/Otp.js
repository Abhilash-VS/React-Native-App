import * as React from 'react';
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import Input2 from '../components/Input2';
import NextButton from '../Ui/NextButton';


function OtpScreen() {
  return (
    <ScrollView>
    <View style={styles.OtpScreen}>
        <Text style={styles.text}>Enter Your OTP please...</Text>
      <Input2 >Enter OTP</Input2>
      <NextButton />
    </View>
    </ScrollView>
  );
}
export default OtpScreen;

const styles = StyleSheet.create({
  OtpScreen:{
    flex: 2,
  },
  text:{
    flex: 1,
    color: "grey",
    textAlign: "center",
    justifyContent: "center",
    fontSize:15,
    fontFamily: "notoserif",
    fontWeight: "600",
    marginTop:30
  }


})