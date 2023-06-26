import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Platform, TouchableNativeFeedback} from 'react-native'
import Colors from '../constants/colors' 

const ListCard = props => {
    let TouchableCmp =  TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21 ){
      TouchableCmp = TouchableNativeFeedback;
    }

    // {maxWidth: ${props.maxWidth},
    const  componentWidth = `{maxWidth: ${props.maxWidth}}`;
    const componentColor = `{backgroundColor: ${props.color}}`;


    return(
        <View 
        style={[styles.hikesItem, {backgroundColor: props.color}, {maxWidth: props.wiidth}]}        
        >
            <TouchableCmp
            onPress={props.onSelect}
            >
                <View>
                    {props.children}
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    hikesItem: {
        flex: 1,
        marginLeft: 0,
        marginRight: 7,
        marginTop:3,
        marginBottom: 3,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
    },

})

export default ListCard