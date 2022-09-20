/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import NextButton from '../Ui/NextButton';

function HomeScreen({navigation, route}) {
  function NextHandler() {
    navigation.navigate('welcome');
  }
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.homeScreen}>
            <Text style={styles.text}>
              you
              <Text style={styles.highlight}>learn</Text>
            </Text>
          </View>
          <View style={styles.imagecontainer}>
            <Image source={require('../assets/img/page.png')} />
          </View>

          <View style={styles.view1}>
            <Text style={styles.text2}>
              Create brilliant learning {'\n'} pathways
            </Text>
          </View>
          <NextButton onPress={NextHandler} />
          <View style={styles.text3}>
            <Text>
              Have an account? <Text style={styles.highlight}>Login</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    margin: 12,
    flex: 1,
  },
  text: {
    color: '#090A0A',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'sans-serif',
    fontWeight: '900',
    margin: 10,
    paddingTop: '26%',
    fontWeight: '700',
    lineHeight: 36,
  },
  imagecontainer: {
    alignItems: 'center',
    marginVertical:40,
  },
  text2: {
    color: '#090A0A',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'sans-serif',
    margin: 5,
    fontWeight: '700',
    lineHeight: 36,
  },
  text3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    marginBottom: 80,
  },
  highlight: {
    color: '#6B4EFF',
  },
});
