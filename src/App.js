import 'react-native-gesture-handler';
import React from 'react';
import { BlogProvider } from './context/BlogContext';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Archivo_400Regular,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <BlogProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor="#eee" />
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
