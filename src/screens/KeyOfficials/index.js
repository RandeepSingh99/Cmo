import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';

const KeyOfficials = () => {
  return (
    <View style={styles.keyOfficials}>
      <Header />
    </View>
  );
};

export default KeyOfficials;

const styles = StyleSheet.create({
  keyOfficials: {flex: 1, backgroundColor: appColors.background},
});
