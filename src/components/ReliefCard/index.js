import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import { formatToIndianUnits } from '../../utils';

const ReliefFundCard = ({reportName, totalCount, totalAmount, color, img}) => (
  <View style={[styles.card, {backgroundColor: color}]}>
    <View style={styles.outerReliefFundImageText}>
      <Image
        source={img} // Update with your icon path
        style={styles.icon}
      />
      <Text style={styles.reportName}>{reportName}</Text>
    </View>
    <Text style={styles.countNo}>{totalCount}</Text>
    <Text style={styles.countText}> No. of beneficiaries</Text>
    <Text style={styles.amountNo} numberOfLines={1}>{formatToIndianUnits(totalAmount)}</Text>
    <Text style={styles.amountText}>Total amount granted</Text>
  </View>
);

export default ReliefFundCard;

const styles = StyleSheet.create({
  card: {
    width: scaledValue(154),
    borderRadius: scaledValue(8),
    paddingVertical: scaledValue(16),
    marginHorizontal: scaledValue(6),
    marginBottom: scaledValue(14),
    alignItems:'center'
  },
  icon: {
    width: scaledValue(24),
    height: scaledValue(24),
    marginBottom:scaledValue( 8),
  },
  reportName: {
    fontSize: scaledValue(16),
    fontWeight: 'bold',
    color: appColors.black,
    marginBottom: scaledValue(4),
     textTransform: 'capitalize'
  },
  countNo: {
    fontSize: scaledValue(20),
    color: appColors.black,
    marginVertical: scaledValue(4),
    fontFamily: 'Roboto',
    fontWeight: '900',
   
  },
  countText: {
    fontSize: scaledValue(13),
    color: appColors.black,
    marginBottom: scaledValue(4),
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
  amountNo: {
    fontSize:scaledValue(20),
    color: appColors.black,
    marginVertical:scaledValue( 4),
    fontFamily: 'Roboto',
    fontWeight: '900',
    
  },
  amountText:{
    fontSize: scaledValue(13),
    color: appColors.black,
    marginBottom: scaledValue(4),
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
  outerReliefFundImageText: {
    flexDirection: 'row',
    alignItems: 'center',
    width:scaledValue(154),
    borderBottomWidth:scaledValue(0.4),
    borderBottomColor:appColors.inputBorder,
    paddingBottom:scaledValue(6)
  },
});
