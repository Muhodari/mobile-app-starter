import React from "react";

import {View, StyleSheet} from "react-native";

import { COLORS } from "../constants/colors";

import { MenuComponent } from "../components/MenuComponent";

export const Menu = () => {
 return(
    <View style={styles.container}>
    <View>
    <MenuComponent/>
    </View>
</View>
 )
}

const styles = StyleSheet.create({

   container: {
       backgroundColor: COLORS.BLACK,
       width: "100%",
       height: "100%",
       paddingTop: 60
   },

})