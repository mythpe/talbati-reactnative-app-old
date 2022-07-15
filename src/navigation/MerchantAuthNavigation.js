// In App.js in a new project

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// the screens
import Login from '../screens/AuthMerchant/Login';
import SignUp from '../screens/AuthMerchant/SignUp';
import SignUpWithPhone from '../screens/AuthMerchant/SignUpWithPhone';
import VerfiyNumber from '../screens/AuthMerchant/VerfiyNumber';
import ForgetPassword from '../screens/AuthMerchant/ForgetPassword';
import MerchantTabNavigator from '../navigation/MerchantTabNavigator';
const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Logins" component={Login} />
      <Stack.Screen name="SignUps" component={SignUp} />
      <Stack.Screen name="SignUpWithPhones" component={SignUpWithPhone} />
      <Stack.Screen name="VerfiyNumbers" component={VerfiyNumber} />
      <Stack.Screen name="ForgetPasswords" component={ForgetPassword} />
      <Stack.Screen name="MerchantHome" component={MerchantTabNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
