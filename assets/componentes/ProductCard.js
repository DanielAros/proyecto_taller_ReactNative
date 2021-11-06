import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ProductCard = (props) =>{
    // console.log(window.innerHeight)
    var of = Math.floor(props.item.cost / 12)
    return(
            // <TouchableOpacity  style={{width: '100%', height:'100%', borderWidth: 1}}>
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: props.item.imgUrls}} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}> {props.item.name} </Text>
                <Text style={styles.text}>$ {props.item.cost} mxn</Text>
                <Text style={styles.pagos}> 12 x {of} msi</Text>
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
        width:'40%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10
    },

    title: {
        fontFamily: 'Proxima-nova',
        fontSize: hp('2%'),
        marginBottom: hp('1%')
    },

    text : {
        fontFamily:'Proxima-nova',
        fontSize: hp('3%'),
        marginBottom: hp('1%')
    },

    pagos: {
        fontFamily:'Proxima-nova',
        fontSize: hp('1.5%'),
        color: 'green',
        marginBottom: hp('1%')
    },

    infoContainer:{
        width:'60%',
        height: '100%',
        // borderWidth: 1,
        padding: 5,
        justifyContent: 'center'
    }
});
