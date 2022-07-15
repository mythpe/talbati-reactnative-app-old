import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {Text, Pressable, Box, Center} from 'native-base';
import Logo1 from '../../images/logo/logo1.png';
import Logo2 from '../../images/logo/logo2.png';
import Logo3 from '../../images/logo/logo3.png';
import Logo4 from '../../images/logo/logo4.png';
import Logo5 from '../../images/logo/logo5.png';
import Logo6 from '../../images/logo/logo6.png';

import {useTranslation} from 'react-i18next';

const Home = ({navigation}) => {
  const {t} = useTranslation();
  const [FlatListData1, setFlatListData1] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'سوبر ماركت زلفه',
      distance: '1.23',
      icon: Logo1,
      photo: Logo1,
      star: '4.8',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      distance: '1.23',
      icon: Logo2,
      photo: Logo2,
      star: '3.2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      distance: '1.23',
      icon: Logo3,
      photo: Logo3,
      star: '2.7',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14545431e29d72',
      title: 'forth Item',
      distance: '1.62',
      icon: Logo4,
      photo: Logo4,
      star: '4.5',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1451123e29d72',
      title: 'fifth Item',
      distance: '2.10',
      icon: Logo5,
      photo: Logo5,
      star: '6.3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145adase29d72',
      title: 'sixth Item',
      distance: '1.96',
      icon: Logo6,
      photo: Logo6,
      star: '5.2',
    },
  ]);

  const [FlatListData2, setFlatListData2] = useState([
    {
      id: '213123123123',
      title: 'سوبر ماركت زلفه',
      photo: Logo1,
    },
    {
      id: '432453242344',
      title: 'Second Item',
      photo: Logo2,
    },
    {
      id: '4324234234',
      title: 'Third Item',
      photo: Logo3,
    },
    {
      id: '654645543534',
      title: 'forth Item',
      photo: Logo4,
    },
    {
      id: '54353467y',
      title: 'fifth Item',
      photo: Logo5,
    },
    {
      id: '4325266',
      title: 'sixth Item',
      photo: Logo6,
    },
  ]);
  const {height} = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstText}>
        <Text
          style={styles.txt}
          color={'#555555'}
          fontSize={15}
          fontFamily={'Tajawal-Medium'}>
          {t('Offers')}
        </Text>
      </View>
      <View style={styles.FirstImgContainer}>
        <Image
          source={require('../../images/PremiumPSD.png')}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.secondText}>
        <Pressable onPress={() => navigation.navigate('Merchants')}>
          <Text
            style={styles.txt}
            color={'#555555'}
            fontSize={15}
            fontFamily={'Tajawal-Medium'}>
            {t('showAll')}
          </Text>
        </Pressable>
        <Text
          style={styles.txt}
          color={'#555555'}
          fontSize={15}
          fontFamily={'Tajawal-Medium'}>
          {t('famousMerchant')}
        </Text>
      </View>
      <FlatList
        data={FlatListData1}
        renderItem={({item}) => (
          <Pressable
            marginHorizontal={10}
            onPress={() => console.warn(`you clicked num ${item.title}`)}>
            <Box alignItems="center">
              <Box
                width={210}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                justifyItems={'center'}
                height={160}>
                <Image source={item.photo} alt="image" />
                <Center
                  backgroundColor={'rgba(0,0,0,0.5)'}
                  _text={{
                    color: '#FFFFFF',
                  }}
                  position="absolute"
                  bottom="0"
                  width={'100%'}
                  height={'40%'}
                  flexDirection={'row'}
                  justifyItems={'center'}>
                  <View style={styles.FlatListContainerUnder}>
                    <View style={styles.FlatListContainerUnder1}>
                      <Image
                        style={styles.star}
                        source={require('../../images/star.png')}
                      />
                      <Text style={styles.txt} color={'#FFFFFF'}>
                        {item.star}
                      </Text>
                    </View>
                    <View style={styles.FlatListContainerUnder2}>
                      <Text style={styles.txt} color={'#FFFFFF'}>
                        {item.title}
                      </Text>
                      <Text style={styles.txt} color={'#FFFFFF'}>
                        {item.distance} {t('km')}
                      </Text>
                    </View>
                  </View>
                </Center>
              </Box>
            </Box>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        horizontal
      />
      <View style={styles.thirdText}>
        <Pressable onPress={() => navigation.navigate('Merchants')}>
          <Text color={'#555555'} fontSize={15} style={styles.txt}>
            {t('showAll')}
          </Text>
        </Pressable>
        <Text color={'#555555'} fontSize={15} style={styles.txt}>
          {t('Merchant')}
        </Text>
      </View>
      <FlatList
        data={FlatListData2}
        renderItem={({item}) => (
          <Pressable
            marginHorizontal={10}
            onPress={() => console.warn(`you clicked num ${item.title}`)}>
            <Box alignItems="center">
              <Box
                width={150}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                justifyItems={'center'}
                height={160}>
                <Image source={item.photo} alt="image" />
                <View style={styles.line}></View>
                <Center
                  _text={{
                    color: '#FFFFFF',
                  }}
                  position="absolute"
                  bottom="0"
                  width={'100%'}
                  height={'40%'}
                  flexDirection={'row'}
                  justifyItems={'center'}>
                  <View style={styles.FlatListContainerUnder3}>
                    <Text style={styles.txt}>{item.title}</Text>
                  </View>
                </Center>
              </Box>
            </Box>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        horizontal
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  firstText: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginVertical: 10,
    fontFamily: 'Tajawal-Medium',
  },
  FirstImgContainer: {
    marginLeft: 35,
    marginTop: 10,
  },
  secondText: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 20,
    fontFamily: 'Tajawal-Medium',
  },
  FlatListContainerUnder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FlatListContainerUnder2: {
    marginLeft: 20,
  },
  FlatListContainerUnder1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginRight: 25,
    alignItems: 'center',
  },
  star: {
    marginRight: 5,
  },
  thirdText: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  line: {
    marginVertical: 25,
    height: 1,
    backgroundColor: '#e6e6e6',
  },
  FlatListContainerUnder3: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'Tajawal-Medium',
  },
});

export default Home;
