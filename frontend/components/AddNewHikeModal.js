import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import AddNewHikeForm from "./AddNewHikeForm";


export default function AddNewHikeModal({ navigation }) {
  return (
          <View>
              <AddNewHikeForm  navigation={navigation}/>
          </View>
    );
  }
  