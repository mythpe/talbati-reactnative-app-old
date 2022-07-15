import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextArea, Button} from 'native-base';
import {useTranslation} from 'react-i18next';

const MyAdressesDetails = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 35,
        }}>
        <TextArea
          h={20}
          w="85%"
          maxW="400"
          placeholderTextColor={'#555555'}
          placeholder={t('fakeadress')}
          style={{
            backgroundColor: 'white',
            fontFamily: 'Tajawal-Medium',
            fontSize: 14,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 35,
        }}>
        <Button
          onPress={() => navigation.goBack()}
          style={styles.secBut}
          size="sm"
          background={'#FBF9F9'}
          borderWidth={1}
          borderColor={'#FFE3D2'}
          width={40}
          marginRight={8}
          _text={{color: '#E56B1F', fontSize: 14}}>
          {t('save')}
        </Button>
        <Button
          onPress={() => navigation.goBack()}
          style={styles.firstBut}
          size="sm"
          backgroundColor={'#E56B1F'}
          width={40}
          _text={{fontSize: 14}}>
          {t('delete')}
        </Button>
      </View>
    </View>
  );
};

export default MyAdressesDetails;

const styles = StyleSheet.create({});
