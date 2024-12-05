import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import splash from '../../../assets/images/splash.png';
import {scaledValue} from '../../utils/designUtils';
import {useNavigation} from '@react-navigation/native';
import {appRoutes} from '../../utils/constants/routeNames';
import splashImage from '../../../assets/images/splashImage.png';
import splashBImage from '../../../assets/images/splashBImage.png';
import {appColors} from '../../utils/constants/colors';
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const id = setTimeout(() => {
      navigation.replace(appRoutes.drawer);
    }, 3000);
    return () => clearTimeout(id);
  }, []);

  return (
    <View style={styles.splash}>
      <Image style={styles.splashImage} source={splashImage} />
      <Text  allowFontScaling={false}style={styles.splashText}>CMO Rajasthan</Text>
      <Image resizeMode='contain' style={styles.splashBImage} source={splashBImage} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.background,
  },
  splashImage: {
    height: scaledValue(101),
    width: scaledValue(65),
    marginBottom: scaledValue(20),
  },
  splashText: {
    fontFamily: 'Inter',
    fontSize: scaledValue(34),
    fontWeight: '800',
  },
  splashBImage: {
    height: scaledValue(238),
    bottom: 0,
    width: scaledValue(374),
    position: 'absolute',
  },
});
