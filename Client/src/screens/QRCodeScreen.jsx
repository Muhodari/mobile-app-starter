import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Pressable,
    StatusBar
  } from "react-native";
  import React from "react";
  import { FontAwesome } from "@expo/vector-icons";
  const QRCodeScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={{ marginTop: 8 }}>
            <View
              style={{
                marginTop: 100,
                width: "100%",
                flexDirection: "row",
                borderRadius: 14,
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                paddingVertical: 8,
              }}
            >
              <FontAwesome
                name="search"
                size={20}
                color="#F7941D"
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <TextInput
                placeholderTextColor="grey"
                value=""
                placeholder="Search your preferred restaurent"
                style={{ flex: 1 }}
                onPressIn={() => navigation.navigate("TabNavigation")}
              />
            </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Or</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <FontAwesome name="qrcode" size={100} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, opacity: 0.6 }}>
              Scan, Pay & Enjoy !
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default QRCodeScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#F7941D",
      // flexDirection:'column',
      // alignItems: 'center',
      //justifyContent:'space-around'
    },
  });