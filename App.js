import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  Input,
  Icon,
  Center,
  NativeBaseProvider,
  extendTheme,
} from 'native-base';
// navigation setup
import {NavigationContainer} from '@react-navigation/native';
// multi languages setup
import {tranulate} from 'react-i18next';
import './src/i18n';
// the screens
import LoadingScreen from './src/screens/LoadingScreen';
import IntroScreen from './src/screens/IntroScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import VerfiyNumber from './src/screens/VerfiyNumber';
import ForgetPassword from './src/screens/ForgetPassword';
// the navigations
import AuthNavigation from './src/navigation/AuthNavigation';
// the tab navigation
import TabNavigation from './src/navigation/TabNabvigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: 'Tajawal',
  },
});

export default App;
