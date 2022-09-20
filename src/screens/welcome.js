/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Input from '../components/Input';
import LoginButton from '../Ui/LoginButton';

function HomeScreen({navigation, route}) {
  function NextHandler() {
    navigation.navigate('login');
  }
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.homeScreen}>
            <Text style={styles.text}>Welcome back.</Text>
            <Text style={styles.log}>Log in to your account</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Input>Mobile Number</Input>
          </View>

          <View style={styles.view1}>
            <Text style={styles.text2}>
              You will receive an SMS verification that may apply{'\n'}message
              and data rates.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <LoginButton onPress={NextHandler} />
        <View style={styles.text3}>
          <Text style={styles.highlight}>Use email, instead</Text>
        </View>
      </View>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    margin: 12,
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 24,
  },
  text: {
    color: '#090A0A',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 32,
    fontFamily: 'sans-serif',
    fontWeight: '900',
    paddingTop: '26%',
    fontWeight: '700',
    lineHeight: 36,
  },
  imagecontainer: {
    alignItems: 'center',
    marginVertical: 40,
    marginVertical: 20,
  },
  text2: {
    color: '#6C7072',
    fontFamily: 'sans-serif',
    marginHorizontal: 24,
    fontSize: 12,
  },
  text3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    marginBottom: 80,
    marginTop: 0,
    alignItems: 'flex-start',
  },
  highlight: {
    color: '#6B4EFF',
    fontSize: 16,
    fontWeight: '500',
  },
  log: {
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    marginBottom: 114,
  },
});
