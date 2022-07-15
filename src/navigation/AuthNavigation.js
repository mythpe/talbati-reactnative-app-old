// In App.js in a new project

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// the screens
import IntroScreen from '../screens/IntroScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SignUpWithPhone from '../screens/SignUpWithPhone';
import VerfiyNumber from '../screens/VerfiyNumber';
import ForgetPassword from '../screens/ForgetPassword';
import MerchantAuthNavigation from '../navigation/MerchantAuthNavigation';
import TabNavigation from './TabNabvigation';
const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpWithPhone" component={SignUpWithPhone} />
      <Stack.Screen name="VerfiyNumber" component={VerfiyNumber} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="SellerHome" component={TabNavigation} />
      <Stack.Screen name="MerchantAuth" component={MerchantAuthNavigation} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
