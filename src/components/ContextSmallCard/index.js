import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import contextSmallImg from '../../../assets/images/contextSmallImg.png';
import calenderIcon from '../../../assets/images/calenderIcon.png';

const ContextSmallCard = () => {
  return (
    <View style={styles.OuterContextSmallCard}>
      <Image
        resizeMode="contain"
        style={styles.contextSmallCardCalenderIcon}
        source={contextSmallImg}
      />

      <View style={styles.outerContextSmallCardTextDate}>
        <Text style={styles.ContextSmallCardText}>
          तापीय परियोजना एवं दूसरी अक्षय ऊर्जा परियोजना
        </Text>
        <View style={styles.contextCardCalenderDate}>
          <Image
            resizeMode="contain"
            style={styles.contextCardCalenderIcon}
            source={calenderIcon}
          />
          <Text style={styles.contextCardDate}>6 Aug 2024</Text>
        </View>
      </View>
    </View>
  );
};

export default ContextSmallCard;

const styles = StyleSheet.create({
  OuterContextSmallCard: {
    width: scaledValue(351),
    height: scaledValue(102),
    backgroundColor: appColors.white,
    marginHorizontal: scaledValue(10),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaledValue(5),
  },
  contextSmallCardCalenderIcon: {
    height: scaledValue(80),
    width: scaledValue(80),
    borderRadius: 4,
  },
  outerContextSmallCardTextDate: {
    marginVertical: scaledValue(10),
  },
  ContextSmallCardText: {
    fontSize: scaledValue(14),
    fontFamily: 'Mukta',
    fontWeight: 700,
    height: scaledValue(40),
    width: scaledValue(221.45),
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
    color: appColors.gray,
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
