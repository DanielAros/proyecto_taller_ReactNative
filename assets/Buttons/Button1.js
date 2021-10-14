import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from 'react-native';

const Button1 = ({text}) => {
    // console.log(props)
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button1;

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: '#3483fa',
        width: '100%',
        height: 40,
        // marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Proxima-nova',
        fontSize: 18
    }
})