import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import routeSlice from '../../common/slice/routeSlice';
import { useAppSelector } from '../../common/hooks/hooks';
import { FlatList } from 'react-native-gesture-handler';
import ListCard from '../../components/ListCard';
import Colors from '../../constants/colors';



const InfoMountainDetailScreen = ({route, navigation}) => {


    const mountainId = route.params.mountainId;
    const mountains = useAppSelector((state) => state.mountainState.mountains);
    const routes = useAppSelector((state) => state.routeState.routes);

    const mountain = mountains.find((mountain) => mountain.mountainId === mountainId);
    const routeList = routes.filter((route) => route.mountainId === mountainId);

    // get the lowest and highest routeDistance fro the routelist
    const lowestRouteDistance = routeList.reduce((lowest, route) => {
        return route.routeDistance < lowest ? route.routeDistance : lowest;
    }   , routeList[0].routeDistance);  
    const highestRouteDistance = routeList.reduce((highest, route) => {
        return route.routeDistance > highest ? route.routeDistance : highest;
    }   , routeList[0].routeDistance);


    return (    
        <View style={styles.screen}>
            <View style={styles.rangeContainer}>
                <Text style={styles.rangeTitle}>{mountain.mountainName}</Text>
                <Text>Mileage:{lowestRouteDistance} to {highestRouteDistance}</Text>
                <Text>Elevation: {mountain.elevation}</Text>
                <Text>Trailhead:</Text>
                <FlatList   
                    data= {routeList}
                    renderItem={({item}) => {
                        return (
                            <ListCard route={item} maxWidth={'100%'} color={Colors.backgroundGreen}>
                                <Text style={styles.title}>{item.routeName}: Class {item.routeDifficulty}</Text>
                            </ListCard> 
                        );
                    }
                }   
                    keyExtractor={item => item.routeId}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    rangeContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'robotoSlab',
        color: Colors.primaryDarkBlue
    },
    rangeTitle: {
        color: Colors.secondaryGreen,
        fontFamily: 'robotoSlab',
        fontSize: 20,
        fontWeight: 'bold',
}

});

export default  InfoMountainDetailScreen;