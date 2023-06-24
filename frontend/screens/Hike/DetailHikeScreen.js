import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Platform, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppSelector } from '../../common/hooks/hooks';
import OrganizerCard from '../../components/OrganizerCard';
import Colors from '../../constants/colors';
import GeneralInfo from '../../components/GeneralInfo';
import HikeHeader from '../../components/HikeHeader';
import AttendeesCard from '../../components/AttendeesCard';
import GasSplitGas from '../../components/GasSplitCard';
import AboutCard from '../../components/AboutCard';
import PaceCard from '../../components/PaceCard';
import JoinCard from '../../components/ActionCard';
import { useGetHikeByIdQuery } from '../../common/services/hike.service';
import { useGetMountainByIdQuery } from '../../common/services/mountain.service'
import { useGetRouteByIdQuery } from '../../common/services/routes.service'
import { useGetUserByIdQuery } from '../../common/services/user.service';


const DetailHikeScreen = ({ route, navigation }) => {

    const { hikeId, routeId, mountainId, hostId, attendeesIds } = route.params;

    console.log("route", route.params)

    const { data: selectedHike } = useGetHikeByIdQuery(hikeId)
    const { data: selectedMountain } = useGetMountainByIdQuery(mountainId);
    const { data: selectedRoute } = useGetRouteByIdQuery(routeId);
    // const { data: users } =  useGetUsersByIdQuery();
    const { data: selectedHost } = useGetUserByIdQuery(hostId);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.screen}>
                    <HikeHeader selectedMountain={selectedMountain}/>
                    {/* <GeneralInfo selectedHike={selectedHike} selectedRoute={selectedRoute}/> */}
                    {/* <OrganizerCard selectedHost={selectedHost} selectedRoute={selectedRoute}/> */}
                    {/* <AttendeesCard users={users} selectedHike={selectedHike}/> */}
                    <GasSplitGas />
                    <AboutCard />
                    <PaceCard />
                </View>
            </ScrollView>
            <JoinCard actionName={"REQUEST TO JOIN HIKE"}/>
        </SafeAreaView>
    )
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
});

export default  DetailHikeScreen;