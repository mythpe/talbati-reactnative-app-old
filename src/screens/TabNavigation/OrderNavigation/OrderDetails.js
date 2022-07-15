import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

const OrdersDetails = ({navigation}) => {
  const {t} = useTranslation();

  const [FlatListData, setFlatListData] = useState([
    {
      id: 'bd7acbea-46c2-aed5-3ad53abb28ba',
      name: 'بيض',
      quantity: '8',
    },
    {
      id: '3ac68afc-c605-48d3-fbd91aa97f63',
      name: 'لبن',
      quantity: '2',
    },
    {
      id: '58694a0f-3da1-bd96-145571e29d72',
      name: 'بيبسي',
      quantity: '4',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1454529d72',
      name: 'مربي',
      quantity: '1',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.firstone}>
        <Text
          style={{
            fontFamily: 'Tajawal-Medium',
            fontSize: 16,
            marginRight: 10,
          }}>
          {t('elsalam')}
        </Text>
        <Image
          source={require('../../../images/shop22.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.Header}>
          <Text
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginVertical: 5,
              fontSize: 16,
              color: '#E56B1F',
              fontFamily: 'Tajawal-Bold',
            }}>
            {t('orderscontain')}
          </Text>
        </View>
        <View style={styles.line}></View>
        <FlatList
          data={FlatListData}
          renderItem={({item}) => (
            <View style={styles.CardPart}>
              <Text style={{marginRight: 15, fontFamily: 'Tajawal-Regular'}}>
                {item.quantity}
                {item.name}
              </Text>
              <Text style={styles.dot}>{'\u2022'}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* the second */}
      <View style={styles.card}>
        <View style={styles.Header}>
          <Text
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginVertical: 5,
              fontSize: 16,
              color: '#E56B1F',
              fontFamily: 'Tajawal-Bold',
            }}>
            {t('orderdata')}
          </Text>
        </View>
        <View>
          <View style={styles.smallcard2}>
            <Text
              style={{
                color: '#555555',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              295 {t('rial')}
            </Text>
            <Text
              style={{
                color: '#A8A8A8',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              {t('theprice')}
            </Text>
          </View>
          <View style={styles.smallcard2}>
            <Text
              style={{
                color: '#555555',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              35 {t('rial')}
            </Text>
            <Text
              style={{
                color: '#A8A8A8',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              {t('deleverycost')}
            </Text>
          </View>
          <View style={styles.smallcard2}>
            <Text
              style={{
                color: '#555555',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              320 {t('rial')}
            </Text>
            <Text
              style={{
                color: '#A8A8A8',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              {t('totalcost')}
            </Text>
          </View>
          <View style={styles.smallcard2}>
            <Text
              style={{
                color: '#555555',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              {t('payonrecive')}
            </Text>
            <Text
              style={{
                color: '#A8A8A8',
                fontSize: 14,
                fontFamily: 'Tajawal-Regular',
              }}>
              {t('paymentmethod')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  firstone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 25,
    marginVertical: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginHorizontal: 25,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 16,
    color: '#E56B1F',
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
    justifyContent: 'flex-end',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  dot: {
    fontSize: 18,
  },
  smallcard2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5,
  },
});

export default OrdersDetails;
