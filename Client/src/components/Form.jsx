import React, { useState } from "react";

import { Text, StyleSheet, TextInput ,View, SafeAreaView, TouchableOpacity, Alert} from "react-native";

import { COLORS } from "../constants/colors";

import { Feather } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import axios from "axios";

export const Form = () => {

    const [fullName, setFullName] = useState("");

    const [mobile, setMobile] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    
    const sendData = () => {
        axios.post("http://196.223.240.154:8099/supapp/api/auth/client/signup", {
            firstName: fullName.split(" ")[0],
            lastName: fullName.split(" ")[1],
            password,
            mobile,
            email
        },      
        )
        .then(res => {
            Alert.alert("Success", "Registration completed successfully");
            console.log(res.data);
        })
        .catch(err => {
            Alert.alert("Error", "Registration didn't complete successfully");
            console.log(err.data);
        }
        )
    }


    return (
        <View style={styles.mainBody}>
            <Text style={styles.heading}>
                Supa
                <Text style={styles.mainTitle}>Menu</Text>
            </Text>

            <View style={styles.welcomeHeading}>
                <Text style={styles.mainHeading}>Welcome ...</Text>
            </View>

            <View style={styles.mainSentenceContainer}>
            <Text style={styles.mainSentence}>
                Please fill in the information
            </Text>
            </View>

            <SafeAreaView style = {styles.formInputs}>

                <View style = {styles.input}>
                <Feather name="user" size={24} color="gray" />
                <TextInput
                style={styles.textInput}
                onChangeText = {(val)=>setFullName(val)}
                placeholder="Full Name"
                value = {fullName}
                />
                </View>

                <View style = {styles.input}>
                <Feather name="password" size={24} color="gray" />
                <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText = {(val)=>setPassword(val)}
                placeholder="Password"
                value = {password}
                />
                </View>

                <View style={styles.input}>
                <FontAwesome name="phone" size={24} color="gray" />
                <TextInput
                style={styles.textInput}
                onChangeText = {(val)=> setMobile(val)}
                placeholder="Phone Number"
                value = {mobile}
                />
                </View>
                
              <View style = {styles.input}>
              <MaterialCommunityIcons name="email" size={24} color="gray" />
                <TextInput
                style={styles.textInput}
                onChangeText = {(val)=>setEmail(val)}
                placeholder="Your Email"
                value = {email}
                />
              </View>

             <TouchableOpacity
             style = {styles.proceedButton}
                onPress = {sendData}
             >
            <Text style={styles.textButton}>Proceed</Text>
             </TouchableOpacity>

            <View style={styles.orTextContainer}>
            <Text style={styles.orText}>OR</Text>
            </View>

            <View style={styles.normalTextContainer}>
                <Text style={styles.normalText}>If you have a PMG account</Text>
            </View>

            <TouchableOpacity
             style = {styles.signInButton}
             >
            <Text style={styles.textSignInButton}>Sign In</Text>
             </TouchableOpacity>

             <View style={styles.registerContainer}>
                 <Text style={styles.accountText}>
                 Don't have an account? 
                 <Text style={styles.registerText}> Register</Text>
                 </Text>
             </View>

            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        color: COLORS.ORANGE,
        fontWeight: "bold",

    },

    heading: {
       fontSize: 30,
       paddingTop: 20,
       paddingLeft: 60,
       fontWeight: "bold",
       marginLeft: 40
    },

    welcomeHeading: {
         alignItems: "center",
         alignContent: "center"
    },

    mainHeading: {
        fontWeight: "bold",
         fontSize: 15,
         paddingTop: 15
    },

    mainSentence: {
        fontSize: 10,
        color: "gray",
        paddingTop: 10
    },

    mainSentenceContainer: {
        alignItems: "center",
        alignContent: "center"
    },

    mainBody: {
        backgroundColor: COLORS.WHITE,
        width: "100%",
        height: 700,
        borderRadius: 50
    },

    input: {
        margin: 12,
        borderWidth: 1,
        padding: 14,
        paddingVertical: 14,
        borderRadius: 5,
        borderColor: "gray",
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
    },

    formInputs: {
        paddingTop: 25
    },

    textInput: {
        marginLeft: 10
    },

    proceedButton: {
        padding: 20,
        alignItems: "center",
        backgroundColor: COLORS.ORANGE,
        width: 333,
        marginLeft: 13,
        borderRadius: 10
    },

    signInButton: {
        padding: 20,
        alignItems: "center",
        backgroundColor: COLORS.ORANGE,
        width: 333,
        marginLeft: 13,
        borderRadius: 10,
    },

    textButton: {
        color: COLORS.WHITE
    },

    textSignInButton: {
        color: COLORS.WHITE
    },

    orTextContainer: {
        alignItems: "center",
        alignContent: "center"
    },

    orText: {
        color: "gray",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 15
    },

    normalTextContainer: {
        alignItems: "center",
        alignContent: "center"
    },

    normalText: {
        color: "gray",
        paddingTop: 10,
        paddingBottom: 15
    },

    registerText: {
        color: COLORS.ORANGE,
        fontWeight: "bold"
    },

    accountText: {
        color: "gray"
    },

    registerContainer: {
        alignItems: "center",
        alignContent: "center"
    }
})