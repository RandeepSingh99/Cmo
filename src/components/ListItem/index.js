import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import rightArrow from '../../../assets/images/chevronRight.png'; // Replace with your right arrow icon path
import {scaledValue} from '../../utils/designUtils';
import { appColors } from '../../utils/constants/colors';

const ListItem = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Image resizeMode='contain' source={rightArrow} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:appColors.white,
    borderRadius: scaledValue(4),
    width:scaledValue(345),
    paddingHorizontal: scaledValue(14),
    height:scaledValue(54),
    marginHorizontal: scaledValue(16),
    marginVertical: scaledValue(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: scaledValue(16),
    fontWeight: '600',
    color: appColors.black,
  },
  icon: {
    width: scaledValue(20),
    height: scaledValue(20),
  },
});

export default ListItem;
