import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// the screens
import CardPayment from '../screens/PaymentTopStack/CardPayment';
import EPayment from '../screens/PaymentTopStack/EPayment';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
const Tab = createMaterialTopTabNavigator();

function PaymentTopNavigation() {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="first"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#E56B1F',
        },
        tabBarActiveTintColor: '#E56B1F',
        tabBarInactiveTintColor: '#555555',
        tabBarPressColor: 'white',
      }}>
      <Tab.Screen
        name="second"
        component={EPayment}
        options={{
          title: i18n.t('paymentwithpocket'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Tab.Screen
        name="first"
        component={CardPayment}
        options={{
          title: i18n.t('paymentwithvisa'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default PaymentTopNavigation;
