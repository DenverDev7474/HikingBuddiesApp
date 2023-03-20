import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'


const HikeHeader = props => {
    //console.log(props.selectedMountain)

    return (
            <View style={styles.imageContainer} >
                <Image
                    style={styles.mtnImg}
                    source={
                    require('../assets/images/mountain.jpg')
                    }
                />
                <Text style={styles.headerTitle}>{props.selectedMountain.mountainName}</Text>
            </View>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        paddingTop: 5,
        resizeMode: 'cover',
    },
    mtnImg: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
    },
    headerTitle: {
        fontSize: 40,
        fontFamily: 'robotoSlab',
        color: 'white',
        position: 'absolute', 
        top: 150,
        left: 17
    },
});

export default  HikeHeader;