import React, { useState } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard, ActionSheetIOS } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useGetAllMountainsQuery } from "../common/services/mountain.service";
import { findFocusedRoute } from "@react-navigation/native";
import { useGetAllRoutesByMountainIdQuery } from "../common/services/routes.service";
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from "react-native-gesture-handler";
import RadioButtonRN from 'radio-buttons-react-native';
import { useAddHikeMutation } from "../common/services/hike.service";
import Hike from "../models/hike";
import { NavigationEvents } from "react-navigation";




export default function AddNewHikeForm(props) {
    const [ mountainId, setMountainId ] = useState('');
    const [date, setDate] = useState(new Date())

    console.log('props', props)

    const { data, error, isLoading, isFetching, isSuccess } = useGetAllMountainsQuery();
    
    const { data: dataRoutes, error: errorRoutes, isLoading: isLoadingRoutes, isFetching: isFetchingRoutes, isSuccess: isSuccessRoutes } = useGetAllRoutesByMountainIdQuery(mountainId);

    const findRoute = (mountainId) => {
        setMountainId(mountainId);
    }

    const [ addHike ] = useAddHikeMutation();

    const spotData = [
        {
            label: '2 Spots',
            value: 2,
            key: '2'
        },
        {
            label: '3 Spots',
            value: 3,
            key: '3'

        },
        {
            label: '4 Spots',
            value: 4,
            key: '4'

        },
    ];

    const gasData = [
        {
            label: 'Yes',
            value: 'Yes',
        },
        {
            label: 'No',
            value: 'No',
        },
    ];

    const paceData = [
        {
            label: 'Fast',
            value: 'Fast',
        },
        {
            label: 'Medium',
            value: 'Medium',
        },
        {
            label: 'Slow',
            value: 'Slow',
        },
    ];


    return (
        <ScrollView>
        <Formik
        initialValues={{
            mountainId: "",
            eventTime: "",
            routeId: "",
            hostId: "628533c393a79f2d1e383623",
            spotsAvailable: 0,
            aboutDetails: "fogseogw",
            gasSplit: "",
            hikePace: "",
            weatherPrediction: "TBD",
            createdAt: (new Date()).toISOString(),
            weatherPredictionPercentage: 100
        }}
        onSubmit={(values, actions) => {
            const newHike = {
                createdAt: values.createdAt,
                mountainId: values.mountainId,
                eventTime: values.eventTime,
                routeId: values.routeId,
                hostId: values.hostId,
                spotsAvailable: values.spotsAvailable,
                aboutDetails: values.aboutDetails,
                gasSplit: values.gasSplit,
                hikePace: values.hikePace,
                weatherPrediction: values.weatherPrediction,
                weatherPredictionPercentage: values.weatherPredictionPercentage,
                attendeesIds: []
            }
            actions.resetForm()
            addHike(newHike);
            props.navigation.goBack()
            // navigate back to previous screen 
        }}
        >
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
            <View>
            
            {isLoading && <Text>Loading...</Text>}
                    {isFetching && <Text>Fetching...</Text>}
                    {error && <Text>Error!</Text>}
                    {isSuccess &&
                <View>
                    <Text>Select a mountain</Text>
                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select a mountain"
                        //  onValueChange={formik.handleChange('mountainName')}
                        selectedValue={values.mountainId}
                        onValueChange={(itemValue, itemIndex) => {
                            handleChange("mountainId")(itemValue)
                            findRoute(itemValue)
                        }}
                    >
                        <Picker.Item value="Select a Moutain" label="Select a Moutain" />
                        {data.map(mountain => {
                            return (
                                <Picker.Item label={mountain.mountainName}
                                    value={mountain._id} 
                                    key= {mountain._id}
                                />
                            )
                        })}
                    </Picker>  
                    <Text>Select a Route</Text>
                    {isLoadingRoutes && <Text>Loading...</Text>}
                    {isFetchingRoutes && <Text>Fetching...</Text>}
                    {errorRoutes && <Text>Error!</Text>}
                    {isSuccessRoutes &&
                    <Picker 
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select a route"
                        selectedValue={values.routeId}
                        onValueChange={(itemValue, itemIndex) => {
                            handleChange("routeId")(itemValue)
                        }}
                    >
                        <Picker.Item value="Select a Route" label="Select a Route" />   
                        {dataRoutes.map(route => {  
                            return (
                                <Picker.Item label={route.routeName}
                                    value={route._id}
                                    key= {route._id}
                                />
                            )
                        })}
                    </Picker>
    }
                    <Text>Select a Date</Text>
                    <DateTimePicker 
                        value={date} mode={"datetime"} 
                        display={"spinner"}
                        onChange={(event, selectedDate) => {
                            setDate(selectedDate)
                            setFieldValue("eventTime", selectedDate.toISOString())
                        }}

                    />
                    <Text>Available Spots</Text>
                    <RadioButtonRN 
                        data={spotData}
                        selectedBtn={(e) => {
                            setFieldValue("spotsAvailable", e.value)
                        }}
                    />
                    <Text>About the Hike</Text>
                    <TextInput
                        onChangeText={handleChange("aboutDetails")}
                        onBlur={handleBlur("aboutDetails")}
                        value={values.aboutDetails} 
                    />
                    <Text>Gas Split</Text>
                    <RadioButtonRN 
                        data={gasData}   
                        selectedBtn={(e) => 
                            setFieldValue("gasSplit", e.value) 
                        }
                    />
                    <Text>Hike Pace</Text>
                    <RadioButtonRN
                        data={paceData}
                        selectedBtn={(e) => {
                            setFieldValue("hikePace", e.value)
                        }}
                    />
                </View>
            }
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
            </View>
        )}
        </Formik>
        </ScrollView>
    );

}