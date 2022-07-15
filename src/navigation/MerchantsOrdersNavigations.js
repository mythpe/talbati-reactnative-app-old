import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// importing the header
import HomeHeader from '../screens/TabNavigation/HomeHeader';
// the screens
import Orders from '../screens/Merchant/TabNavigation/Orders';
import OrderDetails from '../screens/Merchant/TabNavigation/MerchantsOrdersNavigation/OrdersDetails';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';

const Stack = createNativeStackNavigator();

function MerchantOrderDetails() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="orders">
      <Stack.Screen
        name="Merchantorders"
        component={Orders}
        options={{
          title: i18n.t('Orders'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="MerchantOrderDetails"
        component={OrderDetails}
        options={{
          title: i18n.t('ordersdetails'),
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

export default MerchantOrderDetails;
