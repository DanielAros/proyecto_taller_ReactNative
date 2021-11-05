import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from '../assets/componentes/ProductCard';

export const OffersScreen = () => {
    return(
        <View style={styles.container}>
            <ProductCard/>
            <ProductCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
})
// export derfault OffersScreen;