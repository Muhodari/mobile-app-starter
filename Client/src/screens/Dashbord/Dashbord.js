import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";




const styles = StyleSheet.create({

    formHeader:{
        color:"black",
        fontSize:40,
    }
});


export default class DashbordScreen extends React.Component {

// create stles with Style sheet


render(){
     AsyncStorage.removeItem('token')

    return(
        <View style={styles.container}>
            <Text style={styles.formHeader}>Dashbord Screen</Text>
        </View>
    );
}
}
