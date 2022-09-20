/* eslint-disable react/react-in-jsx-scope */
import {Pressable, StyleSheet, Text, View} from 'react-native';
function NextButton({onPress}) {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttontext}>Create account</Text>
      </View>
    </Pressable>
  );
}
export default NextButton;
const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    backgroundColor: '#6B4EFF',
    marginHorizontal: 110,
    marginTop: 5,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'notoserif',
    marginBottom: 10,
    marginLeft: 95.5,
    marginRight: 97.5,
  },
  buttontext: {
    color: 'white',
    fontSize: 15,
    marginRight: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
