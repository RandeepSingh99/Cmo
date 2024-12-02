import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../utils/designUtils';
import { appColors } from '../../utils/constants/colors';
import Spacer from '../Spacer';

const FormerCm = () => {
  return (
    <TouchableOpacity  style={styles.card}>
        <Image source={{uri: 'https://via.placeholder.com/300'}} style={styles.icon} />
        <Spacer height={scaledValue(12)}/>
      <Text style={styles.cardText}> Smt. Vasundhara Raje</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: scaledValue(161), // Adjust to fit 2 cards per row with some spacing
    backgroundColor: '#fff',
    borderRadius: scaledValue(5),
    paddingVertical: scaledValue(18),
    alignItems: 'center',
    margin: scaledValue(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  icon: {
    width: scaledValue(85),
    height: scaledValue(85),
    resizeMode: 'contain',
    borderRadius:200
  },
  cardText: {
    fontSize: scaledValue(14),
    fontWeight: '500',
    textAlign: 'center',
    color: appColors.black,
    width: scaledValue(148), // Adjust to fit 2 cards per row with some spacing

  },
});

export default FormerCm;
