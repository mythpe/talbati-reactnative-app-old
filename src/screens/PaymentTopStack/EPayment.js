import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const EPayment = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.CardPart}>
          <Text style={styles.CardParttxt}>{t('firstepaymenttext')}</Text>
          <Text style={styles.dot}>{'\u2022'}</Text>
        </View>
        <View style={styles.CardPart}>
          <Text style={styles.CardParttxt}>{t('secontpaymenttext')}</Text>
          <Text style={styles.dot}>{'\u2022'}</Text>
        </View>
        <View style={styles.CardPart}>
          <Text style={styles.CardParttxt}>{t('thirdpaymenttext')}</Text>
          <Text style={styles.dot}>{'\u2022'}</Text>
        </View>
      </View>
    </View>
  );
};

export default EPayment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    flex: 1,
  },
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 16,
    color: '#E56B1F',
    fontFamily: 'Tajawal-Medium',
  },
  line: {
    marginTop: 2,
    marginBottom: 5,
    height: 2,
    backgroundColor: '#e6e6e6',
  },
  CardPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  CardParttxt: {
    fontSize: 16,
    color: '#555555',
    marginRight: 15,
    fontFamily: 'Tajawal-Medium',
    lineHeight: 25,
  },
  dot: {
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
  },
});
