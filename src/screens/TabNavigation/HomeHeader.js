import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Input, Stack, Heading} from 'native-base';
import {useTranslation} from 'react-i18next';
const HomeHeader = ({title}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.header}>
      <Heading style={styles.heading}>{t('home')}</Heading>
      <Stack w="170%" alignItems="center">
        <Input
          w={{
            base: '80%',
          }}
          backgroundColor={'#F2F2F2'}
          marginTop={5}
          placeholder={t('searchhere')}
          InputRightElement={
            <Image
              marginRight={10}
              source={require('../../images/search.png')}
            />
          }
        />
      </Stack>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '35%',
    backgroundColor: '#FFFFFF',
  },
  heading: {
    textAlign: 'center',
    color: '#E56B1F',
    fontFamily: 'Tajawal-Bold',
  },
});
export default HomeHeader;
