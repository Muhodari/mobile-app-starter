import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image,TextInput,Linking  } from 'react-native';
import axios from 'axios'







const SignupScreen = ({navigation})=>{

    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState(null);
  const [email,setEmail] = useState('');
  const [names,setNames] = useState('');
  const [password,setPassowrd] = useState('');
    // const { handleLogin } = useAuth();
  
    const handleSubmit = async () => {
      // navigation.navigate('Register')
      setLoading(true);
      const data={
        name:names.nativeEvent.text,
        email:email.nativeEvent.text,
        password:password.nativeEvent.text
      }
      
        console.log('ghfj');

        await axios.post(
          "http://localhost:4000/api/v1/auth/register",
          data
        ).then((response)=>{
            console.log(' i have rechead inside', response)
        if (response.data.success == true) {
            navigation.navigate("Login");
          }

        else console.log('reached here');

        }).
        catch((error)=>{
            console.log(error);
            console.log("un known error occured")
        })

        console.log('racadsfsdf ')
        
      } ;


      return (
        <View style={styles.container}>
            <View style={styles.form}>
        <View style={styles.fomrHeaderContainer}>
            <Text style={styles.formHeader}> Join us</Text>
                         
            </View>
                 
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Names" onChange={(val)=>setNames(val)}></TextInput>
            </View>
              

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Email" onChange={(val)=>setEmail(val)}></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Pasword" 
                secureTextEntry={true} onChange={(val)=>setPassowrd(val)}
                ></TextInput>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>     
            </View>

     <View style={styles.linktoRedirectContainer}>

      <Text style={styles.linktoRedirect}>have an account? <Text style={styles.link} 
      onPress={( ) => {
        navigation.navigate('Login')
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
         color:'#000000',
            fontSize:40,
            paddingTop:0,
            paddingBottom:20,
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
            paddingTop:40,
            paddingLeft:50,
    
        }, 
        linktoRedirect:{
          fontSize:20,
    
        },
        link:{
            color:"#5149AF",
            fontWeight:"bold"
        }
        
    });
    