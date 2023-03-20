import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, StatusBar, ScrollView, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
    
// import { HIKES, MOUNTAINS } from '../../data/dummy-data'
// import Hike from '../../models/hike';
import Colors from "../../constants/colors"
import HikeListTile from '../../components/HikeListTile';
    
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton'
import HikeHeader from '../../components/HikeHeader';
import Avatar from '../../components/Avatar'
import { useAppSelector } from '../../common/hooks/hooks';
import moment from 'moment';
import ActionCard from '../../components/ActionCard';


    
const CalendarDetailScreen = ({route, navigation}) => {
    
    const hikeId = route.params.hikeId;

    const availableHikes = useAppSelector((state) => state.hikeState.hikesAvailable)
    const mountains = useAppSelector((state) => state.mountainState.mountains)
    const routes = useAppSelector((state) => state.routeState.routes)
    const users = useAppSelector(state => state.userState.users);


    const selectedHike = availableHikes.find(hike => hike.id === hikeId);
    const selectedHikeMountain = mountains.find(mountain => mountain.mountainId === selectedHike.mountainId);
    const selectedRoute = routes.find(route => route.routeId === selectedHike.routeId);

    var dateTime = new Date(selectedHike.dateTime);
    const date = moment(dateTime).format("MMM Do YYYY");
    const time = moment(dateTime).format('LT');

    const allUsers = [];
    const attendees = selectedHike.attendeesIds;

    attendees.map( item => users.map( user => {
        if (user.id === item) {
            return allUsers.push(user);
        }
    }))

    const host = users.find(user => user.id === selectedHike.hostId) 

        return (
            <SafeAreaView style={styles.container}>
             <ScrollView>
                <View style={styles.screen}>
                    <HikeHeader selectedMountain={selectedHikeMountain}/>
                    <View style={styles.infoContainer}>
                        <View style={styles.specContainer}>
                            <Text style={styles.mtnDetailsText}>{date}</Text>
                            <Text style={styles.mtnDetailsText}>{time}</Text>
                            <Text style={styles.mtnDetailsText}>Difficulty Class: {selectedRoute.difficulty}</Text>
                            <Text style={styles.mtnDetailsText}>Mileage: {selectedRoute.distance}</Text>
                            <Text style={styles.mtnDetailsText}>Elevation: {selectedRoute.gain}</Text>
                        </View>
                        <View style={styles.specContainer}>
                            <Pressable style={styles.mtnDetails} >
                                <Text style={styles.mtnDetailsTextButton}>Cancel Hike</Text>
                            </Pressable>
                            <Pressable style={styles.mtnDetails} >
                                <Text style={styles.mtnDetailsTextButton}>Group Chat</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.AttendeeContainer}>
                        <View style={styles.HeaderContainer}>
                            <Text style={styles.AttendeeHeader}>Group:</Text>
                        </View>
                        <View style={styles.ProfilesContainer}>
                                 <View key={host.id} style={styles.usersContainer}>
                                     <Avatar imageUrl={host.profilePicUrl} size={45} />
                                     <View style={{flexDirection: 'column', paddingLeft: 10}}>
                                        <Text styles={styles.hostusersText}>Lead/Organizer</Text>
                                        <Text style={styles.hostTextName}>{host.firstName}</Text>
                                     </View>
                                
                                </View>
                        { allUsers.map((user) => {
                            return (
                                <View key={user.id} style={styles.usersContainer}>
                                     <Avatar imageUrl={user.profilePicUrl} size={45} />
                                    <Text style={styles.usersText}>{user.firstName}</Text>
                                </View>
                            )
                        })}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ActionCard actionName={'Start Hike'}/>
        </SafeAreaView>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        Screen: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
        },
        mtnDetails: {
            backgroundColor: Colors.secondaryBlue,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            borderRadius: 5,
            elevation: 3,
            width: 160,
            height: 30,
            marginTop: 8
    
        },
        mtnDetailsTextButton: {
            textTransform: 'uppercase', 
            color: 'white',
            fontSize: 15,
            fontFamily: 'openSans',
            color: 'white',
            position: 'absolute',
        },
        mtnDetailsText: {
            color: Colors.secondaryBlue,
            fontSize: 20,
            fontFamily: 'openSans',
            lineHeight: 30
        },
        infoContainer: {
            flexDirection: 'row',
        },
        specContainer : {
            padding: 17
        },
        circleText: {
            color: 'white',
            fontFamily: 'openSansBold',
            fontSize: 21,
            textAlign: 'center'
        },
        circleNumber: {
            backgroundColor: '#0068B0',
            color: 'white',
            height: 45,
            width: 45,
            borderRadius: 45/2,
            overflow: 'hidden',
            fontFamily: 'openSansBold',
            fontSize: 21,
            flex: 1,
            justifyContent: 'center',
        },
        ProfilesContainer :{
            height: 135,
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        AttendeeContainer: {
            marginHorizontal: 17,
            marginTop: 20,
            height: 135,
        },
        AttendeeHeader: {
            fontSize: 20,
            fontFamily: 'robotoSlab',
            color: '#072649',
        },
        usersContainer: {
            flexDirection: 'row',
            marginVertical: 5,
            alignItems:'center',
            width: '50%'
        },
        usersText: {
            fontSize: 18,
            fontFamily: 'openSans',
            color: '#0068B0',
            marginLeft: 10
        },
        hostTextName: {
            fontSize: 18,
            fontFamily: 'openSans',
            color: '#0068B0',
        },
        usersTextSmall: {
            fontSize: 10,
            fontFamily: 'openSans',
            color: '#0068B0',
            marginLeft: 10
    
        },
        HeaderContainer : {
            width: '100%'
        },
        AttendeeText: {
            fontSize: 18,
            fontFamily: 'openSans',
            lineHeight: 23,
            color: '#0068B0',        
        },
        hostusersText: {
            fontSize:8,
            fontFamily: 'openSans',
            color: '#072649',
        }
    });

export default  CalendarDetailScreen;
