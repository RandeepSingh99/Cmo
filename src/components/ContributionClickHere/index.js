import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { scaledValue } from '../../utils/designUtils';
import { appColors } from '../../utils/constants/colors';
import Button from '../Button';

const ContributionClickHere = () => {
  return (
    <View style={styles.contributionClickHere}>
      <Text style={styles.contributionClickHereText}>
        Contribute to Disaster Relief and support to Rajasthan
      </Text>
      <Text style={styles.contributionClickHereDonateText}>
        Donate to Rajasthan Chief Minister Relief Fund
      </Text>
      <Button />
    </View>
  );
};

export default ContributionClickHere;

const styles = StyleSheet.create({
  contributionClickHere: {
    height: scaledValue(196),
    width: scaledValue(351),
    margin: scaledValue(10),
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: appColors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: appColors.border,
  },
  contributionClickHereText: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    width: scaledValue(290),
    height: scaledValue(46),
    fontSize: scaledValue(16),
    marginTop: scaledValue(29),
    color: appColors.darkBlue,
    textAlign: 'center',
  },
  contributionClickHereDonateText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: scaledValue(12),
    textAlign: 'center',
    paddingVertical: scaledValue(10),
  },
 
});
