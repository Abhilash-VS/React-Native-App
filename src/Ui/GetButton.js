/* eslint-disable react/react-in-jsx-scope */
import {Pressable, StyleSheet, Text, View} from 'react-native';
function GetButton({onPress}) {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttontext}>Get Started </Text>
      </View>
    </Pressable>
  );
}
export default GetButton;
const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 130,
    marginTop: 10,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'notoserif',
    marginBottom: 38,
    marginLeft: 24,
    marginRight: 24,
  },
  buttontext: {
    color: '#090A0A',
    fontSize: 15,
    marginRight: 5,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.5,
  },
});
