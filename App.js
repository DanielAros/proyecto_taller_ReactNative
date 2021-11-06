import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import InitLoginScreen from './Screens/InitLoginScreen';
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import { createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import LoginValidation from './Navigation/LogValidation';
import authReducer from './store/reducers/authReducer';
import cartReducer from './store/reducers/cartReducer';

import AppNavigation from './Navigation/AppNavigation';

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
})
const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
)


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  console.log(fontLoaded)

  const hp = Dimensions.get('window').height
  const wp = Dimensions.get('window').width
  console.log("hp"+hp+" - wp:"+wp)

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
    <Provider store={store}>
      <LoginValidation/>
    </Provider>
  );
}
