import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/Home";
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Header />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MyStack;