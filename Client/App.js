
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView ,SafeAreaView } from 'react-native';
import Navigator from './src/components/navigation/Navigator.js';
import Homepage from './src/screens/HomePage.js'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SignIn from './src/screens/SignIn.js';

import PaymentSuccess from './src/screens/PaymentSuccess.js';
import RateScreen from './src/screens/RatingScreen.js';
import SearchRestaurantPage from './src/screens/SearchRestaurantPage.js';
import { SignInScreen } from './src/screens/SignInScreen.jsx';
import { Menu } from './src/screens/Menu.jsx';

export default function App() {

  return (

  <NavigationContainer>
    <Navigator/>
  </NavigationContainer>  
  

  );
}

