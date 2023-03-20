import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const PaceCard = props => {

    // To DO: take milieage to make suggested gas split based on milieage and number of carpools. 

    return (
            <View style={styles.PaceContainer}>
                    <View style={styles.HeaderContainer}>
                        <Text style={styles.GasSplitHeader}>Pace:</Text>
                    </View> 
                    <View style={styles.gasIconPriceContainer}>
                        <Text style={styles.priceTag}>Slow</Text>
                    </View>               
            </View>
    );
};

const styles = StyleSheet.create({
    PaceContainer: {
        marginHorizontal: 17,
        marginTop: 10,
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

export default PaceCard;