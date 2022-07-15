import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const MyAccount = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Imgwrapper}>
        <Image
          style={styles.Imgwrapperimg}
          source={require('../../images/profile-placeholder.png')}
        />
        <Text
          style={{
            color: '#E56B1F',
            fontSize: 16,
            fontFamily: 'Tajawal-Medium',
          }}>
          سامح محمد
        </Text>
        <View style={styles.smallcontainer}>
          <Image
            style={styles.smallcontainerimg}
            source={require('../../images/phonealt.png')}
          />
          <Text>01555560534</Text>
        </View>
      </View>
      {/* first */}
      <View style={styles.pressablesacontainer}>
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('AccountSettings')}>
          <Image source={require('../../images/left-arrow1.png')} />
          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('accountsettings')}</Text>
            <Image source={require('../../images/Iconawesome-user-alt.png')} />
          </View>
        </Pressable>
        {/* second */}
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('LangSettings')}>
          <Image source={require('../../images/left-arrow1.png')} />

          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('langsettings')}</Text>
            <Image source={require('../../images/Iconmaterial-language.png')} />
          </View>
        </Pressable>
        {/* third */}
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('MyAdresses')}>
          <Image source={require('../../images/left-arrow1.png')} />

          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('myadresses')}</Text>
            <Image source={require('../../images/map.png')} />
          </View>
        </Pressable>
        {/* 4th */}
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('RatingApp')}>
          <Image source={require('../../images/left-arrow1.png')} />

          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('rateapp')}</Text>
            <Image
              source={require('../../images/Iconawesome-star-half-alt.png')}
            />
          </View>
        </Pressable>
        {/* 5th */}
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('Notifications')}>
          <Image source={require('../../images/left-arrow1.png')} />

          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('notifications')}</Text>
            <Image
              source={require('../../images/Iconmaterial-notifications-active.png')}
            />
          </View>
        </Pressable>
        {/* 6th */}
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('UsingConditions')}>
          <Image source={require('../../images/left-arrow1.png')} />

          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('usingterms')}</Text>
            <Image source={require('../../images/to-do-list.png')} />
          </View>
        </Pressable>
        {/* 7th */}
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('PrivacySettings')}>
          <Image source={require('../../images/left-arrow1.png')} />

          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('privacyterms')}</Text>
            <Image source={require('../../images/shield.png')} />
          </View>
        </Pressable>
        {/* 8th */}
        <Pressable
          style={styles.singlePress}
          onPress={() => navigation.navigate('AboutApp')}>
          <Image source={require('../../images/left-arrow1.png')} />

          <View style={styles.singlePressContainer}>
            <Text style={styles.txt}>{t('aboutapp')}</Text>
            <Image source={require('../../images/information.png')} />
          </View>
        </Pressable>
        {/* 9th */}
        <Pressable>
          <View style={styles.singlePressContainerlast}>
            <Text style={styles.txt}>{t('signout')}</Text>
            <Image source={require('../../images/logout.png')} />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
  Imgwrapper: {
    display: 'flex',
    flexdirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  Imgwrapperimg: {
    width: 96,
    height: 96,
    borderRadius: 15,
    marginBottom: 10,
  },
  pressablesacontainer: {
    marginHorizontal: 15,
  },
  smallcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  smallcontainerimg: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  singlePress: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 15,
  },
  singlePressContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  singlePressContainerlast: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Tajawal-Medium',
    color: '#555555',
    marginRight: 10,
  },
});
