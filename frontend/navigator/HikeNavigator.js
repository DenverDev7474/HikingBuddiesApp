import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import HikeListScreen from "../screens/Hike/HikeListScreen";
import DetailHikeScreen from "../screens/Hike/DetailHikeScreen";
import Colors from "../constants/colors";
import HikeListTile from "../components/HikeListTile";
import AddNewHikeModal from "../components/AddNewHikeModal";
import { useNavigation } from "@react-navigation/native";

export default function HikeNavigator() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Hikelist">
      <Stack.Group>
        <Stack.Screen
          name="HikeListScreen"
          component={HikeListScreen}
          options={{
            header: (props) => (
              <View style={{ height: 130, backgroundColor: "#CCE1EF" }}>
                <Text style={styles.headerTitle}>Find a Hike</Text>
                <View style={styles.buttonContainerLarge}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("AddNewHike")}
                  >
                    <Text style={styles.buttonText}>Plan A Hike</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="DetailHike"
          component={DetailHikeScreen}
          options={{
            header: (props) => (
              <View
                style={{
                  height: 130,
                  backgroundColor: "#CCE1EF",
                  display: "flex",
                }}
              >
                <View style={styles.buttonContainerSmall}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="AddNewHike"
          component={AddNewHikeModal}
          options={{
            header: (props) => (
              <View
                style={{
                  height: 130,
                  backgroundColor: "#CCE1EF",
                  display: "flex",
                }}
              >
                <View style={styles.buttonContainerSmall}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
      </Stack.Group>
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
  buttonContainerSmall: {
    padding: 10,
    backgroundColor: Colors.primaryDarkBlue,
    borderRadius: 5,
    width: 60,
    top: 80,
    position: "absolute",
    right: 17,
    bottom: 10,
  },
  buttonContainerLarge: {
    padding: 10,
    backgroundColor: Colors.primaryDarkBlue,
    borderRadius: 5,
    width: 100,
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
