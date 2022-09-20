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
    navigation.navigate('Home');
  }
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.homeScreen}>
            <Text style={styles.text}>Log in</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Input>Email</Input>
            <Input>Password</Input>
          </View>

          <View style={styles.view1}>
            <Text style={styles.highlight}>Forgot password?</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <View style={styles.text3}>
          <Text style={styles.text2}>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
        <LoginButton onPress={NextHandler} />
      </View>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: 12,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  text: {
    color: '#090A0A',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'sans-serif',
    fontWeight: '400',
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
    fontSize: 14,
    marginBottom:20,
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
    marginHorizontal: 24,
    fontSize: 16,
  },
  log: {
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    marginBottom: 114,
  },
});
