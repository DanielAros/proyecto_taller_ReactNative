import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SimpleLineIcons, Ionicons, Feather, Octicons } from '@expo/vector-icons'; 
import Carousel from 'react-native-snap-carousel';
import { IMAGES } from '../Data/imgCarrousel';
import { CARDATA } from '../Data/CardData';
import Card from '../assets/Buttons/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ARTICULOS } from '../Data/dummyData';
import ProductCard from '../assets/Buttons/ProductCard';


export const HomeScreen = (props) => {

    

    const redirectCart = () => {
        props.navigation.navigate('CartScreen')
    }

    const _renderItem = ({ item }) => {
        return (
            <View style={{
                backgroundColor:'floralwhite',
                borderRadius: 10,
                height: hp('20%'),
                width: wp('90%'),
                // borderWidth:1
            }}
            >
                <Image
                    source={{ uri: item.url }}
                    style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'cover',
                        borderRadius: 10,
                    }}
                />
            </View>
        )
    }

    const _renderItem2 = (props) => {
        // console.log(window.innerHeight)
        return (
            <View style={{
                flex: 1,
                padding: 10,
                height: '100%',
                width: '100%',
            }}>

                <View style={{
                    height: '100%',
                    width: '100%',
                }}>
                <FlatList
                    data={[props.item]}
                    showsVerticalScrollIndicator={true} //Explicar esto
                    keyExtractor={item => item.id.toString()}
                    renderItem={itemData =>(
                        <ProductCard
                            productInfo={props.item}
                            // onPress={redirect}
                            // imgUrl={itemData.item.url}
                            // name={itemData.item.name}
                            // cost={itemData.item.cost}
                            {...props}
                        />
                    )}
                />

            </View>
        </View>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.buscContainer}>

                <View style={styles.menuIcon}>
                    <TouchableOpacity>
                        <Feather name="menu" size={Dimensions.get('window').width < 400 ? 20 : 30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.textInput}>
                    <View style={styles.iconLupa}>
                        <SimpleLineIcons name="magnifier" size={Dimensions.get('window').width < 400 ? 10 : 15} color="#b2bec3" />
                    </View>
                    <TextInput
                        style={styles.textInputCont}
                        placeholder='Buscar en Mercado libre'
                    />
                </View>
                
                <View style={styles.cartIcon}>
                    <TouchableOpacity onPress={redirectCart}>
                        <Ionicons name="cart-outline" size={Dimensions.get('window').width < 400 ? 25 : 30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.locatContainer}>
                <View style={styles.location}>
                    <Octicons name="location" size={Dimensions.get('window').width < 400 ? 10 : 17} color="black" />
                </View>
                <Text style={styles.send}>Enviar a Hugo Aviles</Text>
            </View>

            <View style={styles.carrouselContainer}>
                <Carousel
                    layout={'default'}
                    data={IMAGES}
                    renderItem={_renderItem}
                    itemWidth={wp('90%')}
                    sliderWidth={wp('90%')}
                />
            </View>

            <View style={styles.offerSectionContainer}> 
                <FlatList
                    data={CARDATA}
                    // showsVerticalScrollIndicator={true} //Explicar esto
                    keyExtractor={item => item.id.toString()}
                    // horizontal={true}
                    numColumns={5}
                    renderItem={itemData => (
                        <Card
                            cardData={itemData.item}
                            {...props}
                        />
                    )}
                />
            </View>

            <View style={styles.addContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_844736-MLA44550459585_012021-OO.jpg' }} />
            </View>

            <View style={styles.recentViewedContainer}>

                <View style={styles.textRecentCont}>
                    <Text>Visto Recientemente</Text>
                </View>
                <Divider style={{marginHorizontal:1, marginBottom: 12}}/>

                {/* <View style={styles.carrouselContainer2}> */}
                    <Carousel
                        layout={'default'}
                        data={ARTICULOS}
                        renderItem={_renderItem2}
                        itemWidth={wp('100%')}
                        sliderWidth={wp('100%')}
                    />
                    
                {/* </View> */}

                <View>
                    <Text>Historial de Navegacion</Text>
                    <View>
                        {/* Icono de la flecha */}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        flex: 1,
        backgroundColor: '#dfe6e9',
        alignItems:'center'
    },
    buscContainer: {
        height: hp('7%'),
        width: wp('100%'),
        backgroundColor: "#f1c40f",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textInput: {
        width: '75%',
        height: Dimensions.get('window').width < 400 ? '70%' : '60%',
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    textInputCont: {
        padding: wp('2%'),
        fontFamily: 'Proxima-nova',
        fontSize: Dimensions.get('window').width < 400 ? hp('2.5%') : hp('1.8%'),
        width: '85%',
        height: '100%',
        // borderWidth: 1
    },
    iconLupa: {
        height: '100%',
        width: '5%',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartIcon: {
        // borderWidth: 1,
        height: '60%',
        width: '7%',
        marginLeft: wp('.5%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuIcon: {
        // borderWidth: 1,
        height: '60%',
        width: '7%',
        marginRight: wp('2%'),
        alignItems: 'center',
        justifyContent: 'center'
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
    carrouselContainer: {
        width: wp('100%'),
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('2%'),
    },
    offerSectionContainer: {
        marginTop: hp('1.5%'),
        height: hp('13%'),
        width: wp('100%'),
        alignContent: 'center',
        justifyContent: 'center',
        // borderWidth: 1
    },
    addContainer: {
        width: wp('90%'),
        height: Dimensions.get('window').height < 800 ? hp('13%') : hp('15%'),
        // borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:  Dimensions.get('window').height < 800 ? 'cover' : 'contain',
        borderRadius: 10
    },
    recentViewedContainer: {
        // borderWidth: 1,
        borderRadius: 10,
        marginTop: hp('2%'),
        height: hp('35%'),
        width: wp('90%'),
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        padding: wp('2%')
    },
    textRecentCont: {
        // borderWidth: 1,
        width: '100%',
        height: '15%'
    },
    carrouselContainer2: {
        width: '100%',
        height: '60%',
        borderWidth: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})

// export default HomeScreen;