import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import {formatToIndianUnits} from '../../utils';

const ReliefFundCard = ({reportName, totalCount, totalAmount, color, img}) => (
  <View style={[styles.card, {backgroundColor: color}]}>
    <View style={styles.outerReliefFundImageText}>
      {img && (
        <View style={styles.iconView}>
          <Image
            source={img} // Update with your icon path
            style={styles.icon}
          />
        </View>
      )}

      <Text
        style={[
          styles.reportName,
          reportName === 'Grand Total' ? styles.grandText : styles.nonGrandText,
        ]}>
        {reportName}
      </Text>
    </View>
    <Text style={styles.countNo}>{totalCount}</Text>
    <Text style={styles.countText}> No. of beneficiaries</Text>
    <Text style={styles.amountNo} numberOfLines={1}>
      {formatToIndianUnits(totalAmount)}
    </Text>
    <Text style={styles.amountText}>Total amount granted</Text>
  </View>
);

export default ReliefFundCard;

const styles = StyleSheet.create({
  iconView: {
    width: scaledValue(38),
    height: scaledValue(38),
    backgroundColor: appColors.white,
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: appColors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaledValue(10),
  },
  card: {
    width: scaledValue(154),
    borderRadius: scaledValue(8),
    paddingBottom: scaledValue(16),
    marginHorizontal: scaledValue(6),
    marginBottom: scaledValue(14),
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: appColors.border,
  },
  icon: {
    width: scaledValue(24),
    height: scaledValue(24),
  },
  reportName: {
    fontWeight: 'bold',
    color: appColors.black,
    textTransform: 'capitalize',
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
    fontSize: scaledValue(20),
    color: appColors.black,
    marginVertical: scaledValue(4),
    fontFamily: 'Roboto',
    fontWeight: '900',
  },
  amountText: {
    fontSize: scaledValue(13),
    color: appColors.black,
    marginBottom: scaledValue(4),
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
  outerReliefFundImageText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scaledValue(154),
    height: scaledValue(52),
    borderBottomWidth: scaledValue(0.4),
    borderColor: appColors.border,
  },
  grandText: {
    fontSize: scaledValue(20),
  },
  nonGrandText: {
    fontSize: scaledValue(16),
  },
});
