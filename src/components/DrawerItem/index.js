import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import minusCircle from '../../../assets/images/minusCircle.png';
const DrawerItem = props => {
  return (
    <TouchableOpacity style={styles.itemView} onPress={props.onPress}>
      <Text style={styles.itemText}>{props.title}</Text>
      {props.showMinus && (
        <Image resizeMode="contain" style={styles.minus} source={minusCircle} />
      )}
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  itemView: {
    padding: 15,
    backgroundColor: appColors.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: scaledValue(16),
    fontWeight: '500',
    color: appColors.black,
  },
  minus: {width: scaledValue(24), height: scaledValue(24)},
});
