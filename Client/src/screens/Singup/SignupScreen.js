import React,{useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image,TextInput,Linking  } from "react-native";
import axios from "axios"
import { API_URL } from "../../config";






const SignupScreen = ({navigation})=>{

    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState(null);
  const [email,setEmail] = useState("");
  const [names,setNames] = useState("");
  const [password,setPassowrd] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAdress] = useState("");
  const [nationalId,setNationalId] = useState("");

    // const { handleLogin } = useAuth();
  
    const handleSubmit = async () => {
      // navigation.navigate('Register')
      setLoading(true);
      const data={
        name:names,
        address:address,
        email:email,
        phone:phone,
        nationalId:nationalId,
        role:"user",
        password:password
      }
      
        await axios.post(API_URL+"/auth/register",data)
        .then((response)=>{
        if (response.data.success == true) {
            navigation.navigate("Login");
          }


        }).
        catch((error)=>{
            console.log(error);
            console.log("un known error occured")
        })

       
        
      } ;


      return (
        <View style={styles.container}>
            <View style={styles.form}>
        <View style={styles.fomrHeaderContainer}>
            <Text style={styles.formHeader}> Join us</Text>
                         
            </View>
                 
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Names" onChangeText={(val)=>setNames(val)}></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Address" onChangeText={(val)=>setAdress(val)}></TextInput>
            </View>
              

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(val)=>setEmail(val)}></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Phone" onChangeText={(val)=>setPhone(val)}></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="NationalId" onChangeText={(val)=>setNationalId(val)}></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Pasword" 
                secureTextEntry={true} onChangeText={(val)=>setPassowrd(val)}
                ></TextInput>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>     
            </View>

     <View style={styles.linktoRedirectContainer}>

      <Text style={styles.linktoRedirect}>have an account? <Text style={styles.link} 
      onPress={( ) => {
        navigation.navigate("Login")
      }}>Login</Text>  </Text>
     </View>

        </View>
    )
}










export default  SignupScreen;
    
        


// define styles
const styles = StyleSheet.create({

    container: {
    margin:0,
    padding:0,
    },
    
        formHeader:{
         color:"#000000",
            fontSize:40,
            paddingTop:20,
            paddingBottom:10,
            textAlign:"center",
            
    
    
        },
        inputContainer:{
         paddingTop:20,
         borderColor:"#514945AF",
        
    
        },
    
    input:{
    width:340,
    height: 38,
    left: 13,
    // boxSizing: "border-box",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize:20,
    borderWidth:1,
    borderStyle: "solid",
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
            fontWeight:"bold",
            color:"#ffffff",
            textAlign:"center"
    
        },
    
        linktoRedirectContainer:{
            paddingTop:40,
            paddingLeft:50,
    
        }, 
        linktoRedirect:{
          fontSize:20,
    
        },
        link:{
            color:"#5149AF",
            fontWeight:"bold",
            cursor:"pointer",
            
        }
        
    });
    