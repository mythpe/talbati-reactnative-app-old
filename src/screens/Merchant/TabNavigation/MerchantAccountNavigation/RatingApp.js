import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'native-base';
import {useTranslation} from 'react-i18next';

const RatingApp = ({navigation}) => {
  const {t} = useTranslation();
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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.img}>
        <Image
          source={require('../../../../images/rating.png')}
          width={80}
          height={80}
        />
      </View>
      <View style={styles.mainContainer2}>
        <View>
          <CustomRatingBar />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Button
            onPress={() => navigation.goBack()}
            size="sm"
            background={'#FBF9F9'}
            borderWidth={1}
            borderColor={'#FFE3D2'}
            width={40}
            marginTop={18}
            _text={{color: '#E56B1F', fontSize: 14}}>
            {t('save')}
          </Button>
          <Button
            onPress={() => navigation.goBack()}
            size="sm"
            backgroundColor={'#E56B1F'}
            width={40}
            marginTop={18}
            _text={{fontSize: 14}}>
            {t('delete')}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default RatingApp;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 180,
  },
  mainContainer2: {
    borderWidth: 1,
    borderColor: '#0000001A',
    backgroundColor: '#FFFFFF',
    width: '70%',
    marginLeft: '13%',
    borderRadius: 15,
    padding: 20,
  },
  img: {
    position: 'absolute',
    left: 130,
    zIndex: 5,
    bottom: 180,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0000001A',
    borderRadius: 60,
    height: 130,
    width: 130,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
