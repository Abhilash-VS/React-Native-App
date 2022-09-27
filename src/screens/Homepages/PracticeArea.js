import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Tab from "../../components/Tab";
import BackButton from "../../Ui/backArrow";
import LoginButton from "../../Ui/LoginButton";

const PracticeArea = ({ navigation }) => {
  const [tab, setTab] = useState("None");

  function tabActive(name) {
    setTab(name);
  }
  function NextHandler() {
    navigation.navigate("TellYourGoal");
  }
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <View style={styles.homeScreen}>
            <BackButton onPress={() => navigation.navigate("welcome")} />
            <Text style={styles.dot}>
              ..<Text style={styles.highlight}>.</Text>
            </Text>
            <Pressable android_ripple={{ color: "#e3e4e8" }}>
              <Text style={styles.text} onPress={NextHandler}>
                {" "}
                Skip
              </Text>
            </Pressable>
          </View>
          <View style={styles.homeScreen2}>
            <Text style={styles.welcome}>Practice Area</Text>
            <Text style={styles.log}>So we can recommend exercises</Text>
          </View>
          <View style={styles.TabContainer}>
            <View style={styles.cardConatiner}>
              <Tab
                name="None"
                color={tab === "None" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                None
              </Tab>
              <Tab
                name="Core_Strength"
                color={tab === "Core_Strength" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Core Strength
              </Tab>
              <Tab
                name="Chest"
                color={tab === "Chest" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Chest
              </Tab>
              <Tab
                name="Shoulder"
                color={tab === "Shoulder" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Shoulder
              </Tab>
              <Tab
                name="Backbends"
                color={tab === "Backbends" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Backbends
              </Tab>
              <Tab
                name="Traps"
                color={tab === "Traps" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Traps
              </Tab>
              <Tab
                name="Forearms"
                color={tab === "Forearms" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Forearms
              </Tab>
              <Tab
                name="Hamstring"
                color={tab === "Hamstring" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Hamstring
              </Tab>
              <Tab
                name="Upper_back"
                color={tab === "Upper_back" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Upper Back
              </Tab>
              <Tab
                name="Lower_back"
                color={tab === "Lower_back" ? "#E7E7FF" : "#F2F4F5"}
                tabActive={tabActive}
              >
                Lower Back
              </Tab>
            </View>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <LoginButton onPress={NextHandler}>Select</LoginButton>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PracticeArea;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "1%",
  },
  text: {
    color: "#979C9E",
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
    marginLeft: 35,
    margin: 0,
  },
  wrapper: {
    flex: 1,
  },
  highlight: {
    color: "#6B4EFF",
  },
  homeScreen2: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 0,
  },
  welcome: {
    color: "#090A0A",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 32,
    fontFamily: "sans-serif",
    paddingTop: "5%",
    fontWeight: "700",
    lineHeight: 36,
  },
  log: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 24,
    color: "#6C7072",
  },
  selector: {
    paddingTop: 15,
  },

  TabContainer: {
    paddingTop: "5%",
  },
});
