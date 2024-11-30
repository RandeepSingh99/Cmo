import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import banner from '../../../assets/images/banner.png';
import {scaledValue} from '../../utils/designUtils';
const Home = () => {
  return (
    <View>
      <Header />
      <Image
        resizeMode="contain"
        style={styles.banner}
        source={banner}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner:{width: scaledValue(375), height: scaledValue(177)}
});
