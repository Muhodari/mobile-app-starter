import React from "react"
import { View,Text , StyleSheet,Image} from "react-native"



const styles = StyleSheet.create({


container:{
    alignContent:'center',
    alignItems:'center',
    paddingTop:10,
},

card:{
backgroundColor:'#F8F8FB',
height:95,
paddingTop:10,
width:'85%',
paddingBottom:5,
display:"flex",
flexDirection:"row",
paddingLeft:5,
borderRadius:20,


},
image:{
    width:90,
    height:75,
    borderRadius:10,
    paddingLeft:23,


},
textTitle:{
    fontSize:16,
    paddingLeft:15,
    paddingTop:3,
    fontWeight:'500',
    color:'black'


},
textDescription:{
   paddingLeft:15,
   paddingTop:5

}

});


export default function RestaurantCard(){


return(
  <View style={styles.container}>  


<View style={styles.card}> 
 
 <Image style={styles.image}
 source={require('../../assets/images/london-stock.jpg')}
 />

<View>
<Text style={styles.textTitle}>Choose Kigali</Text>
<Text style={styles.textDescription}>World,African,Pizzerla,Coffee</Text>
</View>

</View>

</View>
);

}

