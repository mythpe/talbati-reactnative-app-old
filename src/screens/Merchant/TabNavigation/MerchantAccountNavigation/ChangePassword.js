import {View, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Input, Stack, Button} from 'native-base';
import {useTranslation} from 'react-i18next';

const ChangePassword = ({navigation}) => {
  const [country, setCountry] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  const {t} = useTranslation();

  const {height} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{marginTop: 20, flex: 1}}>
          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              _text={{
                color: '#ECECEC',
              }}
              height={45}
              fontFamily={'Tajawal-Medium'}
              placeholder={t('oldpassword')}
              backgroundColor={'white'}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              _text={{
                color: '#ECECEC',
              }}
              height={45}
              fontFamily={'Tajawal-Medium'}
              placeholder={t('newpassword')}
              backgroundColor={'white'}
            />
          </Stack>
          <Button
            onPress={() => navigation.goBack()}
            style={styles.firstBut}
            marginTop={25}
            size="sm"
            backgroundColor={'#E56B1F'}
            _text={{fontSize: 14, fontFamily: 'Tajawal-Medium'}}>
            {t('save')}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
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
    fontFamily: 'Tajawal-Medium',
    fontSize: 14,
  },
  secBut: {
    marginTop: 15,
    fontSize: 14,
  },
  txt: {
    color: '#E56B1F',
    fontFamily: 'Tajawal-Medium',
    fontSize: 16,
  },
  txtaround: {
    backgroundColor: '#CCCCCC',
    borderRadius: 15,
    padding: 5,
    marginRight: 140,
  },
  smallcontainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 15,
  },
  txtaround2: {
    backgroundColor: '#CCCCCC',
    borderRadius: 15,
    padding: 5,
    marginRight: 60,
  },
});

export default ChangePassword;
