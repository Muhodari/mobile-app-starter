import React from "react";

import { Text, StyleSheet, View, FlatList, Dimensions, Image } from "react-native";
import { COLORS } from "../constants/colors";

import { MaterialIcons } from '@expo/vector-icons';

export const MenuComponent = () => {
    return(
        <View>

        <View style={styles.mainHeaderView}>
            <Text style={styles.mainHeader}>Choose Kigali</Text>
        </View>

        <View>
        <Image style = {styles.photo1} source={require("../../assets/images/icon1.png")} />
        <Text style={styles.orderedText}>Ordered</Text>
        <Text style={styles.n8Text}>N8</Text>

        <Image style = {styles.photo2} source={require("../../assets/images/icon2.png")} />
        <Text style={styles.callWaiterText}>Call waiter</Text>
        </View>

        <View>
           <View style={styles.menuTextView}>
               <Text style={styles.menuText}>
                   menu
               </Text>
           </View>

           <FlatList
           data = {[
               {key: "Appetizer"},
               {key: "Starter"},
               {key: "Main"},
               {key: "Dessert"},
               {key: "Drink"}
           ]}
           renderItem={({item}) => 
           <View style={styles.parent}>
               <Text style={styles.item}>{item.key}</Text>
               <MaterialIcons style={styles.iconStyle} name="arrow-forward-ios" size={24} color="white" />
           </View>
           }
           />
        </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.ORANGE
    },

    mainHeaderView: {
          alignContent: "center",
          alignItems: "center"
    },

    menuText: {
        fontSize: 20,
        fontWeight: "bolder",
        color: COLORS.ORANGE
    },

    menuTextView: {
        alignContent: "center",
        alignItems: "center",
        paddingTop: 80
    },
    
    item: {
        color: COLORS.WHITE,
        padding: 10,
        fontWeight: "semi-bold",
        fontSize: 20,
        marginLeft: 100
    },

    parent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width*90/100,
        paddingTop: 40
    },

    photo1: {
        width: 40,
        height: 40,
        marginTop: 60,
        marginLeft: 80
    },

    photo2: {
        width: 40,
        height: 40,
        marginTop: -35,
        marginLeft: 250,
    },

    callWaiterText: {
        color: COLORS.WHITE,
        fontWeight: "semi-bold",
        fontSize: 15,
        marginLeft: 250,
        paddingTop: 20
    },

    orderedText: {
        color: COLORS.WHITE,
        fontWeight: "bold",
        marginLeft: 85,
        fontSize: 20,
        paddingTop: 20
    },

    n8Text: {
        color: COLORS.WHITE,
        fontSize: 20,
        marginTop: -70,
        marginLeft: 130
    }
})