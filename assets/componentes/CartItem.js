import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import {useDispatch} from "react-redux";
import * as cartAction from '../../store/actions/cartAction'



const CartItem = (props) =>{

    const dispatch = useDispatch();
    const deleteItem = () =>{
        try{
            dispatch(cartAction.deleteItemFromCart(props.item.id))
        }catch(e){
            console.log(e)
        }
    }

    return(
        <View style={styles.card}>
            <Text>Descripcion: {props.item.description}</Text>
            <Text>Precio: {props.item.cost}</Text>
            <Button title="Eliminar" onPress={deleteItem}/>
        </View>
    )
}

export default CartItem;

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 80,
        borderWidth: 1,
    }
})