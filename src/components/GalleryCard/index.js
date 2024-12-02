import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import contextPhoto from '../../../assets/images/contextPhoto.png';
import calenderIcon from '../../../assets/images/calenderIcon.png';
import {appColors} from '../../utils/constants/colors';
import {useNavigation} from '@react-navigation/native';
import {appRoutes} from '../../utils/constants/routeNames';

const GalleryCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(appRoutes.events)}
      style={styles.contextCard}>
      <Image
        resizeMode="cover"
        style={styles.contextPhoto}
        source={contextPhoto}
      />
      <View style={styles.outerContextCardText}>
        <Text style={styles.contextCardText}>
          बजट घोषणाओं के लिए इलेक्ट्रोपैथी चिकित्सकों द्वारा आभार एवं
          अभिनंदन......
        </Text>
      </View>
      <View style={styles.contextCardCalenderDate}>
        <Image
          resizeMode="contain"
          style={styles.contextCardCalenderIcon}
          source={calenderIcon}
        />
        <Text style={styles.contextCardDate}>6 Aug 2024</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GalleryCard;

const styles = StyleSheet.create({
  contextCard: {
    width: scaledValue(345),
    padding: scaledValue(10),
    borderRadius: scaledValue(4),
    backgroundColor: appColors.white,
    borderWidth: 0.5,
    borderColor: appColors.border,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical:scaledValue(8)
  },
  contextPhoto: {
    height: scaledValue(199),
    width: scaledValue(325),
    borderRadius: scaledValue(4),
  },
  outerContextCardText: {
    height: scaledValue(70),
    width: scaledValue(181),
    padding: scaledValue(5),
  },
  contextCardText: {
    fontFamily: 'Mukta',
    fontWeight: '700',
    fontSize: scaledValue(16),
  },
  contextCardCalenderDate: {
    flexDirection: 'row',
    alignItems: 'center',
    height: scaledValue(30),
  },
  contextCardCalenderIcon: {
    height: scaledValue(15),
    width: scaledValue(15),
    margin: scaledValue(5),
  },
  contextCardDate: {
    height: scaledValue(20),
    width: scaledValue(151.04),
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: scaledValue(12),
  },
});
