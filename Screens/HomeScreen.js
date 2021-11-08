import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
} from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
    SimpleLineIcons,
    Ionicons,
    Feather,
    Octicons,
    AntDesign,
} from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { IMAGES } from "../Data/imgCarrousel";
import { CARDATA } from "../Data/CardData";
import Card from "../assets/componentes/Card";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { ARTICULOS } from "../Data/dummyData";
import ProductCard from "../assets/componentes/ProductCard";
import { ScrollView } from "react-native-gesture-handler";

export const HomeScreen = (props) => {
    // console.log(props)

    const redirectCart = () => {
        props.navigation.navigate("CartScreen");
    };

    const _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    backgroundColor: "floralwhite",
                    borderRadius: 10,
                    height: hp("20%"),
                    width: wp("90%"),
                    alignItems: "center",
                    justifyContent: "center",
                    // borderWidth:1
                }}
            >
                <Image
                    source={{ uri: item.url }}
                    style={{
                        height: "100%",
                        width: "100%",
                        resizeMode: "cover",
                        borderRadius: 10,
                    }}
                />
            </View>
        );
    };

    const _renderItem2 = ({ item }) => {
        const goToDetails = () => {
            // console.log(item)
            props.navigation.navigate("ProductDetails", { productInfo: item });
        };

        var of = Math.floor(parseFloat(item.precioSinDescuento / 12));

        return (
            <View
                style={{
                    // flex: 1,
                    padding: 10,
                    height: "80%",
                    width: wp("85%"),
                    // borderWidth: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View>
                    <TouchableOpacity
                        style={{
                            width: wp("82%"),
                            height: hp("20%"),
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={goToDetails}
                    >
                        <Image
                            style={{
                                width: "40%",
                                height: "100%",
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                            source={{ uri: item.imgUrls }}
                        />
                        <View
                            style={{
                                width: "60%",
                                height: "100%",
                                padding: 5,
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("2%"),
                                    marginBottom: hp("1%"),
                                }}
                            >
                                {item.name}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("3%"),
                                    marginBottom: hp("1%"),
                                }}
                            >
                                $ {item.precioSinDescuento}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("1.5%"),
                                    color: "green",
                                    marginBottom: hp("1%"),
                                }}
                            >
                                12 x {item.mesesInteres} msi
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.buscContainer}>
                <View style={styles.menuIcon}>
                    <TouchableOpacity>
                        <Feather
                            name="menu"
                            size={
                                Dimensions.get("window").width < 400 ? 20 : 30
                            }
                            color="black"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.textInput}>
                    <View style={styles.iconLupa}>
                        <SimpleLineIcons
                            name="magnifier"
                            size={
                                Dimensions.get("window").width < 400 ? 10 : 15
                            }
                            color="#b2bec3"
                        />
                    </View>
                    <TextInput
                        style={styles.textInputCont}
                        placeholder="Buscar en Mercado libre"
                    />
                </View>

                <View style={styles.cartIcon}>
                    <TouchableOpacity onPress={redirectCart}>
                        <Ionicons
                            name="cart-outline"
                            size={
                                Dimensions.get("window").width < 400 ? 25 : 30
                            }
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.locatContainer}>
                <View style={styles.location}>
                    <Octicons
                        name="location"
                        size={Dimensions.get("window").width < 400 ? 10 : 17}
                        color="black"
                    />
                </View>
                <Text style={styles.send}>Enviar a Hugo Aviles</Text>
            </View>

            <View style={styles.carrouselContainer}>
                <Carousel
                    layout={"default"}
                    data={IMAGES}
                    renderItem={_renderItem}
                    itemWidth={wp("90%")}
                    sliderWidth={wp("90%")}
                    loop={true}
                    autoplay={true}
                    autoplayInterval={4000}
                    autoplayDelay={4000}
                />
            </View>

            <View style={styles.offerSectionContainer}>
                <FlatList
                    data={CARDATA}
                    // showsVerticalScrollIndicator={true} //Explicar esto
                    keyExtractor={(item) => item.id.toString()}
                    // horizontal={true}
                    numColumns={5}
                    renderItem={(itemData) => (
                        <Card cardData={itemData.item} {...props} />
                    )}
                />
            </View>

            <View style={styles.addContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://http2.mlstatic.com/D_NQ_NP_844736-MLA44550459585_012021-OO.jpg",
                    }}
                />
            </View>

            <View style={styles.recentViewedContainer}>
                <View style={styles.textRecentCont}>
                    <Text style={styles.textRecent}>Visto Recientemente</Text>
                </View>
                <Divider
                    style={{ marginHorizontal: 1, marginBottom: hp("1%") }}
                />

                <View style={styles.carrouselContainer2}>
                    <Carousel
                        layout={"default"}
                        data={ARTICULOS}
                        renderItem={_renderItem2}
                        itemWidth={wp("100%")}
                        sliderWidth={wp("100%")}
                        loop={true}
                        autoplay={true}
                        autoplayInterval={3500}
                        autoplayDelay={3500}
                    />
                </View>

                <Divider
                    style={{ marginHorizontal: 1, marginBottom: hp("1%") }}
                />
                <TouchableOpacity style={styles.navHistoryCont}>
                    <Text style={styles.navHistory}>
                        Ver historial de Navegacion
                    </Text>
                    <AntDesign
                        name="right"
                        size={Dimensions.get("window").width < 400 ? 9 : 15}
                        color="#3483fa"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        flex: 1,
        backgroundColor: "#dfe6e9",
        alignItems: "center",
    },

    buscContainer: {
        height: hp("7%"),
        width: wp("100%"),
        backgroundColor: "#f1c40f",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    textInput: {
        width: "75%",
        height: Dimensions.get("window").width < 400 ? "70%" : "60%",
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    textInputCont: {
        padding: wp("2%"),
        fontFamily: "Proxima-nova",
        fontSize:
            Dimensions.get("window").width < 400 ? hp("2.5%") : hp("1.8%"),
        width: "85%",
        height: "100%",
        // borderWidth: 1
    },
    iconLupa: {
        height: "100%",
        width: "5%",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cartIcon: {
        // borderWidth: 1,
        height: "60%",
        width: "7%",
        marginLeft: wp(".5%"),
        alignItems: "center",
        justifyContent: "center",
    },
    menuIcon: {
        // borderWidth: 1,
        height: "60%",
        width: "7%",
        marginRight: wp("2%"),
        alignItems: "center",
        justifyContent: "center",
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
    carrouselContainer: {
        width: wp("100%"),
        height: hp("20%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("2%"),
        // borderWidth: 1
    },
    carrouselContainer2: {
        width: wp("100%"),
        height: hp("18%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("2%"),
        // borderWidth: 1
    },
    offerSectionContainer: {
        marginTop: hp("1.5%"),
        height: hp("13%"),
        width: wp("100%"),
        alignContent: "center",
        justifyContent: "center",
        // borderWidth: 1
    },
    addContainer: {
        width: wp("90%"),
        height: Dimensions.get("window").height < 800 ? hp("13%") : hp("15%"),
        // borderWidth: 1
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: Dimensions.get("window").height < 800 ? "cover" : "contain",
        borderRadius: 10,
    },
    recentViewedContainer: {
        // borderWidth: 1,
        borderRadius: 10,
        marginTop: hp("2%"),
        height: hp("33%"),
        width: wp("90%"),
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        padding: wp("2%"),
    },
    textRecentCont: {
        // borderWidth: 1,
        width: "100%",
        height: "15%",
        justifyContent: "center",
        paddingLeft: wp("1%"),
        // padding: 10,
        // borderWidth: 1
    },
    textRecent: {
        fontFamily: "Proxima-nova",
        fontSize: hp("2.5%"),
    },
    navHistoryCont: {
        height: "10%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp("1%"),
        paddingRight: wp("1%"),
        // borderWidth: 1,
        // backgroundColor: 'red'
    },
    navHistory: {
        fontFamily: "Proxima-nova",
        fontSize: hp("2%"),
        color: "#3483fa",
    },
});

// export default HomeScreen;
