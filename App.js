import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/Home";
import OtpScreen from "./src/screens/Otp";
import CameraScreen from "./src/screens/Camera";
import GetStarted from "./src/screens/GetStarted";
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Header />
        <Stack.Navigator>
        <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTPScreen"
            component={OtpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MyStack;
