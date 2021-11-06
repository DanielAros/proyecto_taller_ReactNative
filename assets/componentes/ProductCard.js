import React from "react";
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from "react-native";

const ProductCard = (props) =>{
    console.log(props.productInfo)
    const goToDetails = () =>{
        props.navigation.navigate('ProductDetails',{productInfo:props.productInfo});
    }

    return(
        <View style={styles.conteiner}>
            <TouchableOpacity onPress={goToDetails}>
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
                        <Text style={styles.textoTachado}>
                            $ {props.productInfo.precioSinDescuento}
                        </Text>
                        <Text style={{fontSize: 16, fontFamily: 'Proxima-nova'}}>
                            $ {props.productInfo.cost} <Text style={styles.textDescuento}>{props.productInfo.porcentaje} OFF</Text>
                        </Text>
                        <Text style={{color: 'green', fontFamily: 'Proxima-nova',}}>
                            12x $ {props.productInfo.mesesInteres} sin interés
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.textDescription}>{props.productInfo.description}</Text>
                        <Text style={styles.textMercadoLibre}>por Mercado Libre Electronico</Text>
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
        height: Dimensions.get('window').height*.385,
        //height: '30%',
        backgroundColor:'white',
        //paddingTop: 5,
        //borderWidth: 0.35,
        //backgroundColor: 'blue'
    },
    containerImg:{
        width: '100%',
        height: Dimensions.get('window').height*.16,
        //backgroundColor: 'red'
    },
    styleImg:{
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    containerInfo:{
        width: '100%',
        height:'100%',
        //backgroundColor: 'pink',
        padding: 3,
    },
    cardOferta:{
        width: '70%',
        height: '5%',
        backgroundColor: '#3483fa',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop:5,
    },
    textOferta:{
        fontFamily: 'Proxima-nova',
        color: 'white',
    },
    textoTachado:{
        textDecorationLine: 'line-through',
        fontSize: 11,
        color: 'grey',
        fontFamily: 'Proxima-nova',
    },
    textDescuento:{
        color: 'green',
        fontSize: 14,
        fontFamily: 'Proxima-nova',
    },
    textDescription:{
        fontSize: 14,
        fontFamily: 'Proxima-nova',
        textAlign: 'justify',
        color: 'grey'
    },
    textMercadoLibre:{
        color: 'grey',
        fontSize: 11,
        fontFamily: 'Proxima-nova',
    }
});
