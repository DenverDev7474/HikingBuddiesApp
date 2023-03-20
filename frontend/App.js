import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HikeNavigator from './navigator/HikeNavigator'
import CalendarNavigator from './navigator/CalendarNavigator'
import InfoNavigator from './navigator/InfoNavigator'


import { Provider } from 'react-redux'
import { store } from './common/store/store'
import { StyleSheet, Text, View } from 'react-native'; 
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import TabNavigator from './navigator/TabNavigator';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/Login/LoginScreen';
import SignupScreen from './screens/Login/SignupScreen';
import WelcomeScreen from './screens/Login/WelcomeScreen';



const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();



function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#072649' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor:  'white'},
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}




function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#c30b64' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor:  '#f9beda' },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <TabNavigator />
    </Stack.Navigator>
  );
}


export default function App() {


  const [fontLoaded, setFontLoaded] = useState(false)

  const fetchFonts = async () => {
    await Font.loadAsync({
      openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
      openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
      robotoSlab: require('./assets/fonts/RobotoSlab-Bold.ttf'),
      robotoSlabLight: require('./assets/fonts/RobotoSlab-Light.ttf'),
    });
  };


  if (!fontLoaded){
  return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={console.warn}
        /> 
    );
  }
       


  return (
      <Provider store={store}>
        <NavigationContainer>
          <AuthStack />
          {/* <HikeNavigator /> */}
        </NavigationContainer>
      </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});