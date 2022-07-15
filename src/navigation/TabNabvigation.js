import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// the screens
import Home from '../screens/TabNavigation/Home';
import HomeHeader from '../screens/TabNavigation/HomeHeader';
// import Merchants from '../screens/TabNavigation/Merchants';
import BuyingNavigation from './BuyingNavigation';
import AccountingNavigation from './AccountNavigation';
// import MyAccount from '../screens/TabNavigation/MyAccount';
import OrdersNavigation from '../navigation/OrdersNavigation';
// import Orders from '../screens/TabNavigation/Orders';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const {t} = useTranslation();

  // screenOptions={{headerShown: false}}
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#E56B1F',
      }}>
      <Tab.Screen
        options={{
          headerStyle: {
            height: 50,
          },
          title: i18n.t('myaccount'),
          headerShown: false,
          tabBarOptions: {showIcon: true},
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/avatar.png')}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
        }}
        name="MyAccount1"
        component={AccountingNavigation}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            height: 130,
          },
          title: i18n.t('orders'),
          headerShown: false,
          tabBarOptions: {showIcon: true},
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/checkout.png')}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
        }}
        name="Orders"
        component={OrdersNavigation}
      />

      <Tab.Screen
        options={{
          headerStyle: {
            height: 130,
          },
          title: i18n.t('merchants'),
          headerShown: false,
          tabBarOptions: {showIcon: true},
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/shop.png')}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
        }}
        name="Merchants"
        component={BuyingNavigation}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            height: 130,
          },
          headerTitleStyle: {
            fontFamily: 'Tajawal-Medium',
          },
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Tajawal-Medium',
          },
          title: i18n.t('home'),
          headerTitle: () => <HomeHeader />,
          tabBarOptions: {showIcon: true},
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
