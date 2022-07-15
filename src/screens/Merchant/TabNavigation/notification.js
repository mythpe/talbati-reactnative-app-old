import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React, {useState} from 'react';

const Notifications = ({navigation}) => {
  const [FlatListData, setFlatListData] = useState([
    {
      id: 'bd7ace3213bea-c1b1-461231c2-aed5-3ad53a3bb28ba',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '3ac68afc-c605-483214d3-a3124f8-fbd91aa597f63',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '58694a0f-3da1-471f-b5556-145571e29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '58694a0f-3da1-1471f-bd5623s96-14545431e29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '58694a0f-3da1-22b434471f-bd96-1451123e29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '586194a0f-3da1-471f-bd96-14555667ada66se29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '586194a0f-3da1-471f-bd96-145223ada66se29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '5816194a0f-3da1-471f-bd96-145ada1166se29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '586194a0f-3da1-471f-b555596-145ada66se29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '5816194a0f-3da1-471f-bd96-145ada116644se29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
    {
      id: '586194a0f-3da1-471f-b555596-14522ada66se29d72',
      data: 'تم تأكيد الطلب من قبل العميل',
      date: '6-4-2022',
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        height={100}
        data={FlatListData}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('MerchantNotificationDetails')}>
            <Text
              style={{
                fontFamily: 'Tajawal-Regular',
                fontSize: 14,
                color: '#E1E1E1',
                marginLeft: 20,
                marginTop: 10,
              }}>
              {item.date}
            </Text>
            <View style={styles.mainone}>
              <View>
                <Text style={styles.mainonetxt}>{item.data}</Text>
              </View>
              <View>
                <Image
                  source={require('../../../images/Iconmaterial-notifications-active.png')}
                  width={15}
                  style={{marginTop: 5}}
                />
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  mainone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 30,
    marginHorizontal: 25,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  mainonetxt: {
    fontSize: 16,
    fontFamily: 'Tajawal-Medium',
    color: '#555555',
    marginRight: 15,
    lineHeight: 25,
  },
});
