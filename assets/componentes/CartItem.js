import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    Image,
} from "react-native";
import { useDispatch } from "react-redux";
import * as cartAction from "../../store/actions/cartAction";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Button2 from "../Buttons/Button2";
import { ScrollView } from "react-native-gesture-handler";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const deleteItem = () => {
        try {
            dispatch(cartAction.deleteItemFromCart(props.item.id));
        } catch (e) {
            console.log(e);
        }
    };
    console.log(props);
    return (
        <View>
        {/* <ScrollView> */}

            <View style={styles.card}>
                <View
                    style={{
                        // borderWidth: 1,
                        width: "30%",
                        height: "90%",
                        // marginLeft: wp("1%"),
                    }}
                >
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                        source={{ uri: props.item.imgUrls }}
                    />
                </View>
                <View
                    style={{
                        height: "90%",
                        width: "90%",
                        // borderWidth: 1,
                        padding: "1%",
                    }}
                >
                    <View
                        style={
                            {
                                // borderWidth: 1,
                            }
                        }
                    >
                        <Text
                            style={{
                                fontFamily: "Proxima-nova",
                                fontSize: hp("2%"),
                            }}
                        >
                            {props.item.name}
                        </Text>
                        <View
                            style={{
                                width: "100%",
                                // borderWidth: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: hp(".5%"),
                            }}
                        >
                            <Text
                                style={{
                                    color: "green",
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("1.7%"),
                                }}
                            >
                                Envio Gratis
                            </Text>
                            <View
                                style={{
                                    width: "4%",
                                    // borderWidth: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: "1%",
                                }}
                            >
                                <FontAwesome
                                    name="flash"
                                    size={
                                        Dimensions.get("window").width < 400
                                            ? 10
                                            : 17
                                    }
                                    color="green"
                                />
                            </View>
                            <View
                                style={{
                                    justifyContent: "center",
                                    marginLeft: "1%",
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova-bold",
                                        fontSize: hp("2%"),
                                        color: "green",
                                    }}
                                >
                                    Full
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            // borderWidth: 1,
                            height: "50%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View
                            style={{
                                // borderWidth: 1,
                                width: "50%",
                                justifyContent: "center",
                                // alignItems:'center'
                            }}
                        >
                            <View
                                style={{
                                    width: "50%",
                                    height: "70%",
                                    borderRadius: 5,
                                    borderWidth: 0.2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Proxima-nova",
                                        color: "#3483fa",
                                        // borderWidth:1
                                        fontSize: hp('1.8%')
                                    }}
                                >
                                    1 U.
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                // borderWidth: 1,
                                width: "50%",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                padding: wp("2%"),
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Proxima-nova",
                                    fontSize: hp("3%"),
                                }}
                            >
                                $ {props.item.precioSinDescuento}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonCont}>
                <View
                    style={{
                        width: '20%'
                    }}
                >
                    <Button2 text="Eliminar" onPress={deleteItem} />
                </View>
                <View
                    style={{
                        // marginLeft: wp('4%'),
                        width: '60%'
                    }}
                >
                    <Button2 text="Mas productos del vendedor" onPress={null} />
                </View>
            </View>
            {/* </ScrollView> */}
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        width: wp("100%"),
        height: hp("15%"),
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: 20
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingLeft: wp("10%"),
        paddingRight: wp("10%"),
        // flexWrap: 'wrap'
        borderBottomColor: '#b2bec3',
    },
    buttonCont: {
        width: wp("100%"),
        height: hp("5%"),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#b2bec3'
    },
});
