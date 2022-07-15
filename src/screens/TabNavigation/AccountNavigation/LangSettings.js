import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Pressable} from 'native-base';
import {useTranslation} from 'react-i18next';

const LangSettings = () => {
  const {t, i18n} = useTranslation();
  const [showArPic, setShowArPic] = useState(false);
  const [showEnPic, setShowEnPic] = useState(false);
  const [showUrPic, setShowUrPic] = useState(false);

  const switchToAr = () => {
    i18n.changeLanguage('ar');
    setShowArPic(true);
    setShowEnPic(false);
    setShowUrPic(false);
  };
  const switchToEn = () => {
    i18n.changeLanguage('en');
    setShowArPic(false);
    setShowEnPic(true);
    setShowUrPic(false);
  };
  const switchToUr = () => {
    i18n.changeLanguage('ur');
    setShowArPic(false);
    setShowEnPic(false);
    setShowUrPic(true);
  };
  const [value, setValue] = useState('en');
  return (
    <View style={styles.langcontainer}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
          }}>
          {showArPic === true ? (
            <Image source={require('../../../images/check-mark.png')} />
          ) : (
            <View></View>
          )}
          <Pressable onPress={switchToAr}>
            <Text style={styles.txt}>العربيه</Text>
          </Pressable>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
          }}>
          {showEnPic === true ? (
            <Image source={require('../../../images/check-mark.png')} />
          ) : (
            <View></View>
          )}
          <Pressable onPress={switchToEn}>
            <Text style={styles.txt}>English</Text>
          </Pressable>
        </View>
        <View style={styles.line}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
          }}>
          {showUrPic === true ? (
            <Image source={require('../../../images/check-mark.png')} />
          ) : (
            <View></View>
          )}
          <Pressable onPress={switchToUr}>
            <Text style={styles.txt}>أردو</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LangSettings;

const styles = StyleSheet.create({
  langcontainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  line: {
    height: 1,
    backgroundColor: '#e6e6e6',
  },
  txt: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 16,
    color: '#555555',
  },
});
