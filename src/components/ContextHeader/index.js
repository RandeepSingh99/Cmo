import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import ViewButton from '../ViewButton';

const ContextHeader = (props) => {
  return (
    <View style={styles.contextHeader}>
      <View style={styles.contextText}>
        <Text style={styles.contextText}>{props.title}</Text>
      </View>
        <ViewButton onPress={props.onPress} />
    </View>
  );
};

export default ContextHeader;

const styles = StyleSheet.create({
  contextHeader: {
    height: scaledValue(70),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scaledValue(15),
  },
  contextText: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: appColors.darkBlue,
    fontSize: scaledValue(20),
    flexDirection: 'row',
  },
});
