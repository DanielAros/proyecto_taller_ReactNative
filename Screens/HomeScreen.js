import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SimpleLineIcons, Ionicons, Feather, Octicons } from '@expo/vector-icons'; 
import Carousel from 'react-native-snap-carousel';
import { IMAGES } from '../Data/imgCarrousel';
import { CARDATA } from '../Data/CardData';
import Card from '../assets/Buttons/Card';

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

    return (
        <View style={styles.container}>

            <View style={styles.buscContainer}>

                <View style={styles.menuIcon}>
                    <TouchableOpacity>
                        <Feather name="menu" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.textInput}>
                    <View style={styles.iconLupa}>
                        <SimpleLineIcons name="magnifier" size={15} color="#b2bec3" />
                    </View>
                    <TextInput
                        style={styles.textInputCont}
                        placeholder='Buscar en Mercado libre'
                    />
                </View>
                
                <View style={styles.cartIcon}>
                    <TouchableOpacity onPress={redirectCart}>
                        <Ionicons name="cart-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.locatContainer}>
                <View style={styles.location}>
                    <Octicons name="location" size={17} color="black" />
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
                {/* Imagen */}
            </View>

            <View style={styles.recentViewedContainer}>
                <View>
                    <View>
                        <Text>Visto Recientemente</Text>
                    </View>
                    <View>
                        <View>
                            {/* Imagen */}
                        </View>
                        <View>

                        </View>
                    </View>
                    <View>
                        <Text>Historial de Navegacion</Text>
                        <View>
                            {/* Icono de la flecha */}
                        </View>
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
        backgroundColor: '#dfe6e9'
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
        height: '60%',
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },

    textInputCont: {
        padding: 10,
        fontFamily: 'Proxima-nova',
        fontSize: hp('1.8%'),
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
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    menuIcon: {
        // borderWidth: 1,
        height: '60%',
        width: '7%',
        marginRight: 10,
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
        marginTop: 10
    },

    offerSectionContainer: {
        marginTop: hp('1%'),
        height: hp('13%'),
        width: wp('100%'),
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // borderWidth: 1,

    }

})

// export default HomeScreen;