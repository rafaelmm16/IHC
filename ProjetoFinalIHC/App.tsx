import React from 'react';

import { useFonts } from 'expo-font';
import { Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto'
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium, 
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />     
  );
}


