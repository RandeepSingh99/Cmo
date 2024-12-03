import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import calenderIcon from '../../../assets/images/calenderIcon.png';

const QuotesCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.outerContextSmallCard}>
      <Image
        resizeMode="contain"
        style={styles.contextSmallCardCalenderIcon}
        source={{uri: props.img}}
      />
      <View style={styles.outerContextSmallCardTextDate}>
        <Text numberOfLines={2} style={styles.contextSmallCardText}>
          {props.title}
        </Text>
        <View style={styles.contextCardCalenderDate}>
          <Image
            resizeMode="contain"
            style={styles.contextCardCalenderIcon}
            source={calenderIcon}
          />
          <Text style={styles.contextCardDate}>{props.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuotesCard;

const styles = StyleSheet.create({
  outerContextSmallCard: {
    width: scaledValue(351),
    height: scaledValue(102),
    backgroundColor: appColors.white,
    marginHorizontal: scaledValue(10),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaledValue(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: appColors.border,
    paddingHorizontal: scaledValue(9),
  },
  contextSmallCardCalenderIcon: {
    height: scaledValue(80),
    width: scaledValue(80),
    borderRadius: 4,
    marginRight: scaledValue(12),
  },
  outerContextSmallCardTextDate: {
    marginVertical: scaledValue(10),
    height: scaledValue(70),

  },
  contextSmallCardText: {
    fontSize: scaledValue(14),
    fontFamily: 'Mukta',
    fontWeight: '700',
    width: scaledValue(230),
  },
  contextCardCalenderDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:scaledValue(8),
  },
  contextCardCalenderIcon: {
    height: scaledValue(15),
    width: scaledValue(15),
    marginRight: scaledValue(7),
  },
  contextCardDate: {
    width: scaledValue(151.04),
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: scaledValue(12),
  },
});
