import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import Button1 from '../assets/Buttons/Button1';
import Button2 from '../assets/Buttons/Button2';

export const InitPassScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.keyCont}>
                <Text>Ahora, tu clave de Mercado Libre</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text>Clave</Text>
                <View style={styles.input}>
                    <TextInput style={styles.textInput}></TextInput>
                    <Button2 text="Mostrar"/>
                </View>   
            </View>

            <View style={styles.buttonContainer}>
                <Button1 text='Ingresar' />
                <Button2 text='No se mi clave'/>
            </View>

            <View style={styles.notContainer}>
                <Button2 text='No Soy'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 40
    },

    keyCont: {
        borderWidth: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .25,
    },

    inputContainer: {
        borderWidth: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .20
    },

    buttonContainer: {
        borderWidth: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .15
    },

    notContainer: {
        borderWidth: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .40
    },
    input: {
        borderWidth: 1,
        height: '40%',
        backgroundColor: 'red'
    },
    textInput: {
        borderWidth: 1
    }
})