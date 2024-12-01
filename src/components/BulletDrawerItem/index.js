import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';

const BulletDrawerItem = props => {
  return <Text style={styles.itemText}>• {props.title}</Text>;
};

export default BulletDrawerItem;

const styles = StyleSheet.create({
  itemText: {
    paddingVertical: scaledValue(10),
    fontSize: scaledValue(14),
    color: appColors.lightGray,
    marginLeft: scaledValue(20),
  },
});
