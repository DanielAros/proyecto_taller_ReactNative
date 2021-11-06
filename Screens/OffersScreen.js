import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import ProductCard from '../assets/componentes/ProductCard';
import {ARTICULOS} from '../Data/dummyData'

export const OffersScreen = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerDir}>
                <Text style={styles.styleText}>Enviar a Hugo</Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={ARTICULOS}
                    numColumns={2}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={item => item.id.toString()}
                    renderItem={itemData => (
                        <ProductCard
                            productInfo={itemData.item}
                            {...props}
                        />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column'
    },
    listContainer:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    containerDir:{
        width: '100%',
        height: 30,
        backgroundColor: '#f1c40f',
        justifyContent: 'center',
        padding: 5,
    },
    styleText:{
        fontFamily: 'Proxima-nova',
    },
})
// export derfault OffersScreen;