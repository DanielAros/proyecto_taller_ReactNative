import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
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

    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
        </View>
    );

    return(
        <NavigationContainer>
            <MyStatusBar
                // style={'au}to'}
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
                    options={{headerShown:false, headerTitle:'', headerShadowVisible: false}}
                />
                <Stack.Screen name="CartScreen" component={CartScreen}
                    options={{headerShown:false, headerTitle:'', headerShadowVisible: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export default AppNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
})