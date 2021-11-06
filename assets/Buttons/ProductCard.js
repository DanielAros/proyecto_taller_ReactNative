import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ProductCard = (props) =>{
    console.log(window.innerHeight)
    return(
            // <TouchableOpacity  style={{width: '100%', height:'100%', borderWidth: 1}}>
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: props.item.imgUrl }} />
                <View style={styles.infoContainer}>
                    <Text style={styles.text}> {props.item.name} </Text>
                    <Text style={styles.text}> {props.item.cost} $ mxn</Text>
                </View>
            </View>
            // </TouchableOpacity>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        width: wp('82%'),
        height: hp('20%'),
        // flexWrap: 'wrap',
        flexDirection: 'row',
        // backgroundColor:'red',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width:'50%',
        height: '100%',
        resizeMode: 'contain'
    },

    text : {
        fontFamily:'Proxima-nova',
        fontSize:17
    },

    infoContainer:{
        width:'50%',
        height: '100%',
        borderWidth: 1,
        padding: 5
    }
});
