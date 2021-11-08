import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { StackLogin, MyDrawer } from "./AppNavigation";

const LoginValidation = (props) => {
    const isAuth = useSelector((state) => state.auth.login);

    /*    if(!isAuth){
        fetchCookie(){

        }
    }*/

    const MyStatusBar = ({ backgroundColor, ...props }) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <SafeAreaView>
                <StatusBar
                    translucent
                    backgroundColor={backgroundColor}
                    {...props}
                />
            </SafeAreaView>
        </View>
    );

    return (
        <NavigationContainer>
            <MyStatusBar backgroundColor="#f1c40f" />
            {isAuth && <MyDrawer />}
            {!isAuth && <MyDrawer />}
        </NavigationContainer>
    );
};

export default LoginValidation;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
});
