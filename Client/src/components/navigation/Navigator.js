import React,{ useEffect, useState } from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';

import LoginScreen from '../../screens/Login/LoginScreen'
import SignupScreen from '../../screens/Singup/SignupScreen';
import DashbordScreen from "../../screens/Dashbord/Dashbord";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Navigator() {
    return <AppNavigator />;
}



function AuthNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name="Splash" component={DashbordScreen} />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={SignupScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

const Tabs= createBottomTabNavigator();

 function AppNavigator() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    
    useEffect(() => {
       async function getToken() {
      const token = await AsyncStorage.getItem('token');
            if (token) {
                setIsAuthenticated(true);
            }
        }
        getToken();
    },[]);

    if(isAuthenticated)

    return (
        <Tabs.Navigator
            initialRouteName="Search"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 80,
                    paddingBottom: 10,
                    padding: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginHorizontal: 5,
                    position: 'absolute',
                    borderColor: 'white',
                    elevation: 10,
                },
                tabBarButton: (props) => {
                    return (
                        <View {...props}>
                            <View
                                style={{
                                    minWidth: 50,
                                    minHeight: 50,
                                    borderRadius: 10,
                                    backgroundColor: props.accessibilityState
                                        .selected
                                        ? '#F6E3DB'
                                        : 'white',
                                }}
                            >
                                <TouchableOpacity {...props} />
                            </View>
                        </View>
                    );
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#F7941D',
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
                component={DashbordScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="bell-badge-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Notification"
                component={LoginScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="line-scan"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Scan"
                component={SignupScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="progress-clock"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Clock"
                component={DashbordScreen}
            />
 
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Cart"
                component={LoginScreen}
            />
        </Tabs.Navigator>
    );

    return <AuthNavigator/>;
}
