import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button} from 'react-native';
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
                <Text style={styles.title}>Ingresa tu teléfono, e-mail o {'\n'}usuario</Text>
                <Text style={styles.labelEmail}>Teléfono, e-mail o usuario</Text>
                <TextInput style={styles.textInputStyle} />
                <View style={styles.buttonCont}>
                    <Button1 text='Ingresar' onPress={onPress}/>
                    <Button2 text='Crear cuenta' />
                </View>
                {/* <Button title={"Press"}/> */}
            </View>
            <View style={styles.containerButtom}>
                <Text style={styles.textHelpStyle}>Necesito ayuda para ingresar</Text>
                <Divider style={{marginHorizontal:1, marginBottom: 12}}/>
                <Text style={styles.textPrivacyStyle}>Cómo cuidamos tu privacidad</Text>
                <Text style={styles.textCopytightStyle}>Copyright 1999-2021 DeRemate.com de México S. de R.L de C.V</Text>
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
        // padding: 20,
    },
    containerTop:{
        height: Dimensions.get('window').height*.65,
        margin: 20,
        // backgroundColor: 'red',
        // borderBottomWidth: 0.4,
        // borderBottomColor: 'gray',
        // justifyContent: 'space-between',
    },
    title:{
        fontSize: 30,
        marginBottom: 40,
        fontFamily: 'Proxima-nova'
    },
    labelEmail:{
        padding: 4,
        fontFamily: 'Proxima-nova',
        fontSize: 17
    },
    textInputStyle:{
        borderWidth: 0.5,
        borderRadius: 5,
        height: 42,
        marginBottom: 45,
    },
    containerButtom:{
        height: Dimensions.get('window').height*.35,
        // backgroundColor: 'yellow',
        // alignItems: 'center',
    },
    textHelpStyle:{
        color: '#4886DD',
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
    },
    textPrivacyStyle:{
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10
    },
    textCopytightStyle:{
        fontSize: 11,
        textAlign: 'center',
        color: 'grey',
    },
    buttonCont: {
        width: '100%',
        height: '20%',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})