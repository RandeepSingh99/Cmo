import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';

const Button = props => {
  return (
    <View
      style={[
        styles.contributionClickHereButton,
        {
          height: scaledValue(props.height),
          width: scaledValue(props.width),
          backgroundColor: props.color,
          borderWidth: props.mode === 'contained' ? .5 : 0,
          borderColor:props.titleColor
        },
      ]}>
      <Text style={[, {color: props.titleColor}]}>{props.title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  contributionClickHereButton: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contributionClickHereButtonText: {
    fontFamily: 'Inter',
    fontWeight: '600',

    fontSize: scaledValue(14),
  },
});
