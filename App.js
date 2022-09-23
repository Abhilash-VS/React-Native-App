/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Route from "./src/Navigation/Route";

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Route />
    </>
  );
}

export default App;
