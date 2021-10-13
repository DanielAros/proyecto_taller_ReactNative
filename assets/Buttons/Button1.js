import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from 'react-native';

const Button1 = ({ text }) => {
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
        borderRadius: 10,
        backgroundColor: '#3483fa',
        width: Dimensions.get('window').width *.85,
        height: 50,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Proxima-nova',
        fontSize: 23
    }
})