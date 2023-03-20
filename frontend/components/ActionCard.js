import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/colors'



const ActionCard = ({actionName}) => {

    // To DO: take milieage to make suggested gas split based on milieage and number of carpools. \]

    return (
            <View style={styles.JoinContainer}>
                  <Pressable style={styles.mtnDetails} >
                        <Text style={styles.mtnDetailsTextButton}>{actionName}</Text>
                    </Pressable>            
            </View>
    );
};

const styles = StyleSheet.create({
    JoinContainer: {
        backgroundColor: '#88CDEF',
        height: 73,
        marginTop: 0,
        alignItems: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        alignItems: 'center'        
    },
    mtnDetails: {
        backgroundColor: Colors.secondaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        elevation: 3,
        width: 200,
        height: 43,
        marginVertical: 10

    },
    mtnDetailsTextButton: {
        textTransform: 'uppercase', 
        color: 'white',
        fontSize: 15,
        fontFamily: 'openSansBold',
        color: 'white',
        position: 'absolute',
    },
});

export default ActionCard;