import React from 'react';
import { StyleSheet, Text, View, Linking, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import Button1 from '../assets/Buttons/Button1'
import Button2 from '../assets/Buttons/Button2'


export const InitLoginScreen = (props) => {
    //console.log(props.navigation);
    const onPress = () =>{
        props.navigation.navigate('UserScreen');
    }

    return (
        // Container principal
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.Otext}>Omitir</Text>
                <View style={styles.textTitleContainer}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'Proxima-nova',
                                fontSize: hp('3.8%'),
                                textAlign: 'center',
                                marginBottom: 4
                            }}
                        >
                            ¿Que estas esperando?
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Proxima-nova',
                                fontSize:  hp('2.5%'),
                                textAlign: 'center'
                            }}
                        >
                            ¡Es Gratis!
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button1
                    text="Registrarme con mi e-mail"
                    onPress={onPress}
                />
                <Button2
                    text="Ya tengo cuenta"
                />
            </View>
            <View style={styles.containerPoliticas}>
                <Text style={styles.TyCtext}>
                    Al inscribirme, declaro que soy mayor de edad y acepto
                    las  
                    <Text style={{ color: '#3483fa' }}
                        onPress={() => Linking.openURL('https://www.mercadolibre.com.mx/privacidad')}>
                        {'\r'}Politicas de Privacidad{'\r'}
                    </Text> 
                    y los {'\r'}
                    <Text style={{ color: '#3483fa' }}
                        onPress={() => Linking.openURL('https://www.mercadolibre.com.co/ayuda/terminos-condiciones-de-uso_1841')}>
                            Terminos y condiciones de Mercado Libre y Mercado pago
                    </Text> 
                </Text>
            </View>
        </View>
    )
}

// export default InitLoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        height: "100%",
        backgroundColor: '#fff',
        paddingTop: 30,
        //marginTop: 20
    },
    textContainer: {
        width: '100%',
        height: '40%',
        //alignItems: 'center',
        // borderWidth: 1,
        //backgroundColor: 'red',
    },
    textTitleContainer: {
        width: '100%',
        height: '90%',
        //alignItems: 'center',
        // borderWidth: 1,
        //backgroundColor: 'blue',
        justifyContent: 'center'
    },
    buttonContainer:{
        width: '100%',
        height: '25%',
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'center'
    },
    TyCtext: {
        fontFamily: 'Proxima-nova',
        fontSize: hp('2%'),
        textAlign: 'center'
    },
    containerPoliticas:{
        width: '100%',
        height: '35%',
        //backgroundColor: 'yellow',
        justifyContent: 'center',
        padding: 20
    },
    Otext: {
        fontFamily: 'Proxima-nova',
        fontSize: hp('2.8%'),
        textAlign: 'center'
    },
})