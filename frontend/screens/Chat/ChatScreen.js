import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from "../../constants/colors"


const ChatScreen = props => {
  
    ChatScreen.navigationOptions = {
        headerTitle: 'Chat',
        headerStyle: {
            backgroundColor: Colors.backgroundBlue,
            height: 196,
        },
        headerTintColor: Colors.primaryDarkBlue,
    }
    
    return (
        <View>
            <Text>Test</Text>
        </View>
    );

};



const styles = StyleSheet.create({
    Screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 40,
        marginLeft: 10,
        fontFamily: 'robotoSlab',
        bottom: 0,
        color: Colors.primaryDarkBlue
    }


});

export default  ChatScreen;