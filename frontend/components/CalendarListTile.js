import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Platform, TouchableNativeFeedback} from 'react-native'

import Colors from '../constants/colors' 

import { MOUNTAINS } from '../data/dummy-data'
import moment from 'moment';
import { useAppSelector } from '../common/hooks/hooks';


const CalendarListTile = ({hike, onSelect}) => {    

    const nav = ({navigation}) => {
        navigation.push('CalendarDetail', {
            hikeId: hike.item.id,
    })}

    const userId = 0;
    const availableMountain = useAppSelector(state => state.mountainState.mountains);

    // find the props id and find the mountain with the same id


    let TouchableCmp =  TouchableOpacity;
  
    if (Platform.OS === 'android' && Platform.Version >= 21 ){
      TouchableCmp = TouchableNativeFeedback;
    }


    const mountain = availableMountain.find((item) => {
        if(item.mountainId === hike.item.mountainId){
            return item
        }
    });


    var dateTime = new Date(hike.item.dateTime);
    const date = moment(dateTime).format("MMM Do YYYY");
    const time = moment(dateTime).format('LT');

    const stylebackground = () => {
        if (userId === hike.item.hostId) {
            return ( 
                    {backgroundColor: Colors.backgroundGreen}
            )
        } else {
            return (
                {backgroundColor: Colors.backgroundBlue}
            )
        }
    }
    
    return(
        <View style={[styles.hikesItem, stylebackground()]}>    
            <TouchableCmp
            onPress={onSelect} >
                <View>
                    <Text style={styles.title}>{mountain.mountainName}</Text>
                    <Text style={styles.description}>{date} - {time}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    hikesItem: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop:8,
        marginBottom: 8,
        padding: 10,
        height: 80,
        borderRadius: 5,
        overflow: 'hidden',
    },
    title: {
        fontSize: 30,
        fontFamily: 'robotoSlab',
        color: Colors.primaryDarkBlue
    },
    description : {
        fontSize: 18,
        fontFamily: 'openSans',
        color: Colors.secondaryBlue
        
    }
})

export default CalendarListTile