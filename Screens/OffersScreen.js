import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import OffersProductCard from '../assets/componentes/OffersProductCard';
import {ARTICULOS} from '../Data/dummyData';
import { AntDesign, FontAwesome} from '@expo/vector-icons'; 

export const OffersScreen = (props) => {
    return(
        <View style={styles.container}>


            
            <View style={styles.containerDir}>
                <FontAwesome name="map-marker" size={12} color="black" style={{marginRight:5}}/>
                <Text style={styles.styleText}>Enviar a Hugo Aviles</Text>
            </View>
            <View style={styles.containerFilter}>
                <Text style={styles.styleText}>10,000 Productos</Text>
                <View style={styles.containerIcon}>
                    <Text style={styles.styleTextFilter}>Filtrar</Text>
                    <AntDesign name="down" size={12} color="blue"/>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={ARTICULOS}
                    numColumns={2}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={item => item.id.toString()}
                    renderItem={itemData => (
                        <OffersProductCard
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
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
    },
    containerFilter:{
        width: '100%',
        height: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 5,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    styleText:{
        fontFamily: 'Proxima-nova',
    },
    styleTextFilter:{
        fontFamily: 'Proxima-nova',
        color: 'blue',
        marginRight: 4,
    },
    containerIcon:{
        flexDirection: 'row',
        alignItems: 'center'
    },
})
// export derfault OffersScreen;