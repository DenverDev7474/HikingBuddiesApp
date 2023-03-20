import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HikeNavigator from './HikeNavigator';
import CalendarNavigator from './CalendarNavigator';
import InfoNavigator from './InfoNavigator';
import Colors from '../constants/colors';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHiking, faCalendar, faMountain } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View } from 'react-native';


const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {

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
  );
}

const styles = StyleSheet.create({
    barLabel: {
        fontSize: 15,
        fontFamily: 'robotoSlabLight',
        fontWeight: '500', 
        lineHeight: 35
    }
});