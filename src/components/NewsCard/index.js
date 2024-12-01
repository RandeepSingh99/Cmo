import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import contextPhoto from '../../../assets/images/contextPhoto.png';
import calenderIcon from '../../../assets/images/calenderIcon.png';
import {appColors} from '../../utils/constants/colors';
import {useNavigation} from '@react-navigation/native';
import {appRoutes} from '../../utils/constants/routeNames';

const NewsCard = () => {
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

export default NewsCard;

const styles = StyleSheet.create({
  contextCard: {
    height: scaledValue(219),
    width: scaledValue(200),
    padding: scaledValue(10),
    borderRadius: scaledValue(4),
    marginHorizontal: scaledValue(10),
    backgroundColor: appColors.white,
    borderWidth: 0.5,
    borderColor: appColors.border,
  },
  contextPhoto: {
    height: scaledValue(100),
    width: scaledValue(180),
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
    fontSize: scaledValue(14),
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
