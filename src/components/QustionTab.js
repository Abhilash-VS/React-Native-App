import { useState } from "react";
import { Pressable, StyleSheet, View ,Text} from "react-native";
function QustionTab({ name, tabActive, color, children,onPress}) {
  return (
    <Pressable
      style={styles.screen}
      android_ripple={{ color: "#e3e4e8" }}
      onPress={() => tabActive(name)}
    >
      <View style={[styles.tab, { backgroundColor: color }]}>
        <Text name={name} size={46} color={color} onPress={onPress}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}
export default QustionTab;
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  tab: {
    flex: 1,
    height: 50,
    width: '90%',
    borderRadius: 48,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 24,
    backgroundColor: "#F2F4F5",
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft:20,
    overflow: "hidden",
  },
  // height: 45,
  //   backgroundColor: "#e2e7e9",
  //   marginTop: 5,
  //   borderRadius: 8,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   fontFamily: "notoserif",
  //   marginBottom: 10,
  //   marginHorizontal: 24,
});
