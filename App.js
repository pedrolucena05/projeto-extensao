import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/Components/Pages/Home';
import PontoTuristico from './assets/Components/Pages/PontoTuristico';
import AppLoading from 'expo-app-loading'; // Importe o AppLoading para manter a tela de carregamento
import Fonts from './assets/Components/fonts/Fonts';


const Stack = createNativeStackNavigator();

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncFonts = async () => {
      await Fonts();
      setFontsLoaded(true);
    };

    loadAsyncFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />; // Exiba uma tela de carregamento até que as fontes sejam carregadas
  }
  
  return (
    <>
      <StatusBar
        backgroundColor="#355F3A"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          
          <Stack.Screen
            name="PontoTuristico"
            options={{ headerShown: false }}
            component={PontoTuristico}
          />
          

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
