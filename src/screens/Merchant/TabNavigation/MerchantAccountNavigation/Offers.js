import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Offers = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 10}}></View>
      <View style={styles.container1}>
        <View style={styles.leftside}>
          <Text style={styles.leftsidetxt}>
            عند الشراء بقيمة 400 ريال يمكنك الحصول علي قسيمة شراء بمبلغ 100 ريال
            طلباتك أوامر
          </Text>
        </View>

        <View>
          <Image
            source={require('../../../../images/images1).png')}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.leftside}>
          <Text style={styles.leftsidetxt}>
            عند الشراء بقيمة 400 ريال يمكنك الحصول علي قسيمة شراء بمبلغ 100 ريال
            طلباتك أوامر
          </Text>
        </View>

        <View>
          <Image
            source={require('../../../../images/images1).png')}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.leftside}>
          <Text style={styles.leftsidetxt}>
            عند الشراء بقيمة 400 ريال يمكنك الحصول علي قسيمة شراء بمبلغ 100 ريال
            طلباتك أوامر
          </Text>
        </View>

        <View>
          <Image
            source={require('../../../../images/images1).png')}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.leftside}>
          <Text style={styles.leftsidetxt}>
            عند الشراء بقيمة 400 ريال يمكنك الحصول علي قسيمة شراء بمبلغ 100 ريال
            طلباتك أوامر
          </Text>
        </View>

        <View>
          <Image
            source={require('../../../../images/images1).png')}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.leftside}>
          <Text style={styles.leftsidetxt}>
            عند الشراء بقيمة 400 ريال يمكنك الحصول علي قسيمة شراء بمبلغ 100 ريال
            طلباتك أوامر
          </Text>
        </View>

        <View>
          <Image
            source={require('../../../../images/images1).png')}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.leftside}>
          <Text style={styles.leftsidetxt}>
            عند الشراء بقيمة 400 ريال يمكنك الحصول علي قسيمة شراء بمبلغ 100 ريال
            طلباتك أوامر
          </Text>
        </View>

        <View>
          <Image
            source={require('../../../../images/images1).png')}
            style={styles.img}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: '#accef7',
    padding: 6,
    borderRadius: 15,
    elevation: 7,
    shadowColor: '#52006A',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: '#fbc09d45',
    padding: 6,
    borderRadius: 15,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: '#9dfbd55c',
    padding: 6,
    borderRadius: 15,
  },
  leftside: {
    width: '50%',
    alignItems: 'center',
    marginTop: 15,
  },
  leftsidetxt: {
    color: '#E56B1F',
    fontSize: 15,
    fontFamily: 'Tajawal-Medium',
    lineHeight: 30,
  },
  img: {
    width: 130,
    height: 150,
    borderRadius: 15,
  },
});
