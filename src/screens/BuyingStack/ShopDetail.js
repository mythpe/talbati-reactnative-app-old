import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {TextArea, Button, Modal} from 'native-base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

const ShopDetail = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const StarImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const StarImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
                setDefaultRating(item);
              }}>
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? {uri: StarImgFilled}
                    : {uri: StarImgCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const {t} = useTranslation();
  const [textAreaValue, setTextAreaValue] = useState('');
  const demoValueControlledTextArea = e => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <View style={styles.container}>
      {/* start of modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <View style={styles.centerizedCol}>
              <Text
                style={{
                  marginTop: 13,
                  fontSize: 16,
                  color: '#EF1D1D',
                  fontFamily: 'Tajawal-Bold',
                }}>
                {t('rateshop')}
              </Text>
              <CustomRatingBar />
              <Button
                onPress={() => navigation.navigate('ContinueShop')}
                style={styles.firstBut}
                size="sm"
                width={'50%'}
                marginTop={5}
                backgroundColor={'#E56B1F'}
                borderRadius={15}
                _text={{fontSize: 14}}>
                {t('confirmrating')}
              </Button>
              <Button
                onPress={() => navigation.navigate('ContinueShop')}
                style={styles.firstBut}
                size="sm"
                width={'50%'}
                marginTop={5}
                backgroundColor={'#555555'}
                borderRadius={15}
                _text={{fontSize: 14}}>
                {t('cancel')}
              </Button>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      {/* end of modal */}
      <View>
        {/* header */}
        <View>
          <ImageBackground
            source={require('../../images/1.jpg')}
            height={'100%'}
            width={'100%'}>
            <View style={styles.icons}>
              <View>
                <Pressable onPress={() => console.warn('share')}>
                  <Image
                    source={require('../../images/share.png')}
                    width={30}
                    height={30}
                    padding={10}
                  />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => navigation.goBack()}>
                  <Image
                    source={require('../../images/left-arrow2.png')}
                    width={25}
                    height={25}
                    padding={8}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.upperlogo}>
              <Image source={require('../../images/logo/logo1.png')} />
              <Text style={styles.uppertxt}>{t('elsalam')}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View>
        <ImageBackground
          style={styles.secontsection}
          source={require('../../images/littleWallpaper.png')}>
          <View
            style={{
              padding: 5,
              justifyContent: 'space-between',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <View style={styles.firsttxt}>
                <Image
                  source={require('../../images/star2.png')}
                  style={{marginTop: 3}}
                />
                <Pressable onPress={() => setShowModal(true)}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#555555',
                      marginLeft: 5,
                      fontFamily: 'Tajawal-Medium',
                    }}>
                    {t('rateshop')}
                  </Text>
                </Pressable>
              </View>
              <View style={styles.secondtxt}>
                <Image
                  source={require('../../images/star.png')}
                  style={{marginTop: 3}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: '#555555',
                    marginLeft: 5,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  4.6
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.firsttxt}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#555555',
                    marginRight: 5,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  {t('branchfar')}
                </Text>
                <Image
                  source={require('../../images/direction.png')}
                  style={{marginTop: 3}}
                />
              </View>
              <View style={styles.secondtxt}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#555555',
                    marginLeft: 5,
                    fontFamily: 'Tajawal-Medium',
                  }}>
                  9.7 {t('km')}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Text
        style={{
          marginRight: 15,
          fontSize: 16,
          color: '#555555',
          fontFamily: 'Tajawal-Medium',
        }}>
        {t('orderdetail')}
      </Text>
      <View style={styles.lastsec}>
        <TextArea
          value={textAreaValue}
          onChange={demoValueControlledTextArea}
          w="90%"
          maxW="400"
          h={95}
          borderRadius={15}
          marginTop={5}
          placeholderTextColor={'#E6E6E6'}
          style={styles.txtfamily}
          backgroundColor={'white'}
        />
        <Button
          onPress={() => navigation.navigate('ContinueShop')}
          style={styles.firstBut}
          size="sm"
          width={'75%'}
          marginTop={5}
          backgroundColor={'#E56B1F'}
          borderRadius={5}
          _text={{fontSize: 14}}>
          {t('confirmbuy')}
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 25,
  },
  upperlogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 15,
    height: 200,
  },
  uppertxt: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Tajawal-Medium',
  },
  secontsection: {
    marginVertical: 15,
    marginHorizontal: 15,
    elevation: 20,
    shadowColor: '#52006A',
  },

  firsttxt: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Tajawal-Medium',
  },
  secondtxt: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    fontFamily: 'Tajawal-Medium',
  },
  lastsec: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#52006A',
  },
  centerizedCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    fontFamily: 'Tajawal-Medium',
  },
  txtfamily: {
    fontSize: 14,
    fontFamily: 'Tajawal-Medium',
  },
  firstBut: {
    fontSize: 14,
    fontFamily: 'Tajawal-Medium',
  },
  // star component
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});

export default ShopDetail;
