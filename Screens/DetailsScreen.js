import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions,
    Alert,
    ScrollView,
    ViewPropTypes,
} from "react-native";
import { useDispatch } from "react-redux";
import * as cartAction from "../store/actions/cartAction";
import { StateBar } from "../assets/componentes/StateBar";
import {
    Feather,
    Octicons,
    Entypo,
    AntDesign,
    MaterialCommunityIcons,
    Ionicons,
    Fontisto,
} from "@expo/vector-icons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Button3 from "../assets/Buttons/Button3";
import Button1 from "../assets/Buttons/Button1";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const DetailsScreen = (props) => {
    const [active, setActive] = useState("0");

    console.log(active.activeSlide);

    const { productInfo } = props.route.params;
    // console.log(props)
    const dispatch = useDispatch();
    const addToCart = () => {
        try {
            dispatch(cartAction.addToCart(productInfo));
            Alert.alert("Aviso", "Se ha agregado al carrito", [{ text: "Ok" }]);
        } catch (e) {
            console.log(e);
        }
    };

    const _renderItem = ({ item }) => {
        // console.log(item)
        return (
            <View
                style={{
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    height: hp("20%"),
                    width: wp("90%"),
                    alignItems: "center",
                    justifyContent: "center",
                    // borderWidth:1
                }}
            >
                <Image
                    source={{ uri: item }}
                    style={{
                        height: "100%",
                        width: "100%",
                        resizeMode: "contain",
                        borderRadius: 10,
                    }}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <StateBar
                    icon={
                        <Feather
                            name="menu"
                            size={
                                Dimensions.get("window").width < 400 ? 20 : 30
                            }
                            color="black"
                        />
                    }
                    title="Producto"
                />
                <View style={styles.locatContainer}>
                    <View style={styles.location}>
                        <Octicons
                            name="location"
                            size={
                                Dimensions.get("window").width < 400 ? 10 : 17
                            }
                            color="black"
                        />
                    </View>
                    <Text style={styles.send}>Enviar a Hugo Aviles</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.newText}>Nuevo | 300 vendidos</Text>
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
                        layout={"default"}
                        data={productInfo.imgArray}
                        renderItem={_renderItem}
                        itemWidth={wp("90%")}
                        sliderWidth={wp("90%")}
                        onSnapToItem={(index) => {
                            setActive({ activeSlide: index });
                        }}
                    />
                    {/* {console.log(productInfo.imgArray.index)} */}
                </View>
                <View style={styles.paginationCont}>
                    <Pagination
                        dotsLength={productInfo.imgArray.length}
                        activeDotIndex={
                            !active.activeSlide ? 0 : active.activeSlide
                        }
                        containerStyle={{
                            width: 5,
                        }}
                        dotStyle={{
                            width: 7,
                            height: 7,
                            borderRadius: 5,
                            backgroundColor: "#3483fa",
                        }}
                        inactiveDotStyle={{
                            width: 7,
                            height: 7,

                            borderRadius: 5,

                            backgroundColor: "#b2bec3",
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>

                <View style={styles.productInfoCont}>
                    <Text
                        style={{
                            fontFamily: "Proxima-nova",
                            fontSize: hp("4%"),
                        }}
                    >
                        $ {productInfo.precioSinDescuento}
                    </Text>
                    <Text style={styles.mesesText}>
                        en{" "}
                        <Text style={{ color: "green" }}>
                            12x $ {productInfo.mesesInteres} sin interés
                        </Text>{" "}
                    </Text>
                    <Text style={styles.mesesText}>IVA Incluido</Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                marginTop: hp(".5%"),
                                fontFamily: "Proxima-nova",
                                fontSize: hp("2%"),
                                color: "#3483fa",
                            }}
                        >
                            Ver los medios de pago
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.llegaCont}>
                        <Feather name="truck" size={20} color="green" />
                        <Text
                            style={{
                                fontFamily: "Proxima-nova",
                                color: "green",
                                fontSize: hp("2%"),
                                marginLeft: wp("2%"),
                            }}
                        >
                            Llega gratis el martes
                        </Text>
                    </View>
                    <View style={styles.llegaCont}>
                        <View style={{ height: "60%" }}>
                            <MaterialCommunityIcons
                                name="storefront-outline"
                                size={20}
                                color="green"
                            />
                        </View>
                        <Text
                            style={{
                                fontFamily: "Proxima-nova",
                                color: "green",
                                fontSize: hp("2%"),
                                marginLeft: wp("2%"),
                            }}
                        >
                            Retiralo gratis a partir del martes en correos y{" "}
                            {"\n"}otros puntos
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text
                            style={{
                                marginLeft: wp("6%"),
                                fontFamily: "Proxima-nova",
                                fontSize: hp("2%"),
                                color: "#3483fa",
                            }}
                        >
                            Ver en el mapa
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontFamily: "Proxima-nova",
                            fontSize: hp("1.8%"),
                            marginTop: hp("3%"),
                        }}
                    >
                        Vendido por:
                        <Text
                            style={{
                                color: "#3483fa",
                                fontFamily: "Proxima-nova",
                                fontSize: hp("1.8%"),
                                // marginTop: hp('3%'),
                                // borderWidth: 1
                            }}
                        >
                            {" "}
                            {productInfo.vendedor}
                        </Text>
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Proxima-nova",
                            fontSize: hp("1.8%"),
                            marginTop: hp(".5%"),
                        }}
                    >
                        MercadoLíder | {productInfo.ventas} ventas
                    </Text>
                    <View
                        style={{
                            // borderWidth: 1,
                            height: "20%",
                            justifyContent: "center",
                            // padding: wp('2%')
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Proxima-nova-bold",
                                fontSize: hp("2%"),
                            }}
                        >
                            Stock Disponible
                        </Text>
                    </View>
                </View>
                <View style={styles.cantidadTextCont}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={styles.cantidadText}>
                            Cantidad: {productInfo.cantidad}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Proxima-nova",
                                color: "#636e72",
                                fontSize: hp("1.6%"),
                            }}
                        >
                            {" "}
                            ({productInfo.cantidad * 5} disponibles)
                        </Text>
                    </View>
                    <AntDesign
                        name="right"
                        size={Dimensions.get("window").width < 400 ? 9 : 15}
                        color="#3483fa"
                    />
                </View>
                <View style={styles.buttonCont}>
                    <Button1 text="Comprar ahora" onPress={null} />
                </View>
                <View style={styles.buttonCont}>
                    <Button3 text="Agregar al carrito" onPress={addToCart} />
                </View>
                <View style={styles.vendedorCont}>
                    <Text
                        style={{
                            fontFamily: "Proxima-nova",
                            fontSize: hp("2.6%"),
                        }}
                    >
                        Informacion sobre el vendedor
                    </Text>
                    <View style={styles.ubicacionCont}>
                        <View
                            style={{
                                height: "100%",
                                alignItems: "center",
                                paddingTop: "1%",
                                marginRight: "1%",
                            }}
                        >
                            <Octicons
                                name="location"
                                size={
                                    Dimensions.get("window").width < 400
                                        ? 13
                                        : 20
                                }
                                color="#636e72"
                            />
                        </View>

                        <View>
                            <Text
                                style={{
                                    marginTop: "5%",
                                    marginLeft: "5%",
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("2%"),
                                }}
                            >
                                Ubicación
                            </Text>
                            <Text
                                style={{
                                    marginTop: "5%",
                                    marginLeft: "5%",
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("2%"),
                                    color: "#636e72",
                                }}
                            >
                                {productInfo.ubicacion}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.liderCont}>
                        <View
                            style={{
                                height: "100%",
                                alignItems: "center",
                                paddingTop: "1%",
                                marginRight: "1%",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="medal"
                                size={
                                    Dimensions.get("window").width < 400
                                        ? 15
                                        : 22
                                }
                                color="green"
                            />
                        </View>

                        <View>
                            <Text
                                style={{
                                    marginTop: "2.5%",
                                    marginLeft: "1%",
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("2%"),
                                    color: "green",
                                }}
                            >
                                MercadoLider Gold
                            </Text>
                            <Text
                                style={{
                                    marginTop: "1%",
                                    marginLeft: "1%",
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("2%"),
                                    color: "#636e72",
                                }}
                            >
                                ¡Es uno de los mejores del sitio!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.levelsCont}>
                        <View
                            style={{
                                // borderWidth: 1,
                                width: "18%",
                                height: "30%",
                                backgroundColor: "#ff7675",
                                opacity: 0.15,
                            }}
                        ></View>
                        <View
                            style={{
                                // borderWidth: 1,
                                width: "18%",
                                height: "30%",
                                backgroundColor: "red",
                                opacity: 0.15,
                            }}
                        ></View>
                        <View
                            style={{
                                // borderWidth: 1,
                                width: "18%",
                                height: "30%",
                                backgroundColor: "#fdcb6e",
                                opacity: 0.15,
                            }}
                        ></View>
                        <View
                            style={{
                                // borderWidth: 1,
                                width: "18%",
                                height: "30%",
                                backgroundColor: "green",
                                opacity: 0.15,
                            }}
                        ></View>
                        <View
                            style={{
                                // borderWidth: 1,
                                width: "18%",
                                height: "40%",
                                backgroundColor: "green",
                                opacity: 0.8,
                            }}
                        ></View>
                    </View>
                    <View style={styles.iconsCont}>
                        <View style={styles.iconCont}>
                            <View
                                style={{
                                    // borderWidth: 1,
                                    width: "100%",
                                    height: "50%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova",
                                        fontSize: hp("3.5%"),
                                    }}
                                >
                                    97
                                </Text>
                            </View>

                            <Text
                                style={{
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("1.5%"),
                                    textAlign: "center",
                                    color: "#636e72",
                                }}
                            >
                                Ventas en los {"\n"} ultimos 60 días
                            </Text>
                        </View>
                        <Divider
                            orientation="vertical"
                            style={{ height: "10%" }}
                        />
                        <View style={styles.iconCont}>
                            <View
                                style={{
                                    // borderWidth: 1,
                                    width: "100%",
                                    height: "50%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Ionicons
                                    name="chatbox-outline"
                                    size={
                                        Dimensions.get("window").width < 400
                                            ? 25
                                            : 30
                                    }
                                    color="black"
                                />
                            </View>
                            <Text
                                style={{
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("1.5%"),
                                    textAlign: "center",
                                    color: "#636e72",
                                }}
                            >
                                Brinda buena atención
                            </Text>
                        </View>
                        <Divider
                            orientation="vertical"
                            style={{ height: "10%" }}
                        />
                        <View style={styles.iconCont}>
                            <View
                                style={{
                                    // borderWidth: 1,
                                    width: "100%",
                                    height: "50%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Fontisto
                                    name="stopwatch"
                                    size={
                                        Dimensions.get("window").width < 400
                                            ? 20
                                            : 30
                                    }
                                    color="black"
                                />
                            </View>
                            <Text
                                style={{
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("1.5%"),
                                    textAlign: "center",
                                    color: "#636e72",
                                }}
                            >
                                Entrega sus productos a tiempo
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: hp("5%") }}></View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    ScrollView: {
        backgroundColor: "black",
    },
    containerImg: {
        width: wp("100%"),
        height: hp("25%"),
        borderWidth: 1,
    },
    locatContainer: {
        width: wp("100%"),
        backgroundColor: "#f1c40f",
        flexDirection: "row",
        height: hp("4%"),
        alignItems: "center",
    },
    send: {
        fontSize: hp("1.7%"),
        fontFamily: "Proxima-nova",
    },
    location: {
        // borderWidth: 1,
        marginLeft: 20,
        marginRight: 5,
        height: "90%",
        width: "5%",
        alignItems: "center",
        justifyContent: "center",
    },
    starsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "24%",
        marginTop: hp("1%"),
    },
    textContainer: {
        width: wp("90%"),
        justifyContent: "center",
        margin: hp("2%"),
    },
    newText: {
        color: "#636e72",
        marginBottom: hp("1%"),
        fontFamily: "Proxima-nova",
        fontSize: hp("1.6%"),
    },
    titleText: {
        fontFamily: "Proxima-nova",
        fontSize: hp("2.3%"),
    },
    startText: {
        color: "#636e72",
        fontSize: hp("1.6%"),
    },
    recomendText: {
        color: "#3483fa",
        marginTop: hp("1%"),
        fontFamily: "Proxima-nova",
        fontSize: hp("1.6%"),
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    carrouselContainer: {
        width: wp("100%"),
        height: hp("20%"),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1
    },
    paginationCont: {
        height: hp("2%"),
        width: wp("90%"),
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonCont: {
        marginTop: hp("1%"),
        width: wp("90%"),
        height: hp("5%"),
    },
    cantidadTextCont: {
        width: wp("90%"),
        height: hp("5%"),
        backgroundColor: "#dfe6e9",
        borderRadius: 10,
        marginBottom: hp("2%"),
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        flexDirection: "row",
    },
    cantidadText: {
        fontFamily: "Proxima-nova",
        fontSize: hp("2%"),
        // borderWidth: 1,
    },
    productInfoCont: {
        height: hp("40%"),
        width: wp("90%"),
        // borderWidth: 1,
        marginTop: hp("3%"),
        marginBottom: hp("1%"),
    },
    mesesText: {
        marginTop: hp(".5%"),
        fontFamily: "Proxima-nova",
        fontSize: hp("2%"),
    },
    llegaCont: {
        // borderWidth: 1,
        height: "15%",
        // marginBottom: hp('2%'),
        flexDirection: "row",
        alignItems: "center",
    },
    vendedorCont: {
        // borderWidth: 1,
        width: wp("90%"),
        height: hp("35%"),
        marginTop: hp("5%"),
        padding: wp("4%"),
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    ubicacionCont: {
        // borderWidth: 1,
        width: "100%",
        height: "20%",
        marginTop: "5%",
        flexDirection: "row",
    },
    liderCont: {
        // borderWidth: 1,
        width: "100%",
        height: "20%",
        // marginBottom: "2%",
        flexDirection: "row",
    },
    levelsCont: {
        // borderWidth: 1,
        width: "100%",
        height: "10%",
        // marginBottom: "2%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconsCont: {
        // borderWidth: 1,
        height: "39%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconCont: {
        // borderWidth: 1,
        height: "100%",
        width: "30%",
        padding: "1%",
        alignItems: "center",
    },
});
