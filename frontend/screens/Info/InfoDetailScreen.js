import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import routeSlice from '../../common/slice/routeSlice';
import { useAppSelector } from '../../common/hooks/hooks';
import { FlatList } from 'react-native-gesture-handler';
import ListCard from '../../components/ListCard';
import Colors from '../../constants/colors';



const InfoDetailScreen = ({route, navigation}) => {
    
    const rangeId = route.params.rangeId;
    const rangeName = route.params.rangeName;


    const mountains = useAppSelector((state) => state.mountainState.mountains);

    const mountainList = mountains.filter((mountain) => mountain.range === rangeId);
    
    const renderItem = (itemData) => {
        return (
            <ListCard hike={itemData.item} maxWidth={'100%'} color={Colors.backgroundGreen} onSelect={(props) => {
                navigation.navigate("InfoMountainDetailScreen", {
                    mountainId: itemData.item.mountainId
                })
            }}>
                <Text style={styles.title}>{itemData.item.mountainName}</Text>
                <Text>{itemData.item.elevation}</Text>


            </ListCard>
        );
    }

    

    return (    
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.rangeContainer}>
                        <Text style={styles.rangeTitle}>{rangeName}</Text>
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien diam, venenatis eget auctor sit amet, aliquet ac ante. Donec volutpat tellus at orci tristique cursus. Mauris ac eros vitae mi blandit eleifend vel sit amet nisl. Fusce vitae quam cursus est vestibulum feugiat vel et nunc. Suspendisse scelerisque arcu eget est tempor, at pulvinar risus tincidunt. Aliquam erat volutpat. Curabitur mauris augue, luctus id lectus id, euismod ultrices ipsum. Vivamus sit amet risus non sapien pellentesque gravida.
                        </Text>
                        <FlatList 
                            data= {mountainList}
                            renderItem={renderItem}
                            keyExtractor={item => item.mountainId}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* <JoinCard actionName={"REQUEST TO JOIN HIKE"}/> */}
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

export default  InfoDetailScreen;