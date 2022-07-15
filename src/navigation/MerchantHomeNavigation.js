// In App.js in a new project

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// the screens
import Home from '../screens/Merchant/TabNavigation/Home';
import NewOrders from '../screens/Merchant/TabNavigation/MerchantHomeNavigation/NewOrders';
import ConfirmOrder from '../screens/Merchant/TabNavigation/MerchantHomeNavigation/ConfirmOrder';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';

const Stack = createNativeStackNavigator();

function MerchantHomeNavigation() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName="HomeMerchant">
      <Stack.Screen
        name="HomeMerchant"
        component={Home}
        options={{
          headerStyle: {
            height: 50,
          },
          title: i18n.t('Main'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="HomeNewOrdersMerchant"
        component={NewOrders}
        options={{
          headerStyle: {
            height: 50,
          },
          title: i18n.t('orderdetails'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="HomeConfirmOrdersMerchant"
        ض
        component={ConfirmOrder}
        options={{
          headerStyle: {
            height: 50,
          },
          title: i18n.t('orderconfirm'),
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

export default MerchantHomeNavigation;
