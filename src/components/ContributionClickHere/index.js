import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';

const ContributionClickHere = () => {
  return (
    <View style={styles.ContributionClickHere}>
      <Text style={styles.ContributionClickHereText}>
        Contribute to Disaster Relief and support to Rajasthan
      </Text>
      <Text style={styles.ContributionClickHereDonateText}>
        Donate to Rajasthan Chief Minister Relief Fund
      </Text>
      <View style={styles.ContributionClickHereButton}>
        <Text style={styles.ContributionClickHereButtonText}>Click Here</Text>
      </View>
    </View>
  );
};

export default ContributionClickHere;

const styles = StyleSheet.create({
  ContributionClickHere: {
    height: scaledValue(196),
    width: scaledValue(351),
    margin: scaledValue(10),
    borderWidth: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  ContributionClickHereText: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    lineHeight: scaledValue(23),
    width: scaledValue(290),
    height: scaledValue(46),
    fontSize: scaledValue(16),
    marginTop: scaledValue(29),
    color: appColors.darkBlue,
    textAlign: 'center',
  },
  ContributionClickHereDonateText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: scaledValue(18),
    fontSize: scaledValue(12),
    textAlign: 'center',
    paddingVertical: scaledValue(10),
  },
  ContributionClickHereButton: {
    height: scaledValue(49),
    width: scaledValue(192),
    backgroundColor: appColors.blue,
    borderRadius: 100,
  },
  ContributionClickHereButtonText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    color: appColors.white,
    fontSize: scaledValue(14),
    lineHeight: scaledValue(21),
  },
});
