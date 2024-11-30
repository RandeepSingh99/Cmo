import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { scaledValue } from '../../utils/designUtils';
import liveImg from '../../../assets/images/liveImg.png';
import { appColors } from '../../utils/constants/colors';

const RoundButton = () => {
  return (
    <TouchableOpacity style={styles.touchable}>
      <Image style={styles.actionButtonIcons} source={liveImg} />
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  actionButtonIcons: {width: scaledValue(40), height: scaledValue(40)},
  touchable:{
    borderWidth:1,
    borderRadius:100,
    borderColor:appColors.gray,marginLeft:scaledValue(2)
  }
});
