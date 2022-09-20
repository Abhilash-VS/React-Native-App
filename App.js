/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import HomeScreen from './src/screens/Home';
import welcome from './src/screens/welcome';
import login from './src/screens/login';
import GetStarted from './src/screens/GetStarted';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="welcome"
            component={welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MyStack;
