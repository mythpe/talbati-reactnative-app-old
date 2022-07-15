import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Button, Input, Radio} from 'native-base';
import {useTranslation} from 'react-i18next';

const GetLocation = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <View>
        <MapView
          style={styles.map}
          region={{
            latitude: 24.7136,
            longitude: 46.6753,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
      </View>
      <View style={styles.lastview}>
        <View>
          <View style={styles.firstcontainer}>
            <Text style={styles.txt}>{t('firstlocationtxt')}</Text>
          </View>
          <View style={styles.seccontainer}>
            <Text style={styles.sectxt}>{t('extradetails')}</Text>
            <Input
              style={styles.inputtxt}
              marginLeft={22}
              w={{
                base: '95%',
              }}
              placeholder={t('extraplaceholder')}
            />
          </View>
          <View style={styles.line}></View>
          <View style={styles.picker}>
            <Radio.Group name="myRadioGroup">
              <Radio value="one" my={1}>
                {t('savetheplace')}
              </Radio>
            </Radio.Group>
          </View>
        </View>
        <Button
          onPress={() => navigation.goBack()}
          style={styles.firstBut}
          size="sm"
          width={'85%'}
          height={10}
          marginVertical={5}
          marginLeft={'8%'}
          backgroundColor={'#E56B1F'}
          borderRadius={10}
          _text={{fontSize: 14}}>
          {t('confirm')}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default GetLocation;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 16,
    marginRight: 15,
  },
  inputtxt: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 14,
    marginRight: 15,
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: '100%',
  },
  lastview: {
    position: 'absolute',
    top: 300,
    zIndex: 5,
    right: '10%',
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 10,
  },
  firstcontainer: {
    backgroundColor: '#FFEBDF',
    height: '32%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  line: {
    marginTop: 2,
    marginBottom: 5,
    height: 2,
    backgroundColor: '#e6e6e6',
  },
  seccontainer: {
    marginVertical: 5,
    marginRight: 15,
  },
  sectxt: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 16,
    marginVertical: 5,
  },
  picker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
