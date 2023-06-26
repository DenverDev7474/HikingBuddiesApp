import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  SegmentedControlIOSComponent,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SectionList } from "react-native";
import Colors from "../../constants/colors";
import { useAppSelector } from "../../common/hooks/hooks";
import CalendarListTile from "../../components/CalendarListTile";

const CalendarScreen = ({ navigation }) => {
  const userId = 0;
  const availableHikes = useAppSelector(
    (state) => state.hikeState.hikesAvailable
  );
  const mountains = useAppSelector(
    (state) => state.mountainState.hikesAvailable
  );

  // filter out hikes from availableHikes that hostId is equal to userId
  const filteredHikesLeader = availableHikes.filter((item) => {
    if (item.hostId === userId) {
      return item;
    }
  });

  const filteredHikesJoining = availableHikes.filter((item) => {
    if (item.hostId !== userId) {
      return item;
    }
  });

  const calendarData = [
    {
      title: "Hikes you are leading",
      data: filteredHikesLeader,
    },
    {
      title: "Hikes you joined",
      data: filteredHikesJoining,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={calendarData}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => (
          <CalendarListTile
            hike={item}
            navigation={navigation}
            onSelect={(props) => {
              navigation.navigate("CalendarDetail", {
                hikeId: item.item.id,
              });
            }}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerTitle}>{title}</Text>
        )}
        stickySectionHeadersEnabled={false}
      />
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
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "robotoSlabLight",
    bottom: 0,
    color: Colors.primaryDarkBlue,
  },
});

export default CalendarScreen;
