import React from "react"
import { View,Text , StyleSheet,Button,TouchableOpacity} from "react-native"
import { COLORS } from "../constants/colors";
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/AntDesign';



const styles = StyleSheet.create({


container:{
backgroundColor:'yellow'

},

btn:{
   
  width:'18%',
  width:54,
  height:42,
  fontSize:43,
  borderRadius:100,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:'grey'
  

}




});


export default function BackToPreviousPageButton(){


return(
  <View style={styles.container}>  

<Icon.Button
  name="left"
  backgroundColor="#3b5998"
  style={styles.btn}
  >
</Icon.Button>


{/* 
<TouchableOpacity style={styles.btn}>
   <Text style={  {fontSize:40,paddingBottom:1} }>+</Text>
 </TouchableOpacity> */}

</View>
);

}

