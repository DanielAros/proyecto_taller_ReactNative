import React from "react"
import { Dimensions } from "react-native";
import {
    FontAwesome,
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    AntDesign 
} from '@expo/vector-icons';

export const CARDATA = [
    {
        id: 1,
        obj: <MaterialCommunityIcons name="cellphone-text" size={Dimensions.get('window').width < 400 ? 25 : 35} color="#636e72" />,
        text: 'Recargar celular',
    },
    {
        id: 2,
        obj: <MaterialIcons name="local-offer" size={Dimensions.get('window').width < 400 ? 28 : 35} color="#3483fa" />,
        text: 'Ofertas',
    },
    {
        id: 3,
        obj: <FontAwesome name="shopping-basket" size={Dimensions.get('window').width < 400 ? 20 : 27} color="#636e72" />,
        text: 'Supermercado',
    },
    {
        id: 4,
        obj: <Ionicons name="ios-car-outline" size={Dimensions.get('window').width < 400 ? 25 : 30} color="#636e72" />,
        text: 'Autos, motos y otros',
    },
    {
        id: 5,
        obj: <AntDesign name="plus" size={Dimensions.get('window').width < 400 ? 25 : 30} color="#636e72" />,
        text: 'Ver más',
    },
]