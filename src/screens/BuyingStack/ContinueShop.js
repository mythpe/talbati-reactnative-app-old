import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Button, Input, Modal} from 'native-base';
import {useTranslation} from 'react-i18next';

const ContinueShop = ({navigation}) => {
  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      {/* start of modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <View style={styles.centerizedCol}>
              <Image source={require('../../images/thumbs-up.png')} />
              <Text
                style={{
                  marginTop: 13,
                  fontSize: 16,
                  color: '#E56B1F',
                  fontFamily: 'Tajawal-Medium',
                }}>
                {t('applicationsend')}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#E56B1F',
                  fontFamily: 'Tajawal-Medium',
                }}>
                {t('applicationwaiting')}
              </Text>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      {/* end of modal */}
      <View>
        {/* header */}
        <View>
          <View style={styles.upperlogo}>
            <Image
              source={require('../../images/continue.png')}
              width={120}
              height={150}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={styles.lastsec}>
        <Text
          style={{
            marginVertical: 20,
            fontSize: 16,
            color: '#555555',
            fontFamily: 'Tajawal-Medium',
          }}>
          {t('delevrydata')}
        </Text>
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          InputLeftElement={
            <Pressable onPress={() => setShowModal(true)}>
              <Image
                source={require('../../images/down-filled-triangular-arrow.png')}
              />
            </Pressable>
          }
          InputRightElement={
            <Pressable>
              <Image
                source={require('../../images/Icon material-location-on.png')}
              />
            </Pressable>
          }
          placeholder={t('develeryadress')}
        />
        <Button
          onPress={() => navigation.navigate('GetLocation')}
          style={styles.firstBut}
          size="sm"
          width={'75%'}
          marginVertical={20}
          height={10}
          backgroundColor={'#F3F3F3'}
          borderRadius={10}
          _text={{fontSize: 14}}>
          <View style={styles.centerized}>
            <Image source={require('../../images/mapmarket.png')} />
            <Text style={{marginLeft: 10, fontFamily: 'Tajawal-Medium'}}>
              {t('adressonmap')}
            </Text>
          </View>
        </Button>
      </View>
      <Button
        onPress={() => navigation.navigate('KeepShop')}
        style={styles.firstBut}
        size="sm"
        width={'85%'}
        height={10}
        marginLeft={'7%'}
        backgroundColor={'#E56B1F'}
        borderRadius={10}>
        <Text style={styles.txt}>{t('sendrequest')}</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },

  upperlogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 15,
    height: 200,
  },

  lastsec: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35,
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 25,
    elevation: 20,
    shadowColor: '#52006A',
  },
  centerizedCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  centerized: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstBut: {
    fontFamily: 'Tajawal-Medium',
  },
  txt: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Tajawal-Medium',
  },
});

export default ContinueShop;
