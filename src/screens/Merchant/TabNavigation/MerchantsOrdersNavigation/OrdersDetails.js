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
      <View style={styles.container1}>
        {/* the first card */}
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
              بيانات المشتري
            </Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.smallcard2}>
              <Text
                style={{
                  color: '#A8A8A8',
                  fontSize: 14,
                  fontFamily: 'Tajawal-Regular',
                }}>
                احمد محمد
              </Text>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('merchantname')}
                </Text>
                <Image
                  source={require('../../../../images/Iconawesome-user.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={styles.smallcard2}>
              <Text
                style={{
                  color: '#A8A8A8',
                  fontSize: 14,
                  fontFamily: 'Tajawal-Medium',
                }}>
                شقة 2/ طريق نجم الدين
              </Text>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('merchantaddress')}
                </Text>
                <Image
                  source={require('../../../../images/Iconmaterial-locationCopy.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={styles.smallcard2}>
              <Text
                style={{
                  color: '#A8A8A8',
                  fontSize: 14,
                  fontFamily: 'Tajawal-Medium',
                }}>
                01555560534
              </Text>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('merchantnumber')}
                </Text>
                <Image
                  source={require('../../../../images/Iconawesome-phone-alt.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.smallcard2}>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    fontFamily: 'Tajawal-Medium',
                    fontSize: 14,
                    color: '#74DA7F',
                  }}>
                  {t('deleveried')}
                </Text>
                <Image
                  source={require('../../../../images/check.png')}
                  style={{marginLeft: 5}}
                />
              </View>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  حاله الطلب
                </Text>
                <Image
                  source={require('../../../../images/mapmarket.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
          </View>
        </View>
        {/* the second card */}
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
                <Text style={{marginRight: 15, fontFamily: 'Tajawal-Medium'}}>
                  {item.quantity}
                  {item.name}
                </Text>
                <Text style={styles.dot}>{'\u2022'}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        {/* the third card */}
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
              {t('paymentdetails')}
            </Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.smallcard2}>
              <Text
                style={{
                  color: '#A8A8A8',
                  fontSize: 14,
                  fontFamily: 'Tajawal-Regular',
                }}>
                285 {t('rial')}
              </Text>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('theprice')}
                </Text>
                <Image
                  source={require('../../../../images/Iconawesome-user.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={styles.smallcard2}>
              <Text
                style={{
                  color: '#A8A8A8',
                  fontSize: 14,
                  fontFamily: 'Tajawal-Medium',
                }}>
                35 {t('rial')}
              </Text>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('deleverycost')}
                </Text>
                <Image
                  source={require('../../../../images/Iconmaterial-locationCopy.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={styles.smallcard2}>
              <Text
                style={{
                  color: '#A8A8A8',
                  fontSize: 14,
                  fontFamily: 'Tajawal-Medium',
                }}>
                320 {t('rial')}
              </Text>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('totalcost')}
                </Text>
                <Image
                  source={require('../../../../images/Iconawesome-phone-alt.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={styles.smallcard2}>
              <Text
                style={{
                  color: '#A8A8A8',
                  fontSize: 14,
                  fontFamily: 'Tajawal-Medium',
                }}>
                {t('payonrecive')}
              </Text>
              <View style={styles.smallhead}>
                <Text
                  style={{
                    color: '#555555',
                    fontSize: 14,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('paymentmethod')}
                </Text>
                <Image
                  source={require('../../../../images/Iconawesome-phone-alt.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.smallcard2}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginLeft: '35%',
                }}>
                <Image
                  source={require('../../../../images/check555.png')}
                  style={{marginLeft: 5}}
                />
                <Text
                  style={{
                    fontFamily: 'Tajawal-Medium',
                    fontSize: 14,
                    color: '#555555',
                    marginLeft: 10,
                    marginBottom: 3,
                  }}>
                  {t('paied')}
                </Text>
              </View>
            </View>
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
    marginVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    marginHorizontal: 25,
    paddingHorizontal: 15,
    marginVertical: 5,
    //start of  shadow
    elevation: 5,
    shadowColor: '#52006A',
    //end of shadow
  },
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 14,
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
    fontSize: 10,
  },
  smallcard2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 4,
  },
  smallhead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default OrdersDetails;
