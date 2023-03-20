import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Colors from '../constants/colors';
import Avatar from '../components/Avatar';
import MainButton from '../components/MainButton';


const Header = props => {
    return (
        <View style={styles.header}>
            <View style={styles.AvatarButtonContainer}>
                <Avatar />
                <MainButton>PLAN A HIKE</MainButton>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.headerTitle}>Find a Hike</Text>
                    <Text>Filter/Sort</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 200,
        paddingTop: 0,
        justifyContent: 'center',
        backgroundColor: '#CCE1EF'
    },
    headerTitle: {
        fontSize: 40,
        fontFamily:  'robotoSlab',
        color: '#072649',
    },
    titleContainer: {
        flexDirection: "row",
        marginHorizontal: 18,
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    AvatarButtonContainer: {
        flexDirection: "row",
        marginHorizontal: 18,
        marginTop: 45,
        justifyContent: 'space-between',
        alignItems: "center"
    }
});

export default Header; 