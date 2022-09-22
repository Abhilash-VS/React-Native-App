import { View, Text, StyleSheet } from "react-native";

const Home2 = () => {
  return (
    <>
      <View>
        <View style={styles.homeScreen}>
          <Text style={styles.text}>Welcome back.</Text>
        </View>
      </View>
    </>
  );
};

export default Home2;

const styles = StyleSheet.create({
  homeScreen: {
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: "50%",
  },
  text: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 35,
    fontFamily: "sans-serif",
    fontWeight: "900",
    paddingTop: "10%",
    fontWeight: "700",
    lineHeight: 36,
    color: "gray",
  },
});
