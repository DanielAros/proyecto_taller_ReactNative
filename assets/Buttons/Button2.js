import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Button2 = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button2;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        // marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#3483fa',
        fontFamily: 'Proxima-nova',
        fontSize: hp('2.3%')
    }
})