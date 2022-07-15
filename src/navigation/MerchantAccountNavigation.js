// In App.js in a new project

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// the screens
import MyAccount from '../screens/Merchant/TabNavigation/MyAccount';
import EditingAccount from '../screens/Merchant/TabNavigation/MerchantAccountNavigation/EditingAccount';
import ChangePassword from '../screens/Merchant/TabNavigation/MerchantAccountNavigation/ChangePassword';
import NumberOfProducts from '../screens/Merchant/TabNavigation/MerchantAccountNavigation/NumberOfProducts';
import Offers from '../screens/Merchant/TabNavigation/MerchantAccountNavigation/Offers';
import PrivacySettings from '../screens/Merchant/TabNavigation/MerchantAccountNavigation/PrivacySettings';
import RatingApp from '../screens/Merchant/TabNavigation/MerchantAccountNavigation/RatingApp';
import UsingCondition from '../screens/Merchant/TabNavigation/MerchantAccountNavigation/UsingConditions';
const Stack = createNativeStackNavigator();
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
function MerchantAccountNavigation() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName="MyAccounts">
      <Stack.Screen
        name="MyAccounts"
        component={MyAccount}
        options={{
          title: i18n.t('MyAccount'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="EditingAccounts"
        component={EditingAccount}
        options={{
          title: i18n.t('editaccount'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="ChangePasswords"
        component={ChangePassword}
        options={{
          title: i18n.t('editpassword'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="NumberOfProductss"
        component={NumberOfProducts}
        options={{
          title: i18n.t('products'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="Offerss"
        component={Offers}
        options={{
          title: i18n.t('Offers'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="PrivacySettingss"
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
        name="RatingApps"
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
      <Stack.Screen
        name="UsingConditions"
        component={UsingCondition}
        options={{
          title: i18n.t('usingterms'),
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

export default MerchantAccountNavigation;
