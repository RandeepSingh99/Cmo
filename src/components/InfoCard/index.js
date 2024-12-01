import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { scaledValue } from '../../utils/designUtils';
import { appColors } from '../../utils/constants/colors';
import phoneIcon from '../../../assets/images/phn.png'; // Replace with your phone icon path
import emailIcon from '../../../assets/images/mail.png'; // Replace with your phone icon path

const InfoCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Shri Shikhar Agrawal</Text>
      <Text style={styles.designation}>Additional Chief Secretary to CM</Text>
      <View style={styles.infoRow}>
        <Image source={phoneIcon} style={styles.icon} />
        <Text style={styles.infoText}>0141-2921023</Text>
      </View>
      <View style={styles.infoRow}>
        <Image source={emailIcon} style={styles.icon} />
        <Text style={styles.infoText}>acs.cmo@rajasthan.gov.in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: scaledValue(4),
    padding: scaledValue(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: appColors.border,
    width: scaledValue(346),
    alignSelf: 'center',
    marginVertical:scaledValue(8)
  },
  name: {
    fontSize: scaledValue(16),
    fontWeight: '700',
    color: appColors.darkBlue,
    marginBottom: scaledValue(4),
  },
  designation: {
    fontSize: scaledValue(14),
    fontWeight: '400',
    color: appColors.darkBlue,
    marginBottom: scaledValue(12),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaledValue(8),
  },
  icon: {
    width: scaledValue(20),
    height: scaledValue(20),
    marginRight: scaledValue(8),
  },
  infoText: {
    fontSize: scaledValue(14),
    fontWeight: '600',
    color: appColors.darkBlue,
  },
});

export default InfoCard;
