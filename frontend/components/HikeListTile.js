import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Platform, TouchableNativeFeedback} from 'react-native'
import Colors from '../constants/colors' 
import moment from 'moment';
// import { useAppSelector } from '../common/hooks/hooks'
import { useGetMountainByIdQuery } from '../common/services/mountain.service';


const HikeListTile = props => {
    let TouchableCmp =  TouchableOpacity;
  
    if (Platform.OS === 'android' && Platform.Version >= 21 ){
      TouchableCmp = TouchableNativeFeedback;
    }

    // convert this to rtkquery
    // const Mountains = useAppSelector(state => state.mountainState.mountains);
    const { data, error, isLoading, isFetching, isSuccess } = useGetMountainByIdQuery(props.hike.mountainId);

    const Mountain = data;




    // const Mountain = Mountains.find(mountain => mountain.mountainId === props.hike.mountainId)


    var dateTime = new Date(props.hike.eventTime);
    const date = moment(dateTime).format("MMM Do YYYY");
    const time = moment(dateTime).format('LT');

    return(
        <View 
        style={styles.hikesItem}        
        >
            <TouchableCmp
            onPress={props.onSelect}
            >
                <View>
                    {isLoading && <Text>Loading...</Text>}
                    {isFetching && <Text>Fetching...</Text>}
                    {error && <Text>Error!</Text>}
                    {isSuccess && 
                        <View>
                            <Text style={styles.title}>{Mountain.mountainName}</Text>
                            <Text style={styles.description}>{date}</Text>
                            <Text style={styles.description}>{time}</Text>  
                        </View>
                    }
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    hikesItem: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop:7,
        marginBottom: 7,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: Colors.backgroundGreen,
        borderRadius: 5,
        overflow: 'hidden'
    },
    title: {
        fontSize: 30,
        lineHeight: 35,
        fontFamily: 'robotoSlab',
        color: Colors.primaryDarkBlue
    },
    description : {
        fontSize: 18,
        fontFamily: 'openSans',
        color: Colors.secondaryBlue
        
    }
})

export default HikeListTile