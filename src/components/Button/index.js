import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';

const Button = props => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
      style={[
        styles.contributionClickHereButton,
        {
          height: scaledValue(props.height),
          width: scaledValue(props.width),
          backgroundColor: props.color,
          borderWidth: props.mode === 'contained' ? 0.5 : 0,
          borderColor: props.titleColor,
        },
      ]}>
      <Text allowFontScaling={false} style={[, {color: props.titleColor}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
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
