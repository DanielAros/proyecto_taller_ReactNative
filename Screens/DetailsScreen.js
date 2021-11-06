import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StateBar } from '../assets/componentes/StateBar';
import { Feather } from '@expo/vector-icons';

export const DetailsScreen = () => {
    return (
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
        </View>
    )
}

// export default DetailsScreen;