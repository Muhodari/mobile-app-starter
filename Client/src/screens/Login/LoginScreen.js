import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image,TextInput,Linking  } from 'react-native';
import { login } from '../../services/auth';
import * as yup from "yup";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// define styles

const signInValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
      .required("Password is required"),
  });
  
  const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState(null);
  const [email,setEmail] = useState('');
  const [password,setPassowrd] = useState('');
    // const { handleLogin } = useAuth();
  
    const handleSubmit = async () => {
      // navigation.navigate('Register')
      setLoading(true);
      const data={
        email:email.nativeEvent.text,
        password:password.nativeEvent.text
      }
      
console.log(data);
await axios.post(
  "http://localhost:4000/api/v1/auth/signin",
  data
).then((response)=>{
    console.log(' i have rechead inside', response.data.data)
    AsyncStorage.setItem(
      'token',
      response.data.data.token
    );
  
if (response.data.success == true) {
  

  localStorage.setItem('token', response?.data?.data?.token);
    navigation.navigate("Home");
  }

else console.log('reached here');

}).
catch((error)=>{
    console.log(error);
    console.log("un known error occured")
})

console.log('racadsfsdf ')

     
    }
            return (
                
            <View style={styles.container}>

                <View style={styles.form}>

            <View style={styles.fomrHeaderContainer}>
                <Text style={styles.formHeader}> Login Here</Text>
                             
                </View>

         


                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email"
                     onChange={(val)=>setEmail(val)}
                    ></TextInput>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Pasword" 
                    secureTextEntry={true}
                    onChange={(text)=>setPassowrd(text)}
                    ></TextInput>
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress = {handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>     
                </View>

         <View style={styles.linktoRedirectContainer}>

          <Text style={styles.linktoRedirect}>don't have account? <Text style={styles.link} 
          onPress={() => {
             navigation.navigate("Register");

          }
          
          }>Register</Text>  </Text>
         </View>

            </View>
        )
    


  }




  const styles = StyleSheet.create({

    container: {
    margin:0,
    padding:0,
    },
    
        formHeader:{
         color:'#000000',
            fontSize:40,
            paddingTop:0,
            paddingBottom:30,
            textAlign:"center",
            
    
    
        },
        inputContainer:{
         paddingTop:30,
         borderColor:"#514945AF",
        
    
        },
    
    input:{
    width:340,
    height: 68,
    left: 43,
    // boxSizing: "border-box",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize:20,
    borderWidth:1,
    borderStyle: 'solid',
    borderColor:"#A6A5B0",
    borderRadius:10,
    
        },    
      
    
    buttonContainer:{
    
    marginTop:30,
    width: 300,
    height: 68,
    left: 20,
    backgroundColor: "#FC8014",
    textAlign: "center",
    color:"#ffffff",
    borderWidth:3,
    borderStyle: "solid",
    borderColor:"#FC8014",
    borderRadius:10,
    alignContent:"center",
    justifyContent:"center",
        },
    
        buttonText:{
            fontSize:30,
            fontWeight:"semi-bold",
            color:"#ffffff",
            textAlign:"center"
    
        },
    
        linktoRedirectContainer:{
            paddingTop:50,
    
        }, 
        linktoRedirect:{
          fontSize:20,
          paddingLeft:40,
    
        },
        link:{
            color:"#5149AF",
            fontWeight:"bold"
        }
        
    });
    
    


export default LoginScreen; 
