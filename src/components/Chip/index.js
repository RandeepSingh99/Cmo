import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';

const Chip = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.chip,
        {
          borderBottomWidth:
            props.selected === props.title ? scaledValue(2) : 0,
        },
      ]}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    height: scaledValue(52),
    borderBottomColor: appColors.darkBlue,

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaledValue(10),
  },
  title: {
    fontSize: scaledValue(16),
    fontWeight: '600',
    color: appColors.darkBlue,
  },
});
