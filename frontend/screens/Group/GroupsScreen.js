import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const GroupScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Group Screen Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default  GroupScreen;