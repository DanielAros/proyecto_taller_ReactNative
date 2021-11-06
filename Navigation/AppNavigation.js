import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons, Ionicons, Feather, Octicons } from '@expo/vector-icons'; 

import {
    CartScreen,
    DetailsScreen,
    HomeScreen,
    InitLoginScreen,
    InitPassScreen,
    InitUserScreen,
    OffersScreen,
    LogOutScreen
} from '../Screens/index'
import iconSet from '@expo/vector-icons/build/Fontisto';
import { TextInput } from 'react-native-gesture-handler';


// import InitLoginScreen from '../Screens/InitLoginScreen';
// import InitUserScreen from '../Screens/InitUserScreen';
// import InitPassScreen from '../Screens/InitPassScreen';

function LogoTitle() {
    return (
        <View style={styles.container}>
            <TextInput placeholder={"Hola"} style={styles.styleInput}/>
            <Ionicons name="cart-outline" size={30} color="black" />
        </View>
    );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const MyDrawer = () =>{
    return (
        // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{ headerShown: false, headerTitle: '' , headerShadowVisible: false, headerStyle: {
                    backgroundColor: '#f1c40f',
                },}}    
            />
            <Stack.Screen name="LogOut" component={LogOutScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen}
                options={{headerShown:false, headerTitle:'', headerShadowVisible: false}}
            />
            <Stack.Screen name="OffersScreen" component={OffersScreen}
                options={{headerShown:true, headerTitle:'Ofertas', headerShadowVisible: false, headerStyle: {
                    backgroundColor: '#f1c40f',
                },}}
            />
            <Stack.Screen name="ProductDetails" component={DetailsScreen}
                options={{headerTitle:'Producto',headerStyle: {
                    backgroundColor: '#f1c40f',
                },}}
            />
        </Stack.Navigator>
        // </NavigationContainer>
        
        
    );
}

export const StackLogin = () => {

    

    return (
        // <NavigationContainer>
        
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
                    options={{headerShown:false, headerTitle:'', headerShadowVisible: false}}
                />
                <Stack.Screen name="CartScreen" component={CartScreen}
                    options={{headerShown:false, headerTitle:'', headerShadowVisible: false}}
                />
            </Stack.Navigator>
        // </NavigationContainer>
            
    )
}

//export default AppNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    styleInput:{
        width: '50%',
        height: 30,
        borderWidth: 1,
    },
    cartIcon: {
        // borderWidth: 1,
        height: '60%',
        width: '7%',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
})