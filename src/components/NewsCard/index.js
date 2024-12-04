import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import calenderIcon from '../../../assets/images/calenderIcon.png';
import {appColors} from '../../utils/constants/colors';
import {pressReleaseImageUri} from '../../utils/constants/uri';

const NewsCard = props => {
  return (
    <TouchableOpacity style={styles.contextCard}>
      <Image
        resizeMode="cover"
        style={styles.contextPhoto}
        source={{uri: props.img || pressReleaseImageUri}}
      />
      <View style={styles.outerContextCardText}>
        <Text numberOfLines={3} style={styles.contextCardText}>
          {props.title}
        </Text>
      </View>
      <View style={styles.contextCardCalenderDate}>
        <Image
          resizeMode="contain"
          style={styles.contextCardCalenderIcon}
          source={calenderIcon}
        />
        <Text style={styles.contextCardDate}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  contextCard: {
    height: scaledValue(219),
    width: scaledValue(200),
    borderRadius: scaledValue(4),
    marginHorizontal: scaledValue(10),
    backgroundColor: appColors.white,
    borderWidth: 0.5,
    borderColor: appColors.border,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
  contextPhoto: {
    height: scaledValue(100),
    width: scaledValue(180),
    borderRadius: scaledValue(4),
    marginTop: scaledValue(8),
  },
  outerContextCardText: {
    width: scaledValue(181),
  },
  contextCardText: {
    fontFamily: 'Mukta',
    fontWeight: '700',
    fontSize: scaledValue(14),
    marginTop: scaledValue(8),
  },
  contextCardCalenderDate: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scaledValue(180),
    marginTop: scaledValue(8),
  },
  contextCardCalenderIcon: {
    height: scaledValue(15),
    width: scaledValue(15),
    marginRight: scaledValue(6),
  },
  contextCardDate: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: scaledValue(12),
  },
});
