import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button1 from '../assets/Buttons/Button1';
import Button2 from '../assets/Buttons/Button2';
import {useDispatch} from "react-redux";
import * as authAction from "../store/actions/authAction";

export const InitPassScreen = (props) => {
    /*const onPress = () =>{
        props.navigation.navigate('HomeScreen');
    }*/
    const {usuario} = props.route.params;
    
    //console.log(usuario);
    
    const [password, setPassword] = useState(null);
    const [disable, setDisable] = useState(true);

    const dispatch = useDispatch();
    const onClick = () =>{
        try {
            console.log(usuario, password)
            usuario && password ?
                dispatch(authAction.tryLogin(usuario, password))
            :
                Alert.alert("Error", "Campos vacios", [{text:'ok'}])
        }catch(e){
            Alert.alert("Error", e.toString(), [{text:'ok'}])
        }
    }

    const validatePassword = (password) =>{
        //console.log(password.length)
        if(password.length >= 6){
            setPassword(password)
            console.log(password)
            setDisable(false)
        }else{
            setPassword(null)
            console.log('null')
            setDisable(true)
        }
    }


    return(
        <View style={styles.container}> 
            <View style={styles.containerTop}>
                <Text style={styles.title}>Ahora, tu clave de Mercado Libre</Text>
                <Text style={styles.labelClave}>Clave</Text>
                <View style={styles.textInputStyle}>
                    <TextInput style={styles.inputCont}
                        onChangeText={txt => validatePassword(txt)}
                    />
                    <View style={styles.mostContainer}>
                        <Button2 text='Mostrar' />
                    </View>
                    
                </View>
                
                <View style={styles.buttonCont}>
                    <View style={styles.but1Cont}>
                        {
                            disable ?
                                <Button1 text='Ingresar'/>
                            :
                                <Button1 text='Ingresar' onPress={onClick}/>
                        }
                    </View>
                    <View style={styles.but2Cont}>
                        <Button2 text='No sé mi clave' />
                    </View>
                </View>
                {/* <Button title={"Press"}/> */}
            </View>
            <View style={styles.containerButtom}>
                <Text style={styles.textHelpStyle}>No soy</Text>
            </View>
        </View>
    )
}

// export default InitPassScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        // borderWidth: 1
    },
    containerTop:{
        height: hp('65%'),
        // margin: 20,
        // borderWid    th: 1
    },
    title:{
        fontSize: 30,
        marginBottom: 40,
        fontFamily: 'Proxima-nova'
    },
    labelClave:{
        padding: 4,
        fontFamily: 'Proxima-nova',
        fontSize: 17
    },
    textInputStyle:{
        borderWidth: 1,
        borderRadius: 5,
        height: '8%',
        marginBottom: 45,
        alignContent: 'flex-end',
        flexDirection:'row',
    },
    inputCont: {
        width: '75%',
        fontSize: hp('2%'),
        fontFamily: 'Proxima-nova',
        padding: 5
    },
    containerButtom:{
        height: hp('23%'),
        padding: 10,
        // backgroundColor: 'red',
        justifyContent:'flex-end'
    },
    textHelpStyle:{
        color: '#4886DD',
        fontSize: 18,
        marginBottom: 30,
        fontFamily:'Proxima-nova'
      //  textAlign: 'center',
    },
    buttonCont: {
        width: '100%',
        height: '30%',
        // borderWidth: 1,
        // margin:10
    },
    but1Cont: {
        height: '30%',
        width: '100%',
        marginBottom: 10
    },
    but2Cont: {
        height: '30%',
        width: '100%',
        // borderWidth: 1
    },
    mostContainer: {
        width: '25%',
        height: '95%',
        // borderWidth: 1
    }
})