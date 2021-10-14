import React from 'react';
import { StyleSheet, Text, View, Linking, Button} from 'react-native';
import { Dimensions } from 'react-native';
import Button1 from '../assets/Buttons/Button1'
import Button2 from '../assets/Buttons/Button2'


const InitLoginScreen = (props) => {
    console.log(props.navigation);
    const goToIniUserScreen = () =>{
        props.navigation.navigate('UserScreen');
    }

    return (
        // Container principal
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.Otext}>Omitir</Text>
            </View>
            <View style={styles.textContainer}>
                <Text
                    style={{
                        fontFamily: 'Proxima-nova',
                        fontSize: 35,
                    }}
                >
                    ¿Que estas esperando?
                </Text>
                <Text
                    style={{
                        fontFamily: 'Proxima-nova',
                        fontSize: 25,
                    }}
                >
                    ¡Es Gratis!
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Button title={'Press me'}
                    onPress={goToIniUserScreen}
                />
                <Button1
                    text="Registrarme con mi e-mail"
                    onPress={()=>console.log("Press")}
                />
                <Button2
                    text="Ya tengo cuenta"
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.TyCtext}>
                    Al inscribirme, declaro que soy mayor de edad y acepto
                    las  
                    <Text style={{ color: '#3483fa' }}
                        onPress={() => Linking.openURL('https://www.mercadolibre.com.mx/privacidad')}>
                        Politicas de Privacidad
                    </Text> 
                    y los
                    <Text style={{ color: '#3483fa' }}
                        onPress={() => Linking.openURL('https://www.mercadolibre.com.co/ayuda/terminos-condiciones-de-uso_1841')}>
                            Terminos y condiciones de Mercado Libre y Mercado pago
                    </Text> 
                </Text>
            </View>
        </View>
    )
}

export default InitLoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        height: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .25,
        // borderColor: 'black',
        alignItems: 'center',
        // borderWidth: 1,
        padding: 20,
        width: Dimensions.get('window').width * 0.80,
    },
    TyCtext: {
        fontFamily: 'Proxima-nova',
        fontSize: 15,
        textAlign: 'center'
    },
    OCont: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        alignItems: 'center'
    },
    Otext: {
        fontFamily: 'Proxima-nova',
        fontSize: 25,
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 30
    }
})