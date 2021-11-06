import React from "react";
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from "react-native";

const ProductCard = (props) =>{
    console.log(props.productInfo)
    return(
        <View style={styles.conteiner}>
            <TouchableOpacity>
                <View style={styles.containerImg}>
                    <Image style={styles.styleImg}
                        source={{uri: props.productInfo.imgUrls}}
                    />
                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.cardOferta}>
                        <Text style={styles.textOferta}>OFERTA DEL DÍA</Text>
                    </View>
                    <View>
                        <Text>$ {props.productInfo.precioSinDescuento}</Text>
                        <Text>$ {props.productInfo.cost} <Text>{props.productInfo.porcentaje} OFF</Text></Text>
                        <Text>12x $ {props.productInfo.mesesInteres} sin interés</Text>
                    </View>
                    <View>
                        <Text>{props.productInfo.description}</Text>
                        <Text>por Mercado Libre Electronico</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    conteiner: {
        width: Dimensions.get('window').width*.5,
        height: Dimensions.get('window').height*.42,
        //height: '30%',
        backgroundColor:'white',
        //paddingTop: 5,
        borderWidth: 0.35,
        //backgroundColor: 'blue'
    },
    containerImg:{
        width: '100%',
        height: Dimensions.get('window').height*.18,
        backgroundColor: 'red'
    },
    styleImg:{
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    containerInfo:{
        width: '100%',
        height:'100%',
        backgroundColor: 'pink'
    },
    cardOferta:{
        width: '70%',
        height: '5%',
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOferta:{
        fontFamily: 'Proxima-nova',
        color: 'white',
    }
});
