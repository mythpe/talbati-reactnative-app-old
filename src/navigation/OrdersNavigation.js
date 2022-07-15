import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// the screens
import Orders from '../screens/TabNavigation/Orders';
import OrderDetails from '../screens/TabNavigation/OrderNavigation/OrderDetails';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
const Stack = createNativeStackNavigator();

function BuyingNavigation() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName="orders">
      <Stack.Screen
        name="orders"
        component={Orders}
        options={{
          title: i18n.t('orders'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="OrderDetails"
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

export default BuyingNavigation;
