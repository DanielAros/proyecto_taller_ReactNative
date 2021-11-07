import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Dimensions, Alert, ScrollView} from 'react-native';
import {useDispatch} from "react-redux";
import * as cartAction from '../store/actions/cartAction'
import {StateBar} from '../assets/componentes/StateBar'
import { Feather, Octicons, Entypo, AntDesign  } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Button3 from '../assets/Buttons/Button3'
import Button1 from '../assets/Buttons/Button1';

export const DetailsScreen = (props) => {
    
    const [active, setActive] = useState('0');

    console.log(active.activeSlide)

    const { productInfo } = props.route.params
    // console.log(props)
    const dispatch = useDispatch();
    const addToCart = () =>{
        try{
            dispatch(cartAction.addToCart(productInfo))
            Alert.alert("Aviso", "Se ha agregado al carrito", [{text:'Ok'}])
        }catch(e){
            console.log(e)
        }
    }

    const _renderItem = ({ item }) => {
        // console.log(item)
        return (
            <View style={{
                backgroundColor:'#fff',
                borderRadius: 10,
                height: hp('20%'),
                width: wp('90%'),
                alignItems: 'center',
                justifyContent:'center',
                // borderWidth:1
            }}
            >
                <Image
                    source={{ uri: item }}
                    style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'contain',
                        borderRadius: 10,
                    }}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>

            <StateBar
                icon={
                    <Feather
                        name="menu"
                        size={Dimensions.get('window').width < 400 ? 20 : 30}
                        color="black"
                    />
                }
                title="Producto"
            />
            <View style={styles.locatContainer}>
                <View style={styles.location}>
                    <Octicons name="location" size={Dimensions.get('window').width < 400 ? 10 : 17} color="black" />
                </View>
                <Text style={styles.send}>Enviar a Hugo Aviles</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.newText}>Nuevo   |   300 vendidos</Text>
                <Text style={styles.titleText}>{productInfo.name}</Text>
                <View style={styles.starsContainer}>
                    <Entypo name="star" size={13} color="#3483fa" />
                    <Entypo name="star" size={13} color="#3483fa" />
                    <Entypo name="star" size={13} color="#3483fa" />
                    <Entypo name="star" size={13} color="#3483fa" />
                    <Entypo name="star" size={13} color="#3483fa" />
                    <Text style={styles.startText}> (12)</Text>
                </View>
                <Text style={styles.recomendText}>1° Recomendado</Text>
            </View>
            <View style={styles.carrouselContainer}>
                <Carousel
                    layout={'default'}
                    data={productInfo.imgArray}
                    renderItem={_renderItem}
                    itemWidth={wp('90%')}
                    sliderWidth={wp('90%')}
                        onSnapToItem={(index) => { setActive({ activeSlide: index }) }}
                />
                {/* {console.log(productInfo.imgArray.index)} */}
                
                
            </View>
                
            <View style={styles.paginationCont}>
                <Pagination
                    dotsLength={productInfo.imgArray.length}
                    activeDotIndex={!active.activeSlide ? 0 : active.activeSlide}
                    containerStyle={{
                        width: 5,
                    }}
                    dotStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: '#3483fa',
                    }}
                    inactiveDotStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: '#b2bec3'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
            <View style={styles.productInfoCont}>
                <Text>{productInfo.precioSinDescuento}</Text>
            </View>
            
            <View style={styles.cantidadTextCont}>
                <View style={{flexDirection:'row', alignItems: 'center'} }>
                <Text style={styles.cantidadText}>
                    Cantidad: {productInfo.cantidad} 
                </Text>
                    <Text style={{fontFamily:'Proxima-nova', color:'#636e72', fontSize:hp('1.6%')}}> ({ productInfo.cantidad * 5} disponibles)</Text>
                </View>
                
                <AntDesign name="right" size={Dimensions.get('window').width < 400 ? 9 : 15} color="#3483fa" />
            </View>

            <View style={styles.buttonCont}>
                <Button1 text="Comprar ahora" onPress={null}/>
            </View>

            <View style={styles.buttonCont}>
                <Button3 text="Agregar al carrito" onPress={addToCart}/>
            </View>
        </ScrollView>
</View>

        
    )
}

// export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ScrollView: {
        backgroundColor: 'black',
    },
    containerImg:{
        width: wp('100%'),
        height: hp('25%'),
        borderWidth: 1
    },
    locatContainer: {
        width: wp('100%'),
        backgroundColor: "#f1c40f",
        flexDirection: 'row',
        height: hp('4%'),
        alignItems:'center'
    },
    send: {
        fontSize: hp('1.7%'),
        fontFamily: 'Proxima-nova'
    },
    location: {
        // borderWidth: 1,
        marginLeft: 20,
        marginRight: 5,
        height: '90%',
        width: '5%',
        alignItems: 'center',
        justifyContent:'center'
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '24%',
        marginTop: hp('1%')
    },
    textContainer: {
        width: wp('90%'),
        justifyContent: 'center',
        margin: hp('2%'),
    },
    newText: {
        color: '#636e72',
        marginBottom: hp('1%'),
        fontFamily: 'Proxima-nova',
        fontSize: hp('1.6%')
    },
    titleText: {
        fontFamily: 'Proxima-nova',
        fontSize: hp('2.3%')
    },
    startText: {
        color: '#636e72',
        fontSize: hp('1.6%')
    },
    recomendText: {
        color: '#3483fa',
        marginTop: hp('1%'),
        fontFamily: 'Proxima-nova',
        fontSize: hp('1.6%')
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    carrouselContainer: {
        width: wp('100%'),
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1
    },
    paginationCont: {
        height: hp('2%'),
        width: wp('90%'),
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCont: {
        marginTop: hp('1%'),
        width: wp('90%'),
        height: hp('5%')
    },
    cantidadTextCont: {
        width: wp('90%'),
        height: hp('5%'),
        backgroundColor: '#dfe6e9',
        borderRadius: 10,
        marginBottom: hp('2%'),
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
        flexDirection:'row'
    },
    cantidadText: {
        fontFamily: 'Proxima-nova',
        fontSize: hp('2%'),
        // borderWidth: 1,

    },
    productInfoCont: {
        height: hp('40%'),
        width: wp('90%'),
        borderWidth: 1,
        marginBottom: hp('1%')
    }
})