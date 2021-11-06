import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default Card = (props, onPress) => {
    const redirectOffers = () => {
        props.navigation.navigate('OffersScreen')
    }
    // console.log(props)
    return (
        // 
        <View style={styles.cont}>
            <TouchableOpacity style={styles.touch} onPress={ props.cardData.id === 2 ? redirectOffers : null }>
                <View style={styles.iconCont}>
                    {props.cardData.obj}
                </View>
            </TouchableOpacity>
            <View style={styles.textCont}>
                <Text style={styles.text}>{props.cardData.text}</Text>
            </View>
            </View>
        // 
        
    )
}

const styles = StyleSheet.create({
    cont: {
        // borderWidth: 1,
        width: Dimensions.get('window').width < 400 ? '18%' : '20%',
        height: hp('13%'),
        // backgroundColor: 'red',
        // padding: 10,
        alignItems: 'center',
        marginRight: Dimensions.get('window').width < 400 ? wp('1%') : null,
        marginLeft: Dimensions.get('window').width < 400 ? wp('1%') : null
    },

    iconCont: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    touch: {
        height: '60%',
        width: '80%',
        // borderWidth: 1,
        marginTop: 10
    },
    textCont: {
        // borderWidth: 1,
        width: '100%',
        height: '40%',
        margin: 5,
        alignItems:'center'
    },
    text: {
        color: '#636e72',
        fontFamily: 'Proxima-nova',
        fontSize: hp('1.5%'),
        textAlign:'center'
    }
})