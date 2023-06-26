import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, ScrollView} from 'react-native'
import ListCard from '../../components/ListCard'
import { useAppSelector } from '../../common/hooks/hooks'
import rangesDict from '../../data/StaticData/rangesData';
import Colors from '../../constants/colors';



const InfoScreen = ({navigation}) => {

    // map through rangesDict and create a new array of all keys and values
    const ranges = Object.keys(rangesDict).map((key) => {
        return {
            rangeName: key,
            randgeId: rangesDict[key]
        }   
    }
    )

    const renderItem = (itemData) => {
        return (
            <ListCard range={itemData.item.rangeName} width={'45%'} color={'#CCE1EF'} onSelect={(props) => {
                navigation.navigate("InfoDetailScreen", {
                    rangeId: itemData.item.randgeId,
                    rangeName: itemData.item.rangeName
                })
            }}>
                <Text  style={styles.title}>{itemData.item.rangeName}</Text>
            </ListCard>
        );
    }

    return (
                <View style={styles.screen}>
                    <Text style={styles.rangeTitle}>Ranges</Text>
                    <View style={styles.rangeContainer}>  
                        <FlatList 
                            data= {ranges}
                            renderItem={renderItem}
                            keyExtractor={item => item.rangeName}
                            numColumns={2}
                            scrollEnabled={false}

                        />
                    </View>
                </View>   
    );
};

const styles = StyleSheet.create({
    Screen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rangeTitle: {
        color: Colors.secondaryGreen,
        fontFamily: 'robotoSlab',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10, 
        marginLeft: 15,
    },
    rangesCol: {    
        maxWidth: '50%' 
    },
    title: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'robotoSlab',
        color: Colors.primaryDarkBlue
    },
    rangeContainer: {   
        marginHorizontal: 15
    }
});

export default  InfoScreen;