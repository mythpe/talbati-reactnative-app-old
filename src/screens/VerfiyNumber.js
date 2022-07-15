import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {Input, Stack, Button, Pressable, Heading} from 'native-base';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useTranslation} from 'react-i18next';

const VerfiyNumber = ({navigation}) => {
  const {t} = useTranslation();

  const [number, setNumber] = useState('01555560534');
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo.png')}
        style={styles.logo}
        resizeMode={'contain'}
      />
      <View>
        <View style={styles.headerContainer}>
          <Heading style={styles.heading} fontFamily={'Tajawal'}>
            {t('code')}
          </Heading>
        </View>
        <Stack space={4} w="100%" alignItems="center">
          <Text>{t('enteryourcode')} </Text>
          <Text>{number}</Text>
          <Input width={350} borderRadius={10} type="number" />
          {/* <OTPInputView pinCount={4} /> */}
        </Stack>
        <View style={styles.clickContainer}>
          <Pressable onPress={() => console.warn('send again')}>
            <Text style={styles.click}>{t('resendyourcode')}</Text>
          </Pressable>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate('Login')}
        style={styles.But}
        size="sm"
        width={350}
        height={10}
        marginTop={45}
        borderRadius={10}
        backgroundColor={'#E56B1F'}
        fontFamily={'Tajawal-Medium'}
        _text={{fontSize: 15}}>
        {t('done')}
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FBF9F9',
  },
  logo: {
    width: 133,
    height: 117,
  },
  headerContainer: {
    marginVertical: 20,
    marginBottom: 20,
  },
  heading: {
    textAlign: 'center',
    color: '#E56B1F',
    fontFamily: 'Tajawal-Bold',
  },
  clickContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 25,
  },
  click: {
    color: '#402CF3',
    fontSize: 15,
    fontFamily: 'Tajawal-Medium',
  },
});

export default VerfiyNumber;
