import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitLoginScreen from './Screens/InitLoginScreen';
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

import AppNavigation from './Navigation/AppNavigation';


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  console.log(fontLoaded)

    const fetchFonts = () =>{

        return Font.loadAsync({
            'Proxima-nova': require('./assets/Fonts/proxima-nova.otf')
        })
    }
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                  setFontLoaded(true);
                }}
                onError={console.warn}
            />
        );
    }

  return (
    <AppNavigation/>
  );
}
