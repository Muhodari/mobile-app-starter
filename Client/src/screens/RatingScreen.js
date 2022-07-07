import { SafeAreaView, View , Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { useState } from "react";
import Stars from "../components/Stars";
import axios from "axios";

const token ="eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwic3ViIjoiMSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiQWRtaW4gVXNlciAwNzg4NjgzMTExIiwidXNlcm5hbWUiOiIwODgyODMiLCJtb2JpbGUiOm51bGwsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiYWNjb3VudE5vbkxvY2tlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlfSwiaWF0IjoxNjU0ODA4ODEzLCJleHAiOjE2NTQ4OTUyMTN9.3k1xM_Apf1U0h3GCCCapeJNRpwTAQJz9DnY34oYtQjiskFgRqRmKnGR3KsrYLSy23OJTC9CSa_1NYeQuzhM-iw"


export default function RateScreen() {
    const [defaultRating, setdefaultRating] =useState(0);
    const [stars, setStarts] =useState([1,2,3,4,5]);
    const [thanksText, setThanksText] =useState(false);
return (


<SafeAreaView style={styles.container}>
<View>
<Text style={[styles.text]}>Yayy!</Text>
<Text style={styles.text}>We value all feeback</Text>
<Text style={styles.text}>please rate your experience below:</Text>
</View>

<View style={styles.ratings}>
{stars.map((number, index)=>(

<TouchableOpacity
activeOpacity={0.7}
key={number}
onPress={()=>{
    setdefaultRating(number)


axios.post(
"http://196.223.240.154:8099/supapp/api/service-rating",
{  reviewComment: " system",
   score:number,
   serviceProvider:4,
   status: "PENDING",
   userId:1
},
{
    headers:{
        'Authorization':`Bearer ${token}`
    }
})
.then((result)=>{
    console.log(result);
    if(result.data.message=="Record deleted"){
     setThanksText(true)
    }
     
    
  }).catch(error=>{
      console.log("failed to post");
  })

        
    }}
>


<Stars
key={number}
rating={defaultRating}


color={
    number <= defaultRating
 ? '#f7941d' : '#ffffff'}
/>



</TouchableOpacity>

))}


</View>

<View style={{width: 200, textAlign: "center"}}>
{/* <Text style={[styles.text]}>{defaultRating+'/'+5}</Text> */}
</View>

<View>
<Text style={[styles.text]}>
{thanksText  ==true
?"Thank You for helping us\nImprove our service !"
:""
}
</Text>
</View>

{/* <FooterImage /> */}

<View style={styles.mb}>
     <Image source={require('../../assets/yellow-logo.png')} style={[styles.image,{margin:0}]} />
     </View>



</SafeAreaView>
);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        height: "100%",
        backgroundColor: "black",
        flexDirecton: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    text: {
        color: "#f7941d",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },    
ratings: {
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
margin: 20,
},
mb: {
    marginBottom: '30%',
},
image: {
    height: 67,
    margin: 'auto',
    resizeMode: 'contain',
    width: 220
},
});