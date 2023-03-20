import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native'
import HikeListTile from '../../components/HikeListTile'
import { useGetHikesQuery } from '../../common/services/hike.service';

const HikeListScreen = ({ navigation }) => {
    const { data, error, isLoading, isFetching, isSuccess } = useGetHikesQuery()
    const availableHikes = data

    const renderItem = (itemData) => {
        return (
            <HikeListTile hike={itemData.item} onSelect={(props) => {
                navigation.navigate("DetailHike", {
                    hikeId: itemData.item._id,
                    mountainId: itemData.item.mountainId,
                    routeId: itemData.item.routeId,
                    hostId: itemData.item.hostId,
                    attendeesIds: itemData.item.attendeesIds,
                })
            }}/>
        );
    }

    return (
                <View style={styles.screen}>
                    {isLoading && <Text>Loading...</Text>}
                    {isFetching && <Text>Fetching...</Text>}
                    {error && <Text>Error!</Text>}
                    {isSuccess &&
                        <FlatList 
                        data= {availableHikes}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    }
                 
                </View>   
            );
};

const styles = StyleSheet.create({
    Screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default  HikeListScreen;