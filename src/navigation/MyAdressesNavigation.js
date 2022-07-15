import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// the screens
import MyAdresses from '../screens/TabNavigation/AccountNavigation/MyAdresses';
import MyAdressesDetails from '../screens/TabNavigation/AccountNavigation/MyAdresses/MyAdressesDetails';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';

const Stack = createNativeStackNavigator();

function MyAdressesNavigations() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="MyAdresses">
      <Stack.Screen
        name="MyAdresses"
        component={MyAdresses}
        options={{
          title: i18n.t('myadress'),
          headerTintColor: '#E56B1F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
        }}
      />
      <Stack.Screen
        name="MyAdressesDetails"
        component={MyAdressesDetails}
        options={{
          title: i18n.t('myadress'),
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

export default MyAdressesNavigations;
