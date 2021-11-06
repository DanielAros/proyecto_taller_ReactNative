import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import {useDispatch} from "react-redux";
import * as cartAction from '../store/actions/cartAction'

export const DetailsScreen = (props) => {
    const {productInfo} = props.route.params
    const dispatch = useDispatch();
    const addToCart = () =>{
        try{
            dispatch(cartAction.addToCart(productInfo))
        }catch(e){
            console.log(e)
        }
    }

    return(
        <View>
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
            <Text>Detalles del producto</Text>
            <Image style={styles.containerImg}
                source={{uri:productInfo.imgUrls}}
            />
            <Text>{productInfo.description}</Text>
            <Button title="Agregar al carrito" onPress={addToCart}/>
        </View>
    )
}

// export default DetailsScreen;

const styles = StyleSheet.create({
    containerImg:{
        width: '100%',
        height: '50%',
    }
})