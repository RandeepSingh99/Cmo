import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import splash from '../../../assets/images/splash.png';
const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        resizeMode="contain"
        style={{width: '100%', height: '100%'}}
        source={splash}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {flex: 1},
});
