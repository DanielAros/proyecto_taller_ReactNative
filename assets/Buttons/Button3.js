import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Button3 = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button3;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: "#CADAED",
        width: "100%",
        height: "100%",
        // marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        // opacity: 0.7
    },
    buttonText: {
        color: "#3483fa",
        fontFamily: "Proxima-nova",
        fontSize: hp("2.3%"),
        opacity: 1,
        position: "absolute",
    },
});
