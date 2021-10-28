import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Button1 from '../assets/Buttons/Button1';
import Button2 from '../assets/Buttons/Button2';


export const InitUserScreen = (props) => {
    const onPress = () =>{
        props.navigation.navigate('PassScreen');
    }
    return(
        <View style={styles.container}> 
            <View style={styles.containerTop}>
                <Text style={styles.title}>Ingresa tu teléfono, e-mail o usuario</Text>
                <Text style={styles.labelEmail}>Teléfono, e-mail o usuario</Text>
                <TextInput style={styles.textInputStyle} />
                <View style={styles.buttonCont}>
                    <Button1 text='Ingresar' onPress={onPress}/>
                    <Button2 text='Crear cuenta' />
                </View>
            </View>
            <View style={styles.containerButtom}>
                <Text style={styles.textHelpStyle}>Necesito ayuda para ingresar</Text>
                <Divider style={{marginHorizontal:1, marginBottom: 12}}/>
                <View style={styles.containterPrivacy}>
                    <Text style={styles.textPrivacyStyle}>Cómo cuidamos tu privacidad</Text>
                    <Text style={styles.textCopytightStyle}>Copyright 1999-2021 DeRemate.com de México S. de R.L de C.V</Text>
                </View>
            </View>
        </View>
    )
}

// export default InitUserScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        //padding: 20,
    },
    containerTop:{
        height: '65%',
        //margin: 20,
        paddingLeft: 16,
        paddingRight: 16,
        //backgroundColor: 'red',
        // borderBottomWidth: 0.4,
        // borderBottomColor: 'gray',
        // justifyContent: 'space-between',
    },
    title:{
        fontSize: hp('4%'),
        marginBottom: 40,
        fontFamily: 'Proxima-nova'
    },
    labelEmail:{
        padding: 4,
        fontFamily: 'Proxima-nova',
        fontSize: hp('2.6%')
    },
    textInputStyle:{
        borderWidth: 0.3,
        borderRadius: 3,
        height: 42,
        marginBottom: 45,
        fontSize: 20,
        fontFamily: 'Proxima-nova',
        padding: 10
    },
    containerButtom:{
        height: '35%',
        //backgroundColor: 'yellow',
        justifyContent: 'flex-end'
        // alignItems: 'center',
    },
    textHelpStyle:{
        color: '#4886DD',
        fontSize: hp('3%'),
        marginBottom: 30,
        textAlign: 'center',
        fontFamily: 'Proxima-nova'
    },
    containterPrivacy:{
        width: ('100%'),
        padding: 11
    },
    textPrivacyStyle:{
        fontSize: hp('2.4%'),
        textAlign: 'center',
        marginBottom: 5,
        fontFamily: 'Proxima-nova'
    },
    textCopytightStyle:{
        fontSize: hp('1.8%'),
        textAlign: 'center',
        color: 'grey',
        fontFamily: 'Proxima-nova'
    },
    buttonCont: {
        width: '100%',
    }
})