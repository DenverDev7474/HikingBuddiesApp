<<<<<<< HEAD
import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HikeNavigator from "./HikeNavigator";
import CalendarNavigator from "./CalendarNavigator";
import InfoNavigator from "./InfoNavigator";
import Colors from "../constants/colors";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHiking,
  faCalendar,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, Text, View } from "react-native";
=======
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HikeNavigator from './HikeNavigator';
import CalendarNavigator from './CalendarNavigator';
import InfoNavigator from './InfoNavigator';
import Colors from '../constants/colors';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHiking, faCalendar, faMountain } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View } from 'react-native';

>>>>>>> adb3764e (init)

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
<<<<<<< HEAD
  return (
    <Tab.Navigator
      initialRouteName="HikeTAB"
      activeColor={Colors.lightBlue}
      inactiveColor={Colors.secondaryGreen}
      barStyle={{
        backgroundColor: Colors.primaryDarkBlue,
        height: 93,
      }}
    >
      <Tab.Screen
        name="HikeTAB"
        component={HikeNavigator}
        options={{
          tabBarLabel: <Text style={styles.barLabel}>HIKE</Text>,
          tabBarIcon: ({ color }) => (
            <View style={styles.barIcon}>
              <FontAwesomeIcon
                icon={faHiking}
                style={styles.icon}
                size={30}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CalendarTAB"
        component={CalendarNavigator}
        options={{
          tabBarLabel: <Text style={styles.barLabel}>CALENDAR</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCalendar} size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="InfoTAB"
        component={InfoNavigator}
        options={{
          tabBarLabel: <Text style={styles.barLabel}>INFO</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faMountain} size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
=======

  return (
        <Tab.Navigator 
            initialRouteName='HikeTAB'
            activeColor={Colors.lightBlue}
            inactiveColor={Colors.secondaryGreen}
            barStyle={{  
                backgroundColor: Colors.primaryDarkBlue,
                height: 93
            }}
            >
            <Tab.Screen 
                name="HikeTAB" 
                component={HikeNavigator}  
                options={{
                    tabBarLabel: <Text style={styles.barLabel}>HIKE</Text>,
                    tabBarIcon: ({ color }) => (
                        <View style={styles.barIcon}>
                            <FontAwesomeIcon icon={ faHiking } style={styles.icon} size={30} color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="CalendarTAB" 
                component={CalendarNavigator} 
                options={{
                    tabBarLabel: <Text style={styles.barLabel}>CALENDAR</Text>,
                    tabBarIcon: ({color}) => (
                    
                        <FontAwesomeIcon icon={ faCalendar } size={30} color={color}/>
                    ),
                }}
                
            />
            <Tab.Screen 
                name="InfoTAB" 
                component={InfoNavigator} 
                options={{
                    tabBarLabel: <Text style={styles.barLabel}>INFO</Text>,
                    tabBarIcon: ({color}) => (
                        <FontAwesomeIcon icon={ faMountain } size={30} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
>>>>>>> adb3764e (init)
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  barLabel: {
    fontSize: 15,
    fontFamily: "robotoSlabLight",
    fontWeight: "500",
    lineHeight: 35,
  },
});
=======
    barLabel: {
        fontSize: 15,
        fontFamily: 'robotoSlabLight',
        fontWeight: '500', 
        lineHeight: 35
    }
});
>>>>>>> adb3764e (init)
