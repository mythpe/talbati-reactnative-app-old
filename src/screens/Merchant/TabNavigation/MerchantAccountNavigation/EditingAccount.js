import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Input, Stack, Button} from 'native-base';
import {useTranslation} from 'react-i18next';

const EditingAccount = ({navigation}) => {
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
              placeholder={t('phonenumber')}
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
              placeholder={t('name')}
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
              placeholder={t('email')}
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
              placeholder={t('workingfields')}
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
              placeholder={t('address')}
              backgroundColor={'white'}
            />

            <View style={styles.smallcontainer}>
              <View style={styles.txtaround}>
                <Text style={styles.txt}>choose file</Text>
              </View>
              <Text style={styles.txt}>{t('merchantlogo')}</Text>
            </View>
            <Image
              source={require('../../../../images/Capture.png')}
              style={{
                height: 150,
                width: 300,
                borderWidth: 1,
                borderColor: '#E56B1F',
                marginVertical: 15,
              }}
            />
          </Stack>
          <Button
            onPress={() => navigation.goBack()}
            style={styles.firstBut}
            marginTop={15}
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
    backgroundColor: '#FBF9F9',
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

export default EditingAccount;
