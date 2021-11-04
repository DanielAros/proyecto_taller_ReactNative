import React from "react";
import {StyleSheet, View, TextInput, Button, Alert} from "react-native";
import {useDispatch} from "react-redux";
import * as authAction from "../store/actions/authAction";


export const LogOutScreen = (props) =>{
    
    const dispatch = useDispatch();
    const onClick = () =>{
        try {
            dispatch(authAction.logOut())
        }catch(e){
            Alert.alert("Error", e.toString(), [{text:'ok'}])
        }
    }

    return(
        <View style={styles.container}>
            <Button title={"LogOut"} onPress={onClick}/>
        </View>
    )
}

//export default LogOutScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})