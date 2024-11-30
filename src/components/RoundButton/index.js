import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';

const RoundButton = props => {
  return (
    <TouchableOpacity style={styles.touchable}>
      <Image resizeMode='contain' style={styles.actionButtonIcons} source={props.img} />
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  actionButtonIcons: {width: scaledValue(22), height: scaledValue(22)},
  touchable: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: appColors.gray,
    width: scaledValue(40),
    height: scaledValue(40),
    marginLeft: scaledValue(2),
    justifyContent:'center',alignItems:'center'
  },
});
