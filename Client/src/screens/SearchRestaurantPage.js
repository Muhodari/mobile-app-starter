import React from "react"
import { View , Text ,StyleSheet,Button, TextInput,TouchableOpacity,SafeAreaView, ScrollView,Platform,StatusBar} from "react-native"
import BackToPreviousPageButton from "../components/BackToPreviousPageButton";
import RestaurantCard from "../components/RestaurantCard";
import { COLORS } from "../constants/colors";
import Icon from 'react-native-vector-icons/AntDesign';


const styles = StyleSheet.create({
    container:{
    paddingTop:Platform.OS ==="ios"? 80: 25,
    // paddingTop:80
    },


header:{
display:"flex",
flexDirection:'row',

width:'80%',
marginLeft:'5%',
// backgroundColor:COLORS.ORANGE,
},

    textSearchInput:{
        height: 40,
        // borderWidth: 1,
        borderColor:'#ffffff',
        padding: 10,
        width:'66%',
        marginLeft:20,
        fontWeight:'600',
        fontSize:15
       
    },
    footer: {
        position: 'fixed',
        width: "100%", 
        height: '40px',
        backgroundColor:'grey'
    },
    scrollbal:{
        height:380,
        marginBottom:100
    },
    nearByText:{
        color:COLORS.ORANGE,
        padding:25,
        paddingLeft:45,
        paddingBottom:15

        

    },
    btn:{
        backgroundColor:'#F8F8FB',
        height:34,
        // width:"18%",
        width:40,
        borderRadius:2,
        alignItems:"center",
        justifyContent:"center",
        marginTop:2
      },
      textIcon:{
     fontWeight:'800',
     fontSize:20,
    color:COLORS.ORANGE
      }
})




export default function SearchRestaurantPage(){

return (
<View style={styles.container}>

    <View style={styles.header}>
    
    <TouchableOpacity
    activeOpacity={0.7}
    style={styles.btn}
    onPress={()=>{
        alert('back to previous page')
    }}

    >
        
        <Icon
  name="left"
  backgroundColor="yellow"
  style={styles.textIcon}
  />

    </TouchableOpacity>

    <TextInput 
    style={styles.textSearchInput}
    placeholder={'Search...'}
    ></TextInput>
    </View>


    <View
    style={{
    borderBottomColor: '#F8F8FB',
    borderBottomWidth: 2,
    paddingTop:10,
  }}
/>


<View>
    <Text style={styles.nearByText}>NearBy Restaurant </Text>
</View>


<SafeAreaView>
<ScrollView style={styles.scrollbal}>
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />



</ScrollView>
</SafeAreaView>

    {/* seach result */}



 {/* bottom */}

 {/* <BottomNavigation style={styles.foooter}/> */}
</View>
);
    
}