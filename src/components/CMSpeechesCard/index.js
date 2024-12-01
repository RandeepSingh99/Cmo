import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import contextPhoto from '../../../assets/images/contextPhoto.png';

const CMSpeechesCard = () => {
  return (
    <View style={styles.cmSpeechesCard}>
      <Image
        resizeMode="cover"
        style={styles.contextPhoto}
        source={contextPhoto}
      />
      <Text style={styles.cmSpeechesCardText}>राजस्थान के मुख्यमंत्री श्री भजनलाल शर्मा एवं एमपी के मुख्यमंत्री डॉ. मोहन यादव की प्रेस वार्ता</Text>
    </View>
  );
};

export default CMSpeechesCard;

const styles = StyleSheet.create({
  cmSpeechesCard: {
    height: scaledValue(450),
    width: scaledValue(350),
    borderRadius: 16,
    backgroundColor: appColors.white,
    marginLeft: scaledValue(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: appColors.border,
  },
  contextPhoto:{
    width:scaledValue(318),
    height:scaledValue(342),
    borderRadius:21,
    marginLeft: scaledValue(12),
  },
  cmSpeechesCardText:{
    fontFamily:'Mukta',
    fontWeight:600,
    fontSize:scaledValue(16),
    width:scaledValue(318),
    color:appColors.darkBlue,
    height:scaledValue(42),
    margin: scaledValue(12),
    textAlign: 'center',
  }
});
