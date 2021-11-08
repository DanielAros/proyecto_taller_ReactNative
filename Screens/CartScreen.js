import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    ScrollView,
} from "react-native";
import CartItem from "../assets/componentes/CartItem";
import { useSelector } from "react-redux";
import { StateBar } from "../assets/componentes/StateBar";
import { Feather, FontAwesome } from "@expo/vector-icons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const CartScreen = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartTotal = useSelector((state) => state.cart.total);

    return (
        <View style={styles.container}>
            {/* <ScrollView contentContainerStyle={styles.container}> */}

            <StateBar
                icon={
                    <Feather
                        name="menu"
                        size={Dimensions.get("window").width < 400 ? 20 : 30}
                        color="black"
                    />
                }
            />
            <View style={styles.containerHeader}>
                <View
                    style={{
                        borderBottomWidth: 2,
                        height: "100%",
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Proxima-nova",
                            fontSize: hp("3%"),
                        }}
                    >
                        Carrito ({cartItems.length})
                    </Text>
                </View>
                <View
                    style={{
                        // borderBottomWidth: 2,
                        height: "100%",
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Proxima-nova",
                            fontSize: hp("3%"),
                            color: "#636e72",
                        }}
                    >
                        Guardados(0)
                    </Text>
                </View>
            </View>
            <View style={styles.productosFull}>
                <View
                    style={{
                        width: "100%",
                        height: "35%",
                        // borderWidth: 1,
                        flexDirection: "row",
                        marginBottom: hp("1%"),
                    }}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Proxima-nova-bold",
                                fontSize: hp("2%"),
                                marginLeft: "2%",
                            }}
                        >
                            Productos
                        </Text>
                    </View>

                    <View
                        style={{
                            width: "4%",
                            height: "100%",
                            // borderWidth: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <FontAwesome
                            name="flash"
                            size={
                                Dimensions.get("window").width < 400 ? 10 : 17
                            }
                            color="green"
                        />
                    </View>
                    <View
                        style={{
                            width: "40%",
                            height: "100%",
                            // borderWidth: 1,
                            justifyContent: "center",
                            padding: 5,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Proxima-nova-bold",
                                fontSize: hp("2%"),
                                color: "green",
                            }}
                        >
                            Full ({cartItems.length})
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        borderWidth: cartItems.length > 0 ? 0 : 0.5,
                        width: wp("94%"),
                        height: hp(".7%"),
                        borderRadius: 10,
                        backgroundColor:
                            cartItems.length > 0 ? "green" : "#fff",
                        marginBottom: hp("1%"),
                    }}
                ></View>

                <View style={styles.addMore}>
                    <Text
                        style={{
                            fontFamily: "Proxima-nova-bold",
                            fontSize: hp("2%"),
                            marginLeft: "2%",
                        }}
                    >
                        {cartItems.length > 0
                            ? "¡Agrega mas, tienes envios gratis!"
                            : "¡Tus productos apareceran abajo!"}
                    </Text>
                </View>
            </View>
            <View>
                <FlatList
                    style={styles.styleFlatList}
                    data={cartItems}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={() =>
                        Math.floor(Math.random() * 1001).toString()
                    }
                    renderItem={(itemData) => <CartItem item={itemData.item} />}
                />
            </View>

            <Text>Total: ${cartTotal}</Text>
            {/* </ScrollView> */}
        </View>
    );
};

// export default CartScreen;
// console.log(cartItems.length);
const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: "center",
        // alignItems: "center",
    },
    containerHeader: {
        width: wp("100%"),
        height: hp("6%"),
        backgroundColor: "#f1c40f",
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 1
    },
    styleFlatList: {
        width: "100%",
        height: "100%",
    },
    productosFull: {
        borderWidth: 1,
        width: wp("100%"),
        height: hp("10%"),
        padding: 10,
        alignItems: "center",
        // marginBottom: hp("2%"),
    },
    addMore: {
        // borderWidth: 1,
        width: "100%",
        height: "35%",
        // padding: 10,
        justifyContent: "center",
    },
});
