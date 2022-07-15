// In App.js in a new project

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// the screens
import MyAccount from '../screens/TabNavigation/MyAccount';
import AccountSettings from '../screens/TabNavigation/AccountNavigation/AccountSettings';
import LangSettings from '../screens/TabNavigation/AccountNavigation/LangSettings';
import UsingConditions from '../screens/TabNavigation/AccountNavigation/UsingConditions';
import PrivacySettings from '../screens/TabNavigation/AccountNavigation/PrivacySettings';
import AboutApp from '../screens/TabNavigation/AccountNavigation/AboutApp';
import Notifications from '../screens/TabNavigation/AccountNavigation/Notifications';
// import MyAdresses from '../screens/TabNavigation/AccountNavigation/MyAdresses';
import MyAdressesNavigations from './MyAdressesNavigation';
import RatingApp from '../screens/TabNavigation/AccountNavigation/RatingApp';

const Stack = createNativeStackNavigator();
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
function AccountNavigation() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName="MyAccount">
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          title: i18n.t('myaccount'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          title: i18n.t('accountdetails'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="LangSettings"
        component={LangSettings}
        options={{
          title: i18n.t('langsetting'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="UsingConditions"
        component={UsingConditions}
        options={{
          title: i18n.t('usingterms'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="PrivacySettings"
        component={PrivacySettings}
        options={{
          title: i18n.t('privacyterms'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="AboutApp"
        component={AboutApp}
        options={{
          title: i18n.t('aboutapp'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: i18n.t('notifications'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="MyAdresses"
        component={MyAdressesNavigations}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RatingApp"
        component={RatingApp}
        options={{
          title: i18n.t('rateapp'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
