import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Modal, Button} from 'native-base';
import {useTranslation} from 'react-i18next';

import PaymentTopNavigation from '../../navigation/PaymentTopNavigation';
const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation();

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
                  color: '#EF1D1D',
                  fontFamily: 'Tajawal-Medium',
                }}>
                {t('orderconfirmed')}
              </Text>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      {/* end of modal */}
      <View style={styles.firstsec}>
        <View style={styles.card}>
          <View style={styles.Header}>
            <Text
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginVertical: 3,
                fontSize: 16,
                color: '#555555',
                fontFamily: 'Tajawal-Medium',
              }}>
              {t('ordercomponent')}
            </Text>
          </View>
          <View style={styles.CardPart}>
            <View style={styles.CardMiniPart1}>
              <Image
                source={require('../../images/credit-cards-payment(1).png')}
                width={25}
                height={25}
                style={{marginBottom: 10}}
              />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Tajawal-Medium',
                  fontSize: 14,
                }}>
                {t('payonrecieve')}
              </Text>
            </View>
            <View style={styles.CardMiniPart2}>
              <Image
                source={require('../../images/payment-method.png')}
                width={25}
                height={25}
                style={{marginBottom: 10}}
              />

              <Text style={{color: '#555555', fontFamily: 'Tajawal-Medium'}}>
                {t('epay')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.secsec}>
        <PaymentTopNavigation />
      </View>
      <Button
        onPress={() => setShowModal(true)}
        style={styles.txt}
        size="sm"
        width={'85%'}
        height={10}
        marginLeft={'8%'}
        backgroundColor={'#E56B1F'}
        borderRadius={10}
        marginTop={2}
        _text={{fontSize: 16}}>
        {t('confirm')}
      </Button>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },

  firstsec: {
    marginVertical: 5,
    height: '25%',
    shadowColor: '#171717',
    shadowOffset: {width: 15, height: 15},
    shadowOpacity: 1.4,
    shadowRadius: 2,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: '100%',
  },
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 16,
    color: '#E56B1F',
    fontFamily: 'Tajawal-Medium',
  },
  line: {
    marginTop: 2,
    marginBottom: 5,
    height: 2,
    backgroundColor: '#e6e6e6',
  },
  CardPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 2,
  },
  CardMiniPart1: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2681C',
    padding: 10,
    borderRadius: 10,
    height: '80%',
    width: '40%',
  },
  CardMiniPart2: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F2F2',
    padding: 15,
    borderRadius: 10,
    height: '80%',
    width: '40%',
  },
  secsec: {
    height: '63%',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  centerizedCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  txt: {
    fontFamily: 'Tajawal-Medium',
  },
});
