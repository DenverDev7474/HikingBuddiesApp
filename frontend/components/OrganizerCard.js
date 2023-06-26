
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import Avatar from './Avatar';

const OrganizerCard = props => {

    // To do: add Navigation to organizer profile

    return (
            <View style={styles.OrganizerContainer}>
                <View style={styles.AvatarContainer}>
                    <Avatar imageUrl={props.selectedHost.profilePicUrl} size={60} />
                </View>
                <View style={styles.orgContainer}>
                    <Text style={styles.orgContainerHeader}>Organizer:</Text>
                    <Text style={styles.orgContainerText}>{props.selectedHost.firstName} {props.selectedHost.lastName[0]}.</Text>
                    <Text style={styles.orgContainerText}>{props.selectedHost.city}</Text>
                </View>

            </View>
    );
};

const styles = StyleSheet.create({
    AvatarContainer: {
        margin: 10,
        marginRight: 20,
    },
    OrganizerContainer: {
        backgroundColor: 'rgba(136, 205, 239, .48)',
        marginHorizontal: 17,
        borderRadius: 8,
        flexDirection: 'row',
        height: 90,
    },
    orgContainer: {
        flex: 2,
        padding: 5
    },
    orgContainerHeader: {
        fontSize: 20,
        fontFamily: 'robotoSlab',
        color: '#072649'
    }, 
    orgContainerText: {
        fontSize: 18,
        fontFamily: 'openSans',
        lineHeight: 23,
        color: '#0068B0',        
    }
});

export default OrganizerCard;