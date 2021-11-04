import { NavigationContainer } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from 'react-native';

const Button1 = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button1;

const styles = StyleSheet.create({
    button: {
        borderRadius: 7,
        backgroundColor: '#3483fa',
        width: '100%',
        height: '100%',
        // marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Proxima-nova',
        fontSize: hp('2.3%'),
    }
})