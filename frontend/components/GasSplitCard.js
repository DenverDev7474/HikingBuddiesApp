import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';
import Avatar from './Avatar';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHiking, faCalendar, faUsers, faComments, faCar, faGasPump } from '@fortawesome/free-solid-svg-icons'




const GasSplitGas = props => {

    // To DO: take milieage to make suggested gas split based on milieage and number of carpools. 

    return (
            <View style={styles.GasContainer}>
                    <View style={styles.HeaderContainer}>
                        <Text style={styles.GasSplitHeader}>Gas/ Mileage Split:</Text>
                    </View> 
                    <View style={styles.gasIconPriceContainer}>
                        <FontAwesomeIcon icon={ faCar } size={30} color='gray' />
                        <FontAwesomeIcon icon={ faGasPump } size={30} color='gray' />
                        <Text style={styles.priceTag}>$10.50</Text>
                    </View>               
            </View>
    );
};

const styles = StyleSheet.create({
    GasContainer: {
        marginHorizontal: 17,
        marginTop: 20,
    },
    GasSplitHeader: {
        fontSize: 20,
        fontFamily: 'robotoSlab',
        color: '#072649',
    },
    gasIconPriceContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    priceTag:  {
        fontSize: 18,
        fontFamily: 'openSans',
        color: '#0068B0',
        marginLeft: 10
    }
});

export default GasSplitGas;