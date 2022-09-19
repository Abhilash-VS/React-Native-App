import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Input from "../components/Input";
import NextButton from "../Ui/NextButton";
import { useState, useContext } from "react";
import { emailRegex, phoneNoRegex } from "../components/Regex";
import { isEmpty } from "lodash";

function HomeScreen({ navigation, route }) {
  const [inputDetails, setInputDetails] = useState(
    route.params
      ? { ...route.params }
      : {
          firstName: "",
          lastName: "",
          email: "",
          phoneNo: "",
          password: "",
          cpassword: "",
        }
  );
  const [error, setError] = useState({});
  function inputHandler(name, value) {
    if (name === "phoneNo") value = phoneNoRegex(value);
    setInputDetails((prev) => {
      return { ...prev, [name]: value };
    });
    setError((prev) => {
      return { ...prev, [name]: "" };
    });
  }
  function NextHandler() {
    let errors = {};
    if (!inputDetails?.firstName.trim().length > 0)
      errors.firstName = "Please enter your First Name";
    if (!inputDetails?.lastName.trim().length > 0)
      errors.lastName = "Please enter your Last Name";
    if (
      !(
        inputDetails?.email.trim().length > 0 && emailRegex(inputDetails?.email)
      )
    )
      errors.email = "Enter a valid Email address";
    if (!inputDetails?.phoneNo) {
      errors.phoneNo = "Enter a valid Phone Number";
    } else {
      setInputDetails((prev) => {
        return { ...prev, phoneNo: phoneNoRegex(inputDetails.phoneNo) };
      });
    }
    if (!inputDetails?.password.trim().length === 6)
      errors.password = "Enter a valid password";
    setError(errors);
    if (isEmpty(errors)) {
      navigation.navigate("OTPScreen", inputDetails);
    }
  }
  return (
    <>
      <ScrollView>
        <View style={styles.homeScreen}>
          <Input
            isvalid={error.firstName && !!error.firstName}
            onChange={inputHandler.bind(this, "firstName")}
            value={inputDetails.firstName}
          >
            First Name
          </Input>
          <Input
            isvalid={error.lastName && !!error.lastName}
            onChange={inputHandler.bind(this, "lastName")}
            value={inputDetails.lastName}
          >
            last Name
          </Input>
          <Input
            isvalid={error.email && !!error.email}
            onChange={inputHandler.bind(this, "email")}
            value={inputDetails.email}
          >
            Email
          </Input>
          <Input
            isvalid={error.password && !!error.password}
            onChange={inputHandler.bind(this, "password")}
            value={inputDetails.password}
          >
            Password
          </Input>
          <Input
            isvalid={error.cpassword && !!error.cpassword}
            onChange={inputHandler.bind(this, "cpassword")}
            value={inputDetails.cpassword}
          >
            Confirm Password
          </Input>
          <Input
            isvalid={error.phoneNo && !!error.phoneNo}
            keyBoardtype="number-pad"
            onChange={inputHandler.bind(this, "phoneNo")}
            value={inputDetails.phoneNo}
          >
            Phone Number
          </Input>
        </View>
      </ScrollView>
      <NextButton onPress={NextHandler} />
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    margin: 12,
    flex: 1,
  },
});
