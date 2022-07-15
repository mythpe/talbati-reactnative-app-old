import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {Input, Button} from 'native-base';
import {useTranslation} from 'react-i18next';

const AccountSettings = ({navigation}) => {
  const {t} = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <PhoneInput
          withShadow
          defaultValue={phoneNumber}
          backgroundColor={'white'}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
          containerStyle={styles.phoneNumberInput}
          textContainerStyle={styles.phoneNumberInputtxt}
          defaultCode="EG"
        />

        <View style={styles.phoneNumberInputtxt1}>
          <Input
            w={{
              base: '87%',
            }}
            _text={{
              color: '#ECECEC',
            }}
            height={50}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('name')}
            style={styles.phoneNumberInputtxt}
            fontSize={14}
          />
        </View>
        <View style={styles.phoneNumberInputtxt1}>
          <Input
            w={{
              base: '87%',
            }}
            _text={{
              color: 'black',
            }}
            height={50}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('email')}
            style={styles.phoneNumberInputtxt}
            fontSize={14}
          />
        </View>
        <View style={styles.phoneNumberInputtxt1}>
          <Input
            w={{
              base: '87%',
            }}
            _text={{
              color: 'black',
            }}
            height={50}
            fontFamily={'Tajawal-Medium'}
            placeholder={t('birthday')}
            style={styles.phoneNumberInputtxt}
            fontSize={14}
          />
          <Button
            onPress={() => navigation.goBack()}
            style={styles.firstBut}
            size="sm"
            backgroundColor={'#E56B1F'}
            height={10}
            borderRadius={10}
            fontFamily={'Tajawal-Medium'}
            _text={{fontSize: 16, fontFamily: 'Tajawal-Medium'}}>
            {t('save')}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  inputWrapper: {
    marginTop: 15,
    marginHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumberInput: {
    height: 50,
    marginVertical: 10,
  },
  phoneNumberInputtxt: {
    backgroundColor: 'white',
    borderLeftWidth: 1,
    borderColor: '#ECECEC',
  },
  phoneNumberInputtxt1: {
    marginVertical: 10,
  },
  firstBut: {
    marginVertical: 35,
  },
});
