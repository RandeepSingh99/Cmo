import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import minusCircle from '../../../assets/images/minusCircle.png';
import LanguageToggle from '../LanguageToggle';
const DrawerItem = props => {
  return (
    <TouchableOpacity style={styles.itemView} onPress={props.onPress}>
      <Text allowFontScaling={false} style={styles.itemText}>
        {props.title}
      </Text>
      {props.showMinus && (
        <Image resizeMode="contain" style={styles.minus} source={minusCircle} />
      )}
      {props.title === 'Language' && <LanguageToggle />}
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  itemView: {
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    height:scaledValue(52)
  },
  itemText: {
    fontSize: scaledValue(16),
    fontWeight: '500',
    color: appColors.black,
  },
  minus: {width: scaledValue(24), height: scaledValue(24)},
});
