import React from "react";
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from "react-native";

const ProductCard = (props) =>{
    return(
        <View style={styles.conteiner}>
            <TouchableOpacity>
                <View style={styles.conteinerImg}>
                    <Image style={styles.image}
                           source={{uri:'data:image/jpeg;base64,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rC5J39HR8h8pV9VNSgYved/f7Z5Jv4guyri/eYfNutZ/7TPxBdoRgIiKAEREAREQBERAEREAREQBERAEREAREQBERAEREARF43dXpIWeyVqpMEMLWn/U8hjP/pwQEfhZZMuFP2Knsp4W2T+KfN1PZXEDphg+kOtW/PLPrjrU0DuHhdZP4h83U9lct78+mqNc2MUn3rrqxdxXNieCu+MBOR6lrz9NN+sOteDpS1h5BLphTRBufeh0vSoWu0Oqvuh1IAcVzpN4GOKCuveF1k/iHzdT2V81WC0Bjy4OzWw09NNjFwSiTuvhbZP4p83U9lPC2yfxT5up7K4cNMs+uOtXDTDfrDrUUQfRFKoHNDmmQQCDtBEgqRax3v8ASYr2JhkEsLqTt13Fo+w5i2dQSEREAREQBERAEREAREQBERAEREAREQBERAFi26xMrMLKjQ5pzBEg9BWUiA1Z3cDYD/l2fZb2KngBYOT0/shbUiA1XwAsHJ6f2QngBYOT0/shbUiA1XwAsHJ6f2Qqf9P7Bydn2QtrRAap/wBP7Bydn2Qrh3A2Af5dn2W9i2lEBhaN0dToMuUmNY3Y0ADqCzURAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q=='}}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.styleCardTextOffer}>
                        <Text style={styles.textOferta}>OFERTA DEL DÍA</Text>
                    </View>
                    <View style={styles.conteinerInfo}>
                        <Text style={{textDecorationLine: 'line-through', fontSize:11, color:'grey'}}>$18,499</Text>
                        <Text style={styles.textPrecio}>$ 13,599 <Text style={{color: 'green'}}>26% OFF</Text></Text>
                        <Text style={styles.textCredito}>12x 1,133 sin interés</Text>
                        <Text style={styles.textDescripcion}>Hisense 4K Uhd A6gv TV 65 Pulgadas (65a6gv 2021)</Text>
                        <Text style={styles.text}>por Mercado Libre Electronica</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    conteiner: {
        width:'50%',
        height: '50%',
        backgroundColor:'white',
        //paddingTop: 5,
        //borderWidth: 0.35,
        //backgroundColor: 'blue'
    },
    conteinerImg:{
        width:'100%',
        height: '50%',
    },
    image: {
        width:'100%',
        height: '100%',
    },
    infoContainer:{
        width:'100%',
        height: '45%',
        //backgroundColor: 'yellow'
        //alignItems:'center',
    },
    conteinerInfo:{
        width: '100%',
        //height: '65%',
        //margin: 5,
        //backgroundColor: 'red',
        padding: 5,
    },
    styleCardTextOffer:{
        width: '65%',
        height: '15%',
        backgroundColor: '#3483fa',
        borderRadius: 4,
        //padding: 2,
        margin: 5
    },
    text:{
        fontFamily: 'Proxima-nova',
        fontSize:12,
        textAlign: 'justify',
        color: 'grey',
    },
    textOferta:{
        color: '#fff',
        textAlign: 'center',
    },
    textPrecio:{
        color: 'black',
        fontFamily: 'Proxima-nova',
        fontSize:18,
    },
    textCredito:{
        color: 'green',
        fontFamily: 'Proxima-nova',
        fontSize:12,
    },
    textDescripcion:{
        color: 'grey',
        fontFamily: 'Proxima-nova',
        fontSize:14,
        textAlign: 'justify',
        marginTop: 4,
        marginBottom: 2
    },
});
