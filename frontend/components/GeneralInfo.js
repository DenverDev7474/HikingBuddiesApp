import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import moment from 'moment';
import Colors from "../constants/colors"


const GeneralInfo = props => {
    const { selectedHike, selectedRoute } = props

    var dateTime = new Date(selectedHike.eventTime);
    const date = moment(dateTime).format("MMM Do YYYY");
    const time = moment(dateTime).format('LT');
    
    return (
            <View style={styles.infoContainer}>
                <View style={styles.specContainer}>
                    <Text style={styles.mtnDetailsText}>{date}</Text>
                    <Text style={styles.mtnDetailsText}>{time}</Text>
                    <Pressable style={styles.mtnDetails} >
                        <Text style={styles.mtnDetailsTextButton}>Mountain Details</Text>
                    </Pressable>
                </View>
                <View style={styles.specContainer}>
                    <Text style={styles.mtnDetailsText}>Difficulty Class: {props.selectedRoute.routeDifficulty}</Text>
                    <Text style={styles.mtnDetailsText}>Mileage: {props.selectedRoute.routeDistance}</Text>
                    <Text style={styles.mtnDetailsText}>Elevation: {props.selectedRoute.routeGain}</Text>
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    mtnDetails: {
        backgroundColor: Colors.secondaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        elevation: 3,
        width: 160,
        height: 30,
        marginTop: 8

    },
    mtnDetailsTextButton: {
        textTransform: 'uppercase', 
        color: 'white',
        fontSize: 15,
        fontFamily: 'openSans',
        color: 'white',
        position: 'absolute',
    },
    mtnDetailsText: {
        color: Colors.secondaryBlue,
        fontSize: 20,
        fontFamily: 'openSans',
        lineHeight: 30
    },
    infoContainer: {
        flexDirection: 'row',
    },
    specContainer : {
        padding: 17
    }
});

export default  GeneralInfo;