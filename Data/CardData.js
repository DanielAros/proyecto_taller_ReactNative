import React from "react"
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
        obj: <MaterialCommunityIcons name="cellphone-text" size={30} color="#636e72" />,
        text: 'Recarga celular'
    },
    {
        id: 2,
        obj: <MaterialIcons name="local-offer" size={30} color="#636e72" />,
        text: 'Ofertas'
    },
    {
        id: 3,
        obj: <FontAwesome name="shopping-basket" size={27} color="#636e72" />,
        text: 'Supermercado'
    },
    {
        id: 4,
        obj: <Ionicons name="ios-car-outline" size={35} color="#636e72" />,
        text: 'Autos, motos y otros'
    },
    {
        id: 5,
        obj: <AntDesign name="plus" size={30} color="#636e72" />,
        text: 'Ver más'
    },
]