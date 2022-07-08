import React,{useEffect,useState} from "react"
import { View,Text , StyleSheet,Image} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL } from "../config/index";
import AsyncStorage from "@react-native-async-storage/async-storage";



const styles = StyleSheet.create({


container:{
    alignContent:"center",
    alignItems:"center",
    paddingTop:10,
},

card:{
backgroundColor:"#F8F8FB",
height:205,
paddingTop:10,
width:"85%",
paddingBottom:5,
display:"flex",
flexDirection:"column",
paddingLeft:5,
borderRadius:20,


},
image:{
    width:"80%",
    padding:"15%",
    height:65,
    borderRadius:10,
    paddingLeft:23,
},
textTitle:{
    fontSize:20,
    paddingLeft:15,
    paddingTop:8,
    fontWeight:"500",
    color:"black"


},
textDescription:{
   paddingLeft:15,
   paddingTop:5,
   fontSize:20,

},
votes:{
textAlign:"center",
fontWeight:"900",
fontSize:20
},

buttonContainer:{
     top:6,
    height: 48,
    left: 1,
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
button:{
            fontSize:30,
            fontWeight:"bold",
            color:"#ffffff",
            textAlign:"center"
}

});


const getProfile = async () => {
    return axios.get(API_URL+'/candidacy')
    .then((res) => {
        console.log(res.data);
        return res?.data
        
    }
    )
    .catch((err) => {
        return err?.response?.data;
    }
    )
}




export default function  RestaurantCard(){

    const [restaurant, setRestaurant] = React.useState([]);
    const [name, setName] = useState("")


    const getUserProfile = async () => {
        const profile = await getProfile();
        
      }
      useEffect(() => {
        getUserProfile()
      }, [])
    
      



return(

    
  <View style={styles.container}>  
{



<View style={styles.card}> 
 
 <Image style={styles.image}
 source={require("../../assets/images/london-stock.jpg")}
 />

<View>
<Text style={styles.textTitle}>Names: {name}</Text>
<Text style={styles.textDescription}>Mission:</Text>
<Text style={styles.votes}>Votes:</Text>
<TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.button}>Vote</Text>
     </TouchableOpacity>


</View>

</View>


}
{/* )} */}


</View>
);

}

