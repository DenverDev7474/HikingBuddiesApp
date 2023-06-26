import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AboutCard = props => {

    // To DO: take milieage to make suggested gas split based on milieage and number of carpools. 

    return (
            <View style={styles.GasContainer}>
                    <View style={styles.HeaderContainer}>
                        <Text style={styles.GasSplitHeader}>About Hike:</Text>
                    </View> 
                    <View style={styles.gasIconPriceContainer}>
                        <Text style={styles.priceTag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta velit hendrerit elit fringilla efficitur</Text>
                    </View>               
            </View>
    );
};

const styles = StyleSheet.create({
    GasContainer: {
        marginHorizontal: 17,
        marginTop: 20,
        height: 135,
    },
    GasSplitHeader: {
        fontSize: 20,
        fontFamily: 'robotoSlab',
        color: '#072649',
    },
    priceTag:  {
        fontSize: 18,
        fontFamily: 'openSans',
        color: '#0068B0',
    }
});

export default AboutCard;