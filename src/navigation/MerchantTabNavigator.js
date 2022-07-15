import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// the screens
// import Home from '../screens/Merchant/TabNavigation/Home';
import MerchantHomeNavigation from './MerchantHomeNavigation';
// import Orders from '../screens/Merchant/TabNavigation/Orders';
import MerchantOrderDetails from './MerchantsOrdersNavigations';
// import Notification from '../screens/Merchant/TabNavigation/Notification';
import MercantNotificationsNavigations from './MerchantNotificationNavigation';
// import Myaccount from '../screens/Merchant/TabNavigation/Myaccount';
import MerchantAccountNavigation from './MerchantAccountNavigation';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';

const Tab = createBottomTabNavigator();

export default function MerchantTabNavigation() {
  const {t} = useTranslation();

  // screenOptions={{headerShown: false}}
  return (
    <Tab.Navigator
      initialRouteName="Homess"
      screenOptions={{
        tabBarActiveTintColor: '#E56B1F',
      }}>
      <Tab.Screen
        name="accountss"
        component={MerchantAccountNavigation}
        options={{
          headerStyle: {
            height: 50,
          },
          tabBarLabel: i18n.t('myaccount'),
          headerShown: false,
          tabBarOptions: {showIcon: true},
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/checkout.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="notificationss"
        component={MercantNotificationsNavigations}
        options={{
          headerStyle: {
            height: 50,
          },
          tabBarLabel: i18n.t('notifications'),
          headerShown: false,
          tabBarOptions: {showIcon: true},
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/checkout.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Orderss"
        component={MerchantOrderDetails}
        options={{
          headerStyle: {
            height: 50,
          },
          tabBarLabel: i18n.t('orders'),
          headerShown: false,
          tabBarOptions: {showIcon: true},
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/checkout.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Homess"
        component={MerchantHomeNavigation}
        options={{
          headerStyle: {
            height: 50,
          },
          tabBarLabel: i18n.t('home'),
          headerShown: false,
          tabBarOptions: {showIcon: true},
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/home.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
