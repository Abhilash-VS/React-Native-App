import * as React from 'react';
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import Input from '../components/Input';
import NextButton from '../Ui/NextButton';


function HomeScreen() {
  return (
    <ScrollView>
    <View style={styles.homeScreen}>
      <Input>First Name</Input>
      <Input>last Name</Input>
      <Input>Email</Input>
      <Input>Password</Input>
      <Input>Confirm Password</Input>
      <Input>Phone Number</Input>
      <NextButton/>
    </View>
    </ScrollView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen:{
    margin: 12,
    flex: 1,
  }
})