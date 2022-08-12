import { NavigationContainer, StackActions } from "@react-navigation/native";
import React from "react";
// import Basic from "./Screens/Basic";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Basic"
          component={Basic}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
