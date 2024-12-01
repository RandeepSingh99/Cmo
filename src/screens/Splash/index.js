import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import splash from '../../../assets/images/splash.png';
import {scaledValue} from '../../utils/designUtils';
import {useNavigation} from '@react-navigation/native';
import {appRoutes} from '../../utils/constants/routeNames';
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
      <Image resizeMode="fit" style={styles.splashImg} source={splash} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {flex: 1},
  splashImg: {width: scaledValue(375), height: '100%'},
});
