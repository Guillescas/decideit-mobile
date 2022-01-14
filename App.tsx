import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import Dashboard from './src/Pages/Dashboard';

import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsIsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsIsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
