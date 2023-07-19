import * as React from "react";
import { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Remove unused imports
import { Provider } from "react-redux";
import { store } from "./common/store/store";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import TabNavigator from "./navigator/TabNavigator";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login/LoginScreen";
import SignupScreen from "./screens/Login/SignupScreen";
import WelcomeScreen from "./screens/Login/WelcomeScreen";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#072649" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Main" component={MainScreen} 
        options={{
          headerShown: false,
        }}  
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return <TabNavigator />;
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load fonts async
  const fetchFonts = async () => {
    await Font.loadAsync({
      openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
      openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
      robotoSlab: require("./assets/fonts/RobotoSlab-Bold.ttf"),
      robotoSlabLight: require("./assets/fonts/RobotoSlab-Light.ttf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={console.warn}
        onFinish={() => {}}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
