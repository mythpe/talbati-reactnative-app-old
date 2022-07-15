import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, Heading} from 'native-base';
import {useTranslation} from 'react-i18next';

const WelcomeScreen = ({navigation}) => {
  const {t} = useTranslation();

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
            {t('signup')}
          </Heading>
        </View>
        <Button
          onPress={() => navigation.navigate('IntroScreen')}
          colorScheme="red"
          size="md"
          width={350}
          borderRadius={10}
          height={50}>
          <View style={styles.uniBtn}>
            <Image
              style={styles.btn1Logo}
              source={require('../images/google.png')}
            />
            <Text style={styles.btn1Text}>{t('loginwithgoogle')}</Text>
          </View>
        </Button>
        <View style={styles.divider}></View>
        <Button
          onPress={() => navigation.navigate('IntroScreen')}
          size="md"
          width={350}
          borderRadius={10}
          height={50}
          backgroundColor={'#000000'}>
          <View style={styles.uniBtn}>
            <Image
              style={styles.btn1Logo}
              source={require('../images/apple.png')}
            />
            <Text style={styles.btn1Text}>{t('loginwithapple')}</Text>
          </View>
        </Button>

        <View style={styles.line}></View>
        <Button
          onPress={() => navigation.navigate('IntroScreen')}
          size="md"
          width={350}
          borderRadius={10}
          height={50}
          backgroundColor={'#05D605'}>
          <View style={styles.uniBtn}>
            <Image
              style={styles.btn1Logo}
              source={require('../images/mobile-alt.png')}
            />
            <Text style={styles.btn1Text}>{t('loginwithphonenumber')}</Text>
          </View>
        </Button>
      </View>
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
    marginBottom: 40,
  },
  heading: {
    textAlign: 'center',
    color: '#E56B1F',
  },
  divider: {
    marginTop: 20,
  },
  clickContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 25,
  },
  click1: {
    color: '#E56B1F',
  },
  click2: {
    color: '#2680EB',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  uniBtn: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  line: {
    marginVertical: 25,
    height: 1,
    backgroundColor: '#e6e6e6',
  },
  btn1Text: {
    color: 'white',
  },
  btn1Logo: {
    marginHorizontal: 15,
  },
});

export default WelcomeScreen;
