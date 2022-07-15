import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// importing the header
import HomeHeader from '../screens/TabNavigation/HomeHeader';
// the screens
import merchants from '../screens/TabNavigation/Merchants';
import ShopDetail from '../screens/BuyingStack/ShopDetail';
import ContinueShop from '../screens/BuyingStack/ContinueShop';
import KeepShop from '../screens/BuyingStack/KeepShop';
import Payment from '../screens/BuyingStack/Payment';
import GetLocation from '../screens/BuyingStack/GetLocation';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
const Stack = createNativeStackNavigator();

function BuyingNavigation() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName="merchants">
      <Stack.Screen
        name="merchants"
        component={merchants}
        options={{
          title: i18n.t('merchants'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
          // headerTitle: () => <HomeHeader title={'merchants'} />,
        }}
      />
      <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContinueShop"
        component={ContinueShop}
        options={{
          title: i18n.t('confirmbuy'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="KeepShop"
        component={KeepShop}
        options={{
          title: i18n.t('confirmbuy'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="paymentStack"
        component={Payment}
        options={{
          title: i18n.t('payy'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="GetLocation"
        component={GetLocation}
        options={{
          title: i18n.t('develeryadress'),
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

export default BuyingNavigation;
