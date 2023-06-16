import React from 'react'
import { createAppContainer } from 'react-navigation'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderHeightContext } from 'react-navigation-stack'
import { View } from 'react-native'

import ChatScreen from '../screens/Chat/ChatScreen'
import DetailHikeScreen from '../screens/Hike/DetailHikeScreen'
import GroupScreen from '../screens/Group/GroupsScreen'
import CalendarScreen from '../screens/Calendar/CalendarScreen'
import CalendarDetailScreen from '../screens/Calendar/CalendarDetailScreen'

import InfoScreen from '../screens/Info/InfoScreen'
import HikeListScreen from '../screens/Hike/HikeListScreen'
import Colors from '../constants/colors'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHiking, faCalendar, faUsers, faComments, faMountain, faBorderNone } from '@fortawesome/free-solid-svg-icons'


const HikeNavigator = createStackNavigator({
    HikeList: HikeListScreen,
    DetailHike: DetailHikeScreen,   
})

const CalendarNavigator = createStackNavigator({
  Calendar: CalendarScreen,
  CalendarDetail: CalendarDetailScreen,
})

const BottomMenuTabNavigator = createBottomTabNavigator({
    HIKES : {screen: HikeNavigator, navigationOptions: {
        tabBarIcon : tabInfo => {
          return (
            <FontAwesomeIcon icon={ faHiking } size={30} color={tabInfo.tintColor} />
          );
        }
      }},
    CALENDAR: {screen: CalendarNavigator, navigationOptions: {
        tabBarIcon : tabInfo => {
          return (
            <FontAwesomeIcon icon={ faCalendar } size={30} color={tabInfo.tintColor}/>
          );
        },
    }},
    // GROUPS: {screen: GroupScreen, navigationOptions: {
    //     tabBarIcon : tabInfo => {
    //         return (
    //           <FontAwesomeIcon icon={ faUsers } size={30} color={tabInfo.tintColor}/>
    //         );
    //       }
    // }},
    // CHAT: {screen: ChatScreen, navigationOptions: {
    //     tabBarIcon : tabInfo => {
    //         return (
    //           <FontAwesomeIcon icon={ faComments } size={30} color={tabInfo.tintColor}/>
    //         );
    //       }
    // }},
    INFO: {screen: InfoScreen, navigationOptions: {
        tabBarIcon : tabInfo => {
            return (
              <FontAwesomeIcon icon={ faMountain } size={30} color={tabInfo.tintColor}/>
            );
          }, 
    }}
},{
    tabBarOptions : {
        activeTintColor: Colors.lightBlue,
        inactiveTintColor: Colors.secondaryGreen,
        tabStyle: {
          justifyContent: 'flex-end',
        },
        labelStyle: {
            fontSize: 15,
            fontFamily: 'robotoSlabLight',
            fontWeight: 'bold', 
          },
        style: {
            backgroundColor: Colors.primaryDarkBlue,
            height: 93,
          },
        tabBarIconStyle: {
           backgroundColor: 'red'
        }
    }
});
  
  



export default createAppContainer(BottomMenuTabNavigator);
