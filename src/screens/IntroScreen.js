import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, Center, Button} from 'native-base';
import {useTranslation} from 'react-i18next';

const IntroScreen = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Heading style={styles.heading} fontFamily={'Tajawal-Medium'}>
          {t('login')}
        </Heading>
      </View>

      <View>
        <Center style={styles.box} height={150}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
            resizeMode={'contain'}
          />
          <Button
            onPress={() => navigation.navigate('Login')}
            style={styles.btn}
            width={250}
            fontFamily={'Tajawal-Medium'}
            height={50}
            borderRadius={10}>
            {t('loginasauser')}
          </Button>
        </Center>
        <Center style={styles.box} marginTop={10}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
            resizeMode={'contain'}
          />
          <Button
            onPress={() => navigation.navigate('MerchantAuth')}
            style={styles.btn2}
            _text={{color: 'black'}}
            width={250}
            height={50}
            fontFamily={'Tajawal-Medium'}
            borderRadius={10}>
            {t('loginasmerchant')}
          </Button>
        </Center>
      </View>

      <Image
        style={styles.lastImg}
        source={require('../images/image-removebg.png')}
      />
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
    marginTop: 50,
    marginBottom: 40,
  },
  heading: {
    textAlign: 'center',
    color: '#E56B1F',
  },
  lastImg: {
    display: 'flex',
    alignContent: 'flex-end',
    marginTop: 20,
  },
  box: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#52006A',
  },
  btn: {
    backgroundColor: '#E56B1F',
  },
  btn2: {
    backgroundColor: '#F3F3F3',
  },
});
export default IntroScreen;
