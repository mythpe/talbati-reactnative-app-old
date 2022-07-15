//!? transulated done not all
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {Input, Avatar, Stack, Button, Pressable, Heading} from 'native-base';
import {useTranslation} from 'react-i18next';

const SignUpWithPhone = ({navigation}) => {
  const {t} = useTranslation();

  const {height} = useWindowDimensions();
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
            {t('newaccount1')}
          </Heading>
        </View>
        <Stack space={4} w="100%" alignItems="center">
          <Avatar
            width={100}
            height={100}
            backgroundColor={'white'}
            borderWidth={1}
            borderColor={'#E56B1F'}></Avatar>
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            _text={{
              color: '#ECECEC',
            }}
            height={35}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('phonenumber')}
          />
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            _text={{
              color: '#ECECEC',
            }}
            height={35}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('name')}
          />
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            _text={{
              color: '#ECECEC',
            }}
            height={35}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('email')}
          />
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            _text={{
              color: '#ECECEC',
            }}
            height={35}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('password')}
          />
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            _text={{
              color: '#ECECEC',
            }}
            height={35}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('birthday')}
          />
        </Stack>
        <View style={styles.clickContainer}>
          <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.click}> {t('loginnow')}</Text>
          </Pressable>
          <Text>{t('haveaccount')}</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('VerfiyNumber')}
          style={styles.firstBut}
          size="sm"
          backgroundColor={'#E56B1F'}
          _text={{fontSize: 14}}>
          {t('register')}
        </Button>
        <Button
          onPress={() => navigation.navigate('VerfiyNumber')}
          style={styles.secBut}
          size="sm"
          background={'#FBF9F9'}
          borderWidth={1}
          borderColor={'#FFE3D2'}
          _text={{color: '#E56B1F', fontSize: 14}}>
          {t('ignore')}
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FBF9F9',
    flex: 1,
    marginTop: -10,
  },
  logo: {
    width: 133,
    height: 117,
  },
  headerContainer: {},
  heading: {
    textAlign: 'center',
    color: '#E56B1F',
  },
  clickContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 25,
  },
  click: {
    color: '#2680EB',
    textDecorationLine: 'underline',
  },
  firstBut: {
    fontFamily: 'Tajawal',
    fontSize: 14,
  },
  secBut: {
    marginTop: 15,
    fontSize: 14,
  },
});

export default SignUpWithPhone;
