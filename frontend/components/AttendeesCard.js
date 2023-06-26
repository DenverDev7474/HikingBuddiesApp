
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';
import Avatar from './Avatar';

const AttendeesCard = props => {

    const allUser = [];

    const attendees = props.selectedHike.attendeesIds;

    attendees.map( item => props.users.map( user => {
        if (user.id === item) {
            return allUser.push(user);
        }
    }))

    const count = allUser.length;
    const remainingSpot = props.selectedHike.spotsAvailable - count;


    return (
            <View style={styles.AttendeeContainer}>
                    <View style={styles.HeaderContainer}>
                        <Text style={styles.AttendeeHeader}>Others joining this hike:</Text>
                    </View>
                    <View style={styles.ProfilesContainer}>
                    {allUser.map((user) => {
                        return (
                            <View key={user.id} style={styles.usersContainer}>
                                <Avatar imageUrl={user.profilePicUrl} size={45} />
                                <Text style={styles.usersText}>{user.firstName}</Text>
                            </View>
                        ) 
                    })}
                    { remainingSpot ? (
                        <View style={styles.usersContainer}>
                        <View style={styles.circleNumber}>
                              <Text style={styles.circleText}>{remainingSpot}</Text>
                        </View>
                        <Text style={styles.usersTextSmall}>Spots Available!</Text>
                      </View>
                    ): ''}
                    </View>
            </View>
    );
};

const styles = StyleSheet.create({
    circleText: {
        color: 'white',
        fontFamily: 'openSansBold',
        fontSize: 21,
        textAlign: 'center'
    },
    circleNumber: {
        backgroundColor: '#0068B0',
        color: 'white',
        height: 45,
        width: 45,
        borderRadius: 45/2,
        overflow: 'hidden',
        fontFamily: 'openSansBold',
        fontSize: 21,
        flex: 1,
        justifyContent: 'center',
    },
    ProfilesContainer :{
        height: 135,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    AttendeeContainer: {
        marginHorizontal: 17,
        marginTop: 20,
        height: 135,
    },
    AttendeeHeader: {
        fontSize: 20,
        fontFamily: 'robotoSlab',
        color: '#072649',
    },
    usersContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems:'center',
        width: '50%'
    },
    usersText: {
        fontSize: 18,
        fontFamily: 'openSans',
        color: '#0068B0',
        marginLeft: 10
    },
    usersTextSmall: {
        fontSize: 10,
        fontFamily: 'openSans',
        color: '#0068B0',
        marginLeft: 10

    },
    HeaderContainer : {
        width: '100%'
    },
    AttendeeText: {
        fontSize: 18,
        fontFamily: 'openSans',
        lineHeight: 23,
        color: '#0068B0',        
    }
});

export default AttendeesCard;