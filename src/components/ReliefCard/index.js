import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';


const ReliefFundCard = ({reportName, totalCount, totalAmount, color, img}) => (
  <View style={[styles.card, {backgroundColor: color}]}>
    <Image
      source={img} // Update with your icon path
      style={styles.icon}
    />
    <Text style={styles.reportName}>{reportName}</Text>
    <Text style={styles.count}>{totalCount} No. of beneficiaries</Text>
    <Text style={styles.amount}>{totalAmount} Total amount granted</Text>
  </View>
);

export default ReliefFundCard;

const styles = StyleSheet.create({
  card: {
    width: scaledValue(150),
    borderRadius: scaledValue(8),
    padding: 16,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  reportName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  count: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: appColors.background,
  },
});
