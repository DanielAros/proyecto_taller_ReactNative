import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Modal from "react-native-modal";
import {
    Ionicons,
    SimpleLineIcons,
    MaterialIcons,
    Entypo,
} from "@expo/vector-icons";

export const StateBar = ({ icon, title, nav }) => {
    const [visible, setVisible] = useState(false);
    // console.log(nav);
    const Menu = (props) => {
        // console.log(props)
        const navigateHomeScreen = () => {
            nav.navigate("HomeScreen");
        };
        const navigateCartScreen = () => {
            nav.navigate("CartScreen");
        };
        const navigateOffersScreen = () => {
            nav.navigate("OffersScreen");
        };
        const navigateLogOutScreen = () => {
            nav.navigate("LogOutScreen");
        };

        console.log(visible);
        return (
            <Modal
                isVisible={visible}
                animationIn="bounceInLeft"
                animationOut="bounceOutLeft"
                animationOutTiming={500}
                animationInTiming={500}
                style={{
                    margin: 0,
                }}
                onBackdropPress={() => setVisible(false)}
                onSwipeComplete={() => setVisible(false)}
                swipeDirection="left"
            >
                <View
                    style={{
                        width: wp("75%"),
                        height: "100%",
                        backgroundColor: "white",
                        alignItems: "center",
                        // justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            // borderWidth: 1,
                            height: "16%",
                            width: "100%",
                            backgroundColor: "#f1c40f",
                        }}
                    >
                        <View
                            style={{
                                width: "100%",
                                // borderWidth: 1,
                                height: "65%",
                                flexDirection: "row",
                            }}
                        >
                            <View
                                style={{
                                    width: "30%",
                                    height: "100%",
                                    // borderWidth: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Ionicons
                                    name="ios-person-circle-outline"
                                    size={70}
                                    color="black"
                                />
                            </View>
                            <View
                                style={{
                                    // borderWidth: 1,
                                    height: "100%",
                                    width: "70%",
                                    justifyContent: "center",
                                    padding: "1%",
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova",
                                        fontSize: hp("2%"),
                                    }}
                                >
                                    Hola Admin
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova-bold",
                                        fontSize: hp("2%"),
                                    }}
                                >
                                    Nivel 4 - Mercado Puntos
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                // borderWidth: 1,
                                height: "35%",
                                width: "100%",
                                alignItems: "center",
                                // justifyContent: "center",
                            }}
                        >
                            <View
                                style={{
                                    // borderWidth: 1,
                                    height: "70%",
                                    width: "90%",
                                    borderRadius: 50,
                                    opacity: 0.8,
                                    backgroundColor: "#ffeaa7",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        height: "100%",
                                        width: "12%",
                                        // borderWidth: 1,
                                        marginLeft: "5%",
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                        source={{
                                            uri: "https://www.apkmirror.com/wp-content/uploads/2020/03/5e828e888a514.png",
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{
                                        marginLeft: "5%",
                                        fontFamily: "Proxima-nova-bold",
                                        fontSize: hp("2%"),
                                    }}
                                >
                                    Mercado Pago
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            // borderWidth: 1,
                            height: "20%",
                            width: "100%",
                            alignItems: "center",
                            padding: 10,
                            justifyContent: "space-between",
                        }}
                    >
                        <View
                            style={{
                                // borderWidth: 1,
                                height: "33%",
                                width: "100%",
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <TouchableOpacity
                                onPress={navigateHomeScreen}
                                style={{
                                    // borderWidth: 1,
                                    height: "100%",
                                    width: "100%",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                            >
                                <View
                                    style={{
                                        // borderWidth: 1,
                                        height: "100%",
                                        width: "15%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SimpleLineIcons
                                        name="home"
                                        size={
                                            Dimensions.get("window").width < 400
                                                ? 20
                                                : 25
                                        }
                                        color="black"
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova",
                                        fontSize: hp("2%"),
                                    }}
                                >
                                    Inicio
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                // borderWidth: 1,
                                height: "33%",
                                width: "100%",
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    // borderWidth: 1,
                                    height: "100%",
                                    width: "100%",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                                onPress={navigateCartScreen}
                            >
                                <View
                                    style={{
                                        // borderWidth: 1,
                                        height: "100%",
                                        width: "15%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Ionicons
                                        name="cart-outline"
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
                                        fontSize: hp("2%"),
                                    }}
                                >
                                    Cart
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                // borderWidth: 1,
                                height: "33%",
                                width: "100%",
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    // borderWidth: 1,
                                    height: "100%",
                                    width: "100%",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                                onPress={navigateOffersScreen}
                            >
                                <View
                                    style={{
                                        // borderWidth: 1,
                                        height: "100%",
                                        width: "15%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <MaterialIcons
                                        name="local-offer"
                                        size={
                                            Dimensions.get("window").width < 400
                                                ? 20
                                                : 25
                                        }
                                        color="black"
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova",
                                        fontSize: hp("2%"),
                                    }}
                                >
                                    Offers
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                // borderWidth: 1,
                                height: "33%",
                                width: "100%",
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    // borderWidth: 1,
                                    height: "100%",
                                    width: "100%",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                                onPress={navigateLogOutScreen}
                            >
                                <View
                                    style={{
                                        // borderWidth: 1,
                                        height: "100%",
                                        width: "15%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Entypo
                                        name="log-out"
                                        size={
                                            Dimensions.get("window").width < 400
                                                ? 18
                                                : 22
                                        }
                                        color="black"
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova",
                                        fontSize: hp("2%"),
                                    }}
                                >
                                    Log-Out
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    };

    const showModal = () => {
        setVisible(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.arrowIconCont}>
                <TouchableOpacity onPress={showModal}>{icon}</TouchableOpacity>
            </View>
            <View style={styles.titleCont}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Menu visible={visible} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp("100%"),
        backgroundColor: "#f1c40f",
        height: hp("7%"),
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },

    arrowIconCont: {
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "13%",
    },

    titleCont: {
        // borderWidth: 1,
        height: "100%",
        width: "87%",
        justifyContent: "center",
        padding: 10,
    },

    title: {
        fontSize: hp("2.5%"),
        fontFamily: "Proxima-nova",
    },
});
