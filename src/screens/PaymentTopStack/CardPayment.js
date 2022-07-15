import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Input, Stack} from 'native-base';
import {useTranslation} from 'react-i18next';

const CardPayment = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      {/* first images */}
      <View style={styles.cardcontainer}>
        <Image
          source={require('../../images/Visa.png')}
          width={60}
          height={25}
        />
        <Image
          source={require('../../images/mastercard.png')}
          width={60}
          height={25}
        />
        <Image
          source={require('../../images/sadad.png')}
          width={60}
          height={25}
        />
      </View>
      {/* end of payment images */}
      <View>
        <Stack space={4} w="100%" alignItems="center">
          <View style={styles.firstrowInput}>
            <Text style={styles.inputLabel}>{t('cardnumber')}</Text>
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              placeholderTextColor={'#FFE3D2'}
              borderColor={'#FFE3D2'}
              borderWidth={'1'}
              fontFamily={'Tajawal'}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </View>
          <View style={styles.rowInput}>
            <View>
              <Text style={styles.inputLabel}>{t('expirydate')}</Text>
              <Input
                placeholderTextColor={'#FFE3D2'}
                borderColor={'#FFE3D2'}
                borderWidth={'1'}
                fontFamily={'Tajawal-Medium'}
                placeholder="MM\YY"
              />
            </View>
            <View style={styles.secinput}>
              <Text style={styles.inputLabel}>{t('cvv')}</Text>
              <Input
                placeholderTextColor={'#FFE3D2'}
                borderColor={'#FFE3D2'}
                borderWidth={'1'}
                fontFamily={'Tajawal'}
                placeholder="XXX"
              />
            </View>
          </View>
          <View>
            <Text style={styles.inputLabel}>{t('expirydate')}</Text>
            <Input
              w={{
                base: '75%',
              }}
              marginBottom={10}
              placeholderTextColor={'#FFE3D2'}
              borderColor={'#FFE3D2'}
              borderWidth={'1'}
              fontFamily={'Tajawal'}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </View>
        </Stack>
      </View>
    </View>
  );
};

export default CardPayment;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  cardcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 38, //for all
    marginVertical: 5,
  },
  inputLabel: {
    fontSize: 16,
    color: '#555555',
    fontFamily: 'Tajawal-Medium',
  },
  firstrowInput: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rowInput: {
    display: 'flex',
    flexDirection: 'row',
  },
  secinput: {
    marginLeft: 100,
    width: 100,
  },
});
