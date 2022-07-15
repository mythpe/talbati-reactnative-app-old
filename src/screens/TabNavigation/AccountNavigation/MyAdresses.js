import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React, {useState} from 'react';

const MyAdresses = ({navigation}) => {
  const [FlatListData, setFlatListData] = useState([
    {
      id: 'bd7ace3bea-c1b1-461231c2-aed5-3ad53abb28ba',
      data: '1شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '3ac68afc-c605-483d3-a3124f8-fbd91aa97f63',
      data: '2شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '538694a0f-3da1-471f-bd45556-141e29d72',
      data: '3شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '158694a0f-3da1-1f-bd5623s96-14545431e29d72',
      data: '4شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '58694a0f-3da1-22b34f-bd96-1451123e29d72',
      data: '5شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '5836194a0f-3da1-471f-bd96-145566se29d72',
      data: '6شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '586194a0f-3da1-471f-b6d96-145a66se29d72',
      data: '7شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '586194a0f-3da17-471f-bd96-1451166se29d72',
      data: '8شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
    {
      id: '5861904a0f-a1-471f-b555596-145ada66se29d72',
      data: '9شقة 23, شارع عمر بن الخطاب ,منطقة الملز',
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        height={100}
        data={FlatListData}
        renderItem={({item}) => (
          <Pressable
            style={styles.mainone}
            onPress={() => navigation.navigate('MyAdressesDetails')}>
            <View>
              <Image
                source={require('../../../images/trash).png')}
                width={15}
                style={{marginTop: 5}}
              />
            </View>
            <View>
              <Text style={styles.mainonetxt}>{item.data}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyAdresses;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  mainone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 15,
  },
  mainonetxt: {
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: '#555555',
    marginRight: 15,
    lineHeight: 25,
  },
});
