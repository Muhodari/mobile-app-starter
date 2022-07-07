import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Pressable,
    ScrollView,
    ActivityIndicator
  } from "react-native";
  import React,{useState} from "react";
  import { Ionicons, Fontisto } from "@expo/vector-icons";
  import { StatusBar } from "expo-status-bar";
  import { useDispatch } from "react-redux";
  import * as orderActions from "../store/actions/order";
  
  const Checkout = ({ navigation, route }) => {
    const { totalPrice,orderItems  } = route.params;
    const [clicedType, setClickedType] = useState({});
    const [isTypeSelected, setIsTypeSelected] = useState(true);
  
    const paymentType =[
      {
        name: "Cash",
        image: require("./../assets/cash.png"),
        type: "mobile & cash",
        telecom:""
      }
      ,
      {
        name: "MTN Mobile money",
        image: require("./../assets/mtn.png"),
        type: "mobile & cash",
        telecom:"MTN"
      }
      ,
      {
        name: "Card",
        image: require("./../assets/mtn.png"),
        type: "card",
        telecom:""
      }
      ,
      {
        name: "TIGO cash",
        image: require("./../assets/mtn.png"),
        type: "mobile & cash",
        telecom:"TIGO"
      }
      ,
      {
        name: "AIRTEL money",
        image: require("../assets/aitel.png"),
        type: "mobile & cash",
        telecom:"AIRTEL"
      }
    ]
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState(null);
  
    const dispatch = useDispatch();
    const handleSubmit= async(clickedType) =>{
      
      let data = {};
        if (clickedType.telecom !== "") {
          
         data= {
            msisdn: "250786621407",
            orderInfo: 2,
            regChannel: "USSD",
            telecom: clickedType.telecom,
          }
  
          try {
           
            await dispatch(orderActions.paywithmomo(data));
              navigation.navigate("paySuccess")
          } catch (err) {
            if (err.response) {
              setLoading(false);
            } else {
              setErrortext(err.message);
              setLoading(false);
            }
          }
        }else{
          data={
            orderInfo: 2,
            regChannel: "USSD"
          }
          if (clickedType.name=="Card") {
            try {
              await dispatch(orderActions.paywithcard(data));
                navigation.navigate("paySuccess")
            } catch (err) {
              if (err.response) {
                setLoading(false);
              } else {
                setErrortext(err.message);
                setLoading(false);
              }
            }
          }else{
            try {
              await dispatch(orderActions.paywithcash(data));
                navigation.navigate("paySuccess")
            } catch (err) {
              if (err.response) {
                setLoading(false);
              } else {
                setErrortext(err.message);
                setLoading(false);
              }
            }
          }
        }
    }
  
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={'#F7941D'} />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" />
        <View style={styles.header}>
          <View style={styles.backContainer}>
            <Ionicons name="chevron-back" size={34} color="#25d482" />
          </View>
          <View style={styles.headerContentContainer}>
            <View style={styles.headerContentContainer}>
              <Text style={styles.bigText}>Checkout</Text>
              <Image
                source={require("../assets/One_credit_card.png")}
                style={styles.cardStyle}
              />
            </View>
            <View>
              <Text style={[styles.bigText, { color: "#25d482" }]}>
                Frw {totalPrice}
              </Text>
              <Text style={{ color: "#ccc" }}>Including VAT (18%)</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#25d482",
            borderRadius: 10,
            width: "90%",
            alignSelf: "center",
            height: 40,
            alignItems: "center",
            position: "absolute",
            marginTop: "40%",
          }}
        >
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
              width: "50%",
              height: 55,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
  
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Credit Card</Text>
          </View>
          <View
            style={{
              width: "50%",
              height: 55,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Mobile & Cash
            </Text>
          </View>
        </View>
        <View style={{marginTop:'10%'}}>
          <ScrollView style={{height:350}}>
          {paymentType.map((item, index) => {
            return (
              <Pressable
              key={index}
              onPress={() => {setClickedType(item); setSelectedAddressIndex(index); setIsTypeSelected(false) }}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 40,
                backgroundColor: selectedAddressIndex == index? "#ccc" : "#fff",
                alignItems: "center",
                marginHorizontal:20
              }}
            >
              <Image source={item.image} />
              <Text>{item.name}</Text>
            </Pressable>
            );
          })}
          </ScrollView>
          
  
          <View style={{ margin: 20 }}>
            <Text style={{ textAlign: "center", fontSize: 14, color: "#ccc" }}>
              We will send you an order details to your email after the successful
              payment
            </Text>
            <Pressable  disabled={isTypeSelected} onPress={()=>handleSubmit(clicedType)}>
              <View
                style={{
                  backgroundColor: isTypeSelected? "#ccc": "#25d482" ,
                  flexDirection: "row",
                  justifyContent: "center",
                  height: 50,
                  alignItems: "center",
                  borderRadius: 15,
                  marginTop: 10,
                }}
              >
                <Fontisto name="locked" size={20} color="white" />
                <Text
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    fontWeight: "bold",
                    marginLeft: 9,
                  }}
                >
                  Pay for the order
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Checkout;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop: 24,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header: {
      padding: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
  
      elevation: 15,
    },
    backContainer: {
      backgroundColor: "#f8f8fb",
      width: 40,
      alignItems: "center",
      borderRadius: 5,
    },
    headerContentContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 20,
    },
    cardStyle: {
      width: 20,
      height: 20,
      alignSelf: "center",
      marginLeft: 5,
    },
    bigText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });