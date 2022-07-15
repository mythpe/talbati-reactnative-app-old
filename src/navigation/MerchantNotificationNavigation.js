import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// the screens
import Notification from '../screens/Merchant/TabNavigation/Notification';
import NotificationDetails from '../screens/Merchant/TabNavigation/MerchantsNotificationNavigation/NotificationDetails';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
const Stack = createNativeStackNavigator();

function MerchantOrderDetails() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="MerchantNotification">
      <Stack.Screen
        name="MerchantNotification"
        component={Notification}
        options={{
          title: i18n.t('noties'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="MerchantNotificationDetails"
        component={NotificationDetails}
        options={{
          title: i18n.t('noties'),
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
