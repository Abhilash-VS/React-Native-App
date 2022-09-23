/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import welcome from "../screens/welcome";
import login from "../screens/login";
import GetStarted from "../screens/GetStarted";
import SignIn from "../screens/SignIn";
import AuthPage from "../screens/AuthPage";
import Home2 from "../screens/Practice Area";
const Stack = createNativeStackNavigator();

function Route() {
  return (
    <>
      <NavigationContainer>
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
            name="welcome"
            component={welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Authpage"
            component={AuthPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home2"
            component={Home2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Route;
