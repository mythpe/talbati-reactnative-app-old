import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const NumberOfProducts = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../../images/image-removebg-preview(11).png')}
        />
      </View>
      <View
        style={{width: 280, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.txt}>
          {t('addingproducts')}
          {t('soon')}
        </Text>
      </View>
    </View>
  );
};

export default NumberOfProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 20,
    color: '#555555',
    lineHeight: 35,
  },
});
