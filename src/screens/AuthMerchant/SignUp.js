import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  Input,
  Avatar,
  Stack,
  Button,
  Pressable,
  Heading,
  Select,
} from 'native-base';
import {useTranslation} from 'react-i18next';

const SignUp = ({navigation}) => {
  const [gender, setGender] = useState('male');
  const [country, setCountry] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  const {t} = useTranslation();

  const {height} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../images/logo.png')}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <View>
          <View style={styles.headerContainer}>
            <Heading style={styles.heading} fontFamily={'Tajawal-Medium'}>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Pressable
                style={
                  gender === 'female' && {
                    borderColor: '#E56B1F',
                    borderWidth: 1,
                  }
                }
                onPress={() => setGender('female')}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 150,
                    height: 30,
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontFamily: 'Tajawal-Medium',
                      fontSize: 14,
                    }}>
                    {t('female')}
                  </Text>
                  <Image
                    source={require('../../images/Icononic-ios-woman.png')}
                    style={{
                      height: 25,
                      marginTop: 5,
                      marginRight: 15,
                      marginLeft: 15,
                      width: 10,
                    }}
                  />
                </View>
              </Pressable>
              <Pressable
                style={
                  gender === 'male' && {
                    borderColor: '#E56B1F',
                    borderWidth: 1,
                  }
                }
                onPress={() => setGender('male')}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 150,
                    height: 30,
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontFamily: 'Tajawal-Medium',
                      fontSize: 14,
                    }}>
                    {t('male')}
                  </Text>
                  <Image
                    source={require('../../images/Icononic-ios-woman.png')}
                    style={{
                      height: 25,
                      marginTop: 5,
                      marginRight: 15,
                      marginLeft: 15,
                      width: 10,
                    }}
                  />
                </View>
              </Pressable>
            </View>
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
              placeholder={t('workingfields')}
            />
            <Select
              selectedValue={country}
              minWidth="310"
              accessibilityLabel="Choose country"
              placeholder={t('country')}
              mt={1}
              onValueChange={itemValue => setCountry(itemValue)}>
              <Select.Item label="egypt" value="eg" />
              <Select.Item label="saudi arabia" value="sa" />
              <Select.Item label="UAE" value="uae" />
            </Select>
            <Select
              selectedValue={district}
              minWidth="310"
              accessibilityLabel="Choose district"
              placeholder={t('region')}
              mt={1}
              onValueChange={itemValue => setDistrict(itemValue)}>
              <Select.Item label="egypt" value="eg" />
              <Select.Item label="saudi arabia" value="sa" />
              <Select.Item label="UAE" value="uae" />
            </Select>
            <Select
              selectedValue={city}
              minWidth="310"
              accessibilityLabel="Choose city"
              placeholder={t('city')}
              mt={1}
              onValueChange={itemValue => setCity(itemValue)}>
              <Select.Item label="egypt" value="eg" />
              <Select.Item label="saudi arabia" value="sa" />
              <Select.Item label="UAE" value="uae" />
            </Select>
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
              placeholder={t('workdays')}
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
              placeholder={t('openfrom')}
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
              placeholder={t('closefrom')}
            />
            <View style={styles.smallcontainer}>
              <View style={styles.txtaround}>
                <Text style={styles.txt}>choose file</Text>
              </View>

              <Text style={styles.txt}>{t('merchantlogoo')}</Text>
            </View>
            <View style={styles.smallcontainer}>
              <View style={styles.txtaround2}>
                <Text style={styles.txt}>choose file</Text>
              </View>

              <Text style={styles.txt}>{t('picoflicencemerchant')}</Text>
            </View>
            <Image
              source={require('../../images/Capture.png')}
              style={{
                height: 150,
                width: 300,
                borderWidth: 1,
                borderColor: '#E56B1F',
              }}
            />
          </Stack>

          <Button
            onPress={() => navigation.navigate('VerfiyNumbers')}
            style={styles.firstBut}
            marginTop={15}
            size="sm"
            backgroundColor={'#E56B1F'}
            _text={{fontSize: 14}}>
            {t('register')}
          </Button>
          <View style={styles.clickContainer}>
            <Pressable onPress={() => navigation.navigate('ForgetPasswords')}>
              <Text style={styles.click}> {t('loginnow')}</Text>
            </Pressable>
            <Text>{t('haveaccount')}</Text>
          </View>
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
  },
  txtaround2: {
    backgroundColor: '#CCCCCC',
    borderRadius: 15,
    padding: 5,
    marginRight: 60,
  },
});

export default SignUp;
