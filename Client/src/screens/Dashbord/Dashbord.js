import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RestaurantCard from "../../components/RestaurantCard";



const styles = StyleSheet.create({

    formHeader:{
        color:"black",
        fontSize:30,
        textAlign:"center",
        padding:20,


    }
});


export default class DashbordScreen extends React.Component {

// create stles with Style sheet


render(){
    return(
        <View style={styles.container}>
            <Text style={styles.formHeader}>List of candidates</Text>
            <RestaurantCard/>

        </View>
    );
}
}
