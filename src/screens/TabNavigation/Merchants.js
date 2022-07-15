import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Text,
  Input,
  Icon,
  Stack,
  Button,
  Pressable,
  Heading,
  VStack,
  Box,
  AspectRatio,
  Center,
  Divider,
} from 'native-base';
import SmallLogo1 from '../../images/smallLogo/1.png';
import SmallLogo2 from '../../images/smallLogo/2.png';
import SmallLogo3 from '../../images/smallLogo/3.png';
import SmallLogo4 from '../../images/smallLogo/4.png';
import SmallLogo5 from '../../images/smallLogo/5.png';
import SmallLogo6 from '../../images/smallLogo/6.png';

import Logo1 from '../../images/logo/logo1.png';
import Logo2 from '../../images/logo/logo2.png';
import Logo3 from '../../images/logo/logo3.png';
import Logo4 from '../../images/logo/logo4.png';
import Logo5 from '../../images/logo/logo5.png';
import Logo6 from '../../images/logo/logo6.png';
import {useTranslation} from 'react-i18next';

const Merchants = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [FlatListData1, setFlatListData1] = useState([
    {
      id: 'bd7acbea-c1b1-461231c2-aed5-3ad53abb28ba',
      title: 'بقاله',
      photo: SmallLogo1,
    },
    {
      id: '3ac68afc-c605-48d3-a3124f8-fbd91aa97f63',
      title: 'صيدليات',
      photo: SmallLogo2,
    },
    {
      id: '58694a0f-3da1-471f-bd496-145571e29d72',
      title: 'مطاعم',
      photo: SmallLogo3,
    },
    {
      id: '58694a0f-3da1-471f-bd596-14545431e29d72',
      title: 'مشروبات',
      photo: SmallLogo4,
    },
    {
      id: '58694a0f-3da1-2471f-bd96-1451123e29d72',
      title: 'حلويات',
      photo: SmallLogo5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145ada66se29d72',
      title: 'تمور',
      photo: SmallLogo6,
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
      title: 'سوبر ماركت مشهور',
      photo: Logo2,
    },
    {
      id: '4324234234',
      title: 'سوبر ماركت مشهور',
      photo: Logo3,
    },
    {
      id: '654645543534',
      title: 'سوبر ماركت مشهور',
      photo: Logo4,
    },
    {
      id: '54353467y',
      title: 'سوبر ماركت مشهور',
      photo: Logo5,
    },
    {
      id: '4325266',
      title: 'سوبر ماركت مشهور',
      photo: Logo6,
    },
  ]);
  const {height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          height={80}
          style={{}}
          horizontal
          data={FlatListData1}
          renderItem={({item}) => (
            <Pressable
              marginHorizontal={10}
              onPress={() => console.warn(`you clicked num ${item.title}`)}>
              <Box>
                <Box width={75} height={75} alignItems="center">
                  <Image
                    style={styles.smalllogo}
                    source={item.photo}
                    alt="image"
                    width={50}
                    height={50}
                    resizeMode="contain"
                  />
                  <Center width={'100%'} height={'40%'}>
                    <View style={styles.FlatListContainerUnder3}>
                      <Text style={styles.txt1}>{item.title}</Text>
                    </View>
                  </Center>
                </Box>
              </Box>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* second flatlist */}
      <View
        style={{
          marginTop: 10,
        }}>
        <FlatList
          data={FlatListData2}
          keyExtractor={item => item.id}
          numColumns={2}
          style={{
            marginBottom: 90,
          }}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('ShopDetail')}>
              <Box
                padding={8}
                backgroundColor={'#FFFFFF'}
                margin={2}
                width={185}
                height={240}>
                <Image source={item.photo} />
                <View style={styles.line}></View>
                <Text style={styles.txt}>{item.title}</Text>
              </Box>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  smalllogo: {
    borderRadius: 50,
  },
  FlatListContainerUnder3: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
  card: {
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
    flex: 1,
  },
  line: {
    marginVertical: 25,
    height: 1,
    backgroundColor: '#e6e6e6',
  },
  txt: {
    fontSize: 14,
    color: '#E56B1F',
    fontFamily: 'Tajawal-Medium',
  },
  txt1: {
    color: '#555555',
    fontSize: 14,
    fontFamily: 'Tajawal-Medium',
  },
});

export default Merchants;
