import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';

const Distribution = () => {
  return (
    <View style={styles.keyOfficials}>
      <Header title="Distribution" />
      
    </View>
  );
};

export default Distribution;

const styles = StyleSheet.create({
  keyOfficials: {flex: 1, backgroundColor: appColors.background},
});
