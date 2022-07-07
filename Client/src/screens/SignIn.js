import React, { useState } from 'react'
import { View,TextInput,Text, StyleSheet, Pressable ,Platform,StatusBar, Image, Alert} from "react-native"
import { Colors } from 'react-native-paper';
import {COLORS, FONTS} from '../constants/colors'
import * as SecureStore from 'expo-secure-store';


import axios from 'axios';

const styles = StyleSheet.create({
    container:{
        height:100,
        backgroundColor:COLORS.ORANGE,
        
    },

text:{

    color:"black",
    fontSize:50,
    fontWeight:650,
    alignSelf:"center",    
},
  textWhite:{
    color:COLORS.ORANGE,   
  },
  boxContainer:{
      backgroundColor:"white",
      height:592,
      marginTop:75,
      paddingTop:15,
      borderTopLeftRadius: 26,
      borderTopEndRadius: 26,
      borderColor:"black",
      paddingLeft:15,
      paddingRight: 25,
  },
  welcome:{
      color:COLORS.BLUE,
      alignSelf:"center",
      paddingTop:35,
      fontWeight:650
  },
  simple:{
    color:COLORS.GRAY,
    alignSelf:"center",
    paddingTop:16,
    paddingBottom:25,
  },
  input:{
    padding: 10,
    border:"none",
    flex:1,
    placeholderTextColor:COLORS.GRAY
  },
  icons: {
    marginLeft: 12,
    margin: 10,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  formStyle:{
    flexDirection: 'row',
    borderColor:COLORS.INPUT,
    height: 45,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius:5,   
  },
  formStyle2:{
    flexDirection: 'row',
    borderColor:COLORS.INPUT,
    height: 45,
    marginBottom: 10,
    marginTop: 18,
    borderWidth: 1,
    borderRadius:5,   
  },
  buttonText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 600,
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonSignIn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.ORANGE,
    marginTop:5,
    shadowColor:COLORS.GRAY,
    shadowOpacity: 0.5,
    shadowRadius:25
  },
  allLine:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20
  },
  line:{
    flex: 1,
    height: 1,
    backgroundColor: COLORS.GRAY,
    opacity:0.18
  },
  lineWord:{
    width: 60, 
    fontWeight: 600,
    textAlign: 'center',
    color:COLORS.GRAY
  },
  inText:{
    fontWeight: 600,
    textAlign: 'center',
    color:COLORS.GRAY,
    padding: 10,
    marginLeft: 50
  },
  last:{
      color:COLORS.ORANGE,
      fontWeight:650,
      marginLeft:105
  },
  last1:{
    color:COLORS.GRAY,
    fontWeight:500,
    marginLeft:55,
    marginTop: 8
  },
  last2:{
      color:COLORS.ORANGE,
  }


});


export default function SignIn(){

     const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const login = () => {
      axios.post("http://196.223.240.154:8099/supapp/api/auth/signin", {
          login: email,
          password
      },      
      )
      .then(res => {
        
        SecureStore.setItemAsync('tokens', res.data.token).then(() => {
          Alert.alert("Success", "Login Successful");
          }).catch((err) => {
            Alert.alert("Error", "Login Failed");
          });

          console.log(res);
      })
      .catch(err => {
          Alert.alert("Error", "Login Failed");
          console.log(err.data);
      }
      )
  }


    return(
        <>
        <View style={styles.container}>

        <View style={styles.boxContainer}>
        <Text style={styles.text}>Supa<Text style={styles.textWhite}>Menu</Text></Text>
        <Text style={styles.welcome}>Welcome...</Text>
        <Text style={styles.simple}>Sign in to continue</Text>

        <View style={styles.formStyle}>
        <Image style={styles.icons} source={require('../../assets/images/icons8-mail-24.png')} />
        <TextInput style={styles.input} placeholder='Your Email' value={email}  onChangeText = {(val)=>setEmail(val)} />
          </View>
          <View style={styles.formStyle}>  
            <Image style={styles.icons} source={require('../../assets/images/icons8-password-32.png')} />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} value={password}  onChangeText = {(val)=>setPassword(val)}/>
          </View>

          <Pressable style={styles.buttonSignIn} onPressIn={login}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <View style={styles.allLine}>
        <View style={styles.line} />
        <View>
            <Text style={styles.lineWord}>OR</Text>
        </View>
        <View style={styles.line} />
        </View>
        <View style={styles.formStyle2}>  
            <Image style={styles.icons} source={require('../../assets/images/icons8-google-48.png')} />
            <Text style={styles.inText}> Login with Google</Text>
          </View>
        <View style={styles.formStyle2}>  
            <Image style={styles.icons} source={require('../../assets/images/facebook.png')} />
            <Text style={styles.inText}> Login with Facebook</Text>
        </View>
        <View>
        <Text style={styles.last}> Forgot password</Text>
        <Text style={styles.last1}> Don't have an account?<Text style={styles.last2}> Register</Text></Text>
        </View>
    </View></View>
        </>
    )
}