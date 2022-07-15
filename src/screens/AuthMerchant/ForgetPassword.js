import {View, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Input, Stack, Button, Heading} from 'native-base';
import {useTranslation} from 'react-i18next';

const ForgetPassword = () => {
  const {t} = useTranslation();
  const [number, setNumber] = useState();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/logo.png')}
        style={styles.logo}
        resizeMode={'contain'}
      />
      <View>
        <View style={styles.headerContainer}>
          <Heading style={styles.heading} fontFamily={'Tajawal'}>
            {t('forgetpassword')}
          </Heading>
        </View>
        <Stack space={4} w="100%" alignItems="center">
          <Input
            _text={{
              fontSize: 15,
            }}
            width={350}
            borderRadius={10}
            type="number"
            placeholder={t('phonenumber')}
          />
        </Stack>
      </View>
      <Button
        style={styles.But}
        size="sm"
        width={350}
        height={10}
        marginTop={45}
        borderRadius={10}
        backgroundColor={'#E56B1F'}
        _text={{fontSize: 15}}>
        {t('send')}
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
  },
});

export default ForgetPassword;
