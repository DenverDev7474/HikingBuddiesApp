import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import HikeListScreen from '../screens/Hike/HikeListScreen';
import DetailHikeScreen from '../screens/Hike/DetailHikeScreen';
import Colors from '../constants/colors'
import HikeListTile from '../components/HikeListTile';
import AddNewHikeModal from '../components/AddNewHikeModal';

const Stack = createStackNavigator();

export default function HikeNavigator({navigation}) {
    // const [ modalVisible, setModalVisible ] = useState(false);

    // const openModal = () => {
    //     setModalVisible(!modalVisible);
    // }

    return (

        <Stack.Navigator 
            initialRouteName="Hikelist" 
        >    
            <Stack.Group>
                <Stack.Screen 
                    name="HikeListScreen" 
                    component={HikeListScreen}
                    options={{
                        header: (props) =>
                            (
                            <View style={{ height: 130, backgroundColor: '#CCE1EF' }}>
                                <Text style={styles.headerTitle}>Find a Hike</Text>
                                    <View style={styles.buttonContainerLarge}>  
                                        <TouchableOpacity>
                                            <Text 
                                                style={styles.buttonText} 
                                                onPress={() => navigation.navigate("AddNewHike") }    
                                            >
                                            Plan A Hike
                                            </Text>
                                    </TouchableOpacity>
                                    </View>
                            </View>
                            ),
                    }} 
                />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen
                    name="AddNewHike"
                    component={AddNewHikeModal}
                    options={{
                            header: () =>
                                (
                                <View style={{ height: 130, backgroundColor: '#CCE1EF' }}>
                                    <Text style={styles.headerTitle}>Add New Hike</Text>
                                        {/* <View style={styles.buttonContainerLarge}>  
                                            <TouchableOpacity>
                                                <Text 
                                                    style={styles.buttonText} 
                                                    onPress={() => openModal()}     
                                                >
                                                Plan A Hike
                                                </Text>
                                        </TouchableOpacity>
                                        </View> */}
                                </View>
                                ),
                        }}
                />  
            
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen 
                    name="DetailHike" 
                    component={DetailHikeScreen} 
                    options={{
                        header: (props) =>
                            (
                            <View style={{ height: 130, backgroundColor: '#CCE1EF', display:'flex'}}>
                                <View style={styles.buttonContainerSmall}>  
                                    <TouchableOpacity>
                                        <Text 
                                            style={styles.buttonText} 
                                            onPress={() => navigation.goBack()}    
                                        >
                                        Back
                                        </Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                            ),
                        }} 
                />
            </Stack.Group>
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 40,
        marginLeft: 17,
        fontFamily: 'robotoSlab',
        bottom: 0,
        color: Colors.primaryDarkBlue,
        top: 70
    },
    buttonContainerSmall: {
        padding:10,
        backgroundColor: Colors.primaryDarkBlue,
        borderRadius: 5,
        width: 60,
        top: 80,
        position: 'absolute',
        right: 17,
        bottom: 10
    },
    buttonContainerLarge: {
        padding:10,
        backgroundColor: Colors.primaryDarkBlue,
        borderRadius: 5,
        width: 100,
        top: 80,
        position: 'absolute',
        right: 17,
        bottom: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
});