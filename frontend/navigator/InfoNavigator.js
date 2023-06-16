import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InfoScreen from "../screens/Info/InfoScreen";
import InfoDetailScreen from "../screens/Info/InfoDetailScreen";
import InfoMountainDetailScreen from "../screens/Info/InfoMountainDetailScreen";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { StackActions } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function InfoNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="InfoScreen">
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          header: (props) => (
            <View style={{ height: 130, backgroundColor: "#CCE1EF" }}>
              <Text style={styles.headerTitle}>Peaks</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="InfoDetailScreen"
        component={InfoDetailScreen}
        options={{
          header: (props) => (
            <View
              style={{
                height: 130,
                backgroundColor: "#CCE1EF",
                display: "flex",
              }}
            >
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.buttonText}
                    onPress={() => navigation.navigate("InfoScreen")}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="InfoMountainDetailScreen"
        component={InfoMountainDetailScreen}
        options={{
          header: (props) => (
            <View
              style={{
                height: 130,
                backgroundColor: "#CCE1EF",
                display: "flex",
              }}
            >
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.buttonText}
                    onPress={() => navigation.dispatch(StackActions.pop(1))}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    marginLeft: 17,
    fontFamily: "robotoSlab",
    bottom: 0,
    color: Colors.primaryDarkBlue,
    top: 70,
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: Colors.primaryDarkBlue,
    borderRadius: 5,
    width: 60,
    top: 80,
    position: "absolute",
    right: 17,
    bottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
