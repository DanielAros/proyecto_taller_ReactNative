import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {
    CartScreen,
    DetailsScreen,
    HomeScreen,
    InitLoginScreen,
    InitPassScreen,
    InitUserScreen,
    OffersScreen
} from '../Screens/index'


// import InitLoginScreen from '../Screens/InitLoginScreen';
// import InitUserScreen from '../Screens/InitUserScreen';
// import InitPassScreen from '../Screens/InitPassScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <StatusBar
                style={'auto'}
                backgroundColor="#f1c40f"
            />
            <Stack.Navigator >
                <Stack.Screen name="LoginScreen" component={InitLoginScreen}
                    options={{headerShown:false}}
                />
                <Stack.Screen name="UserScreen" component={InitUserScreen}
                    options={{headerShown:true, headerTitle:'', headerShadowVisible: false}}
                />
                <Stack.Screen name="PassScreen" component={InitPassScreen}
                    options={{headerShown:true, headerTitle:'', headerShadowVisible: false}}
                />
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                    options={{headerShown:true, headerTitle:'', headerShadowVisible: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;