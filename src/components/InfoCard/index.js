import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { scaledValue } from '../../utils/designUtils';
import { appColors } from '../../utils/constants/colors';
import phoneIcon from '../../../assets/images/phn.png'; // Replace with your phone icon path
import emailIcon from '../../../assets/images/mail.png'; // Replace with your phone icon path

const InfoCard = (props) => {
  return (
    <View style={styles.card}>
      <Text  allowFontScaling={false}style={styles.name}>{props.name}</Text>
      <Text  allowFontScaling={false}style={styles.designation}>{props.designation}</Text>
     {props.phnNumber&& <View style={styles.infoRow}>
        <Image source={phoneIcon} style={styles.icon} />
        <Text  allowFontScaling={false}style={styles.infoText}>{props.phnNumber}</Text>
      </View>}
     {props.email&& <View style={styles.infoRow}>
        <Image source={emailIcon} style={styles.icon} />
        <Text  allowFontScaling={false}style={styles.infoText}>{props.email}</Text>
      </View>}
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
