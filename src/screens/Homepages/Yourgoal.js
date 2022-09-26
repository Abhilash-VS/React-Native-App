import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import QustionTab from "../../components/QustionTab";
import LoginButton from "../../Ui/LoginButton";

const TellYourGoal = ({ navigation }) => {
  const [tab, setTab] = useState("None");

  function tabActive(name) {
    setTab(name);
  }
  function NextHandler() {
    navigation.navigate("AboutYou");
  }
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <View style={styles.homeScreen}>
            <Text style={styles.dot}>______________</Text>
          </View>
          <View style={styles.homeScreen2}>
            <Text style={styles.welcome}>Tell us your goal</Text>
            <Text style={styles.log}>
              We will recommend diets and exercises that suit you
            </Text>
          </View>
          <View style={styles.TabContainer}>
            <View style={styles.cardConatiner}>
              <QustionTab
                name="goal-1"
                color={tab === "goal-1" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Lose weight and increase stamina
              </QustionTab>
              <QustionTab
                name="goal-2"
                color={tab === "goal-2" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Maintain weight for health
              </QustionTab>
              <QustionTab
                name="goal-3"
                color={tab === "goal-3" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Gain weight for building muscle
              </QustionTab>
            </View>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <LoginButton onPress={NextHandler}>Continue</LoginButton>
        </View>
      </SafeAreaView>
    </>
  );
};

export default TellYourGoal;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "center",
    paddingTop: "1%",
    marginHorizontal: 24,
  },
  text: {
    color: "#a3a7a8",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "400",
    paddingTop: "5%",
    lineHeight: 36,
    marginRight: 35,
  },
  dot: {
    color: "#E3E5E5",
    fontSize: 50,
    fontWeight: "600",
    color: "#6B4EFF",
  },
  wrapper: {
    flex: 1,
  },
  homeScreen2: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 0,
  },
  welcome: {
    color: "#090A0A",
    textAlign: "left",
    justifyContent: "flex-start",
    fontSize: 32,
    fontFamily: "sans-serif",
    paddingTop: "5%",
    fontWeight: "700",
    lineHeight: 36,
  },
  log: {
    fontSize: 16,
    lineHeight: 24,
    color: "#090A0A",
    textAlign: "left",
    justifyContent: "flex-start",
  },
  selector: {
    paddingTop: 15,
  },

  TabContainer: {
    paddingTop: "5%",
  },
});
