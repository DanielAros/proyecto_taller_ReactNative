import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import CartItem from '../assets/componentes/CartItem';
import {useSelector} from "react-redux";

export const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.items);
    const cartTotal = useSelector(state => state.cart.total);

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View><Text>Carrito</Text></View>
                <View><Text>Guardado</Text></View>
            </View>
            <FlatList style={styles.styleFlatList}
                data={cartItems}
                showsVerticalScrollIndicator={true}
                keyExtractor={() => Math.floor(Math.random() * 1001).toString()}
                renderItem={itemData => (
                    <CartItem item={itemData.item}/>
                )}
            />
            <Text>Total: ${cartTotal}</Text>
        </View>
    )
}

// export default CartScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerHeader:{
        width: '100%',
        height: 30,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    styleFlatList:{
        width: '100%',
        height: '100%',
    }
})