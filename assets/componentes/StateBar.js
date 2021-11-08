import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const StateBar = ({icon, title}) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.arrowIconCont}>
                <TouchableOpacity>
                    { icon }
                </TouchableOpacity>
            </View>
            <View style={styles.titleCont}>
                <Text style={styles.title}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        backgroundColor: '#f1c40f',
        height: hp('7%'),
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },

    arrowIconCont: {
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '13%'
    },

    titleCont: {
        // borderWidth: 1,
        height: '100%',
        width: '87%',
        justifyContent: 'center',
        padding: 10
    },

    title: {
        fontSize: hp('2.5%'),
        fontFamily: 'Proxima-nova'
    }
})