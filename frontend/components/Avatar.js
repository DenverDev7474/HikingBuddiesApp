import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Avatar = props => {

    const borderRadiusNumber = props.size / 2;

    const containerBase =  {
            height: props.size,
            width: props.size,
            borderRadius: borderRadiusNumber
    };

    return( 
        <View style={[styles.container, containerBase]}>
            <Image 
                source={{uri: `${props.imageUrl}` }} 
                style={styles.image}
                resizeMode='cover' 
            />
        </View>
        )
};

const styles = StyleSheet.create({
        container : {
            overflow: 'hidden',
            borderColor: '#707070',
            borderStyle: 'solid',
            borderWidth: 0.1,
            shadowOffset: {width: 0 , height: 3},
            shadowColor: '#707070',
            shadowOpacity: 1        
        },
        image : {
            width: '100%',
            height: '100%'
        },
    }
);

export default Avatar;