import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';

const ViewButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.BorderViewButton}>
      <Text  allowFontScaling={false}style={styles.viewButtonText}>View All</Text>
    </TouchableOpacity>
  );
};

export default ViewButton;

const styles = StyleSheet.create({
  BorderViewButton: {
    width: scaledValue(89),
    height: scaledValue(33),
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonText: {
    height: scaledValue(21),
    width: scaledValue(57),
    color: appColors.darkBlue,
    fontSize: scaledValue(14),
    fontWeight: '800',
    justifyContent: 'center',
    fontFamily: 'Inter',
  },
});
