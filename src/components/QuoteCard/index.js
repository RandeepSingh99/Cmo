import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import QuoteCardImage from '../../../assets/images/QuoteCardImage.png';
import instagramIcon from '../../../assets/images/instagramIcon.png';
import twitterIcon from '../../../assets/images/twitterIcon.png';
import facebookIcon from '../../../assets/images/facebookIcon.png';
import calenderIcon from '../../../assets/images/calenderIcon.png';

const QuoteCard = props => {
  return (
    <TouchableOpacity style={styles.QuoteCard} onPress={props.onPress}>
      <View style={styles.QuoteCardDetail}>
        <Image style={styles.QuoteCardDetailImage} source={{uri: props.img}} />
        <Text style={styles.QuoteCardDetailText}>{props.title}</Text>
        <View style={styles.titleView}>
          <View style={styles.dateView}>
            <Image
              resizeMode="contain"
              style={styles.contextCardCalenderIcon}
              source={calenderIcon}
            />
            <Text style={styles.date}>{props.date}</Text>
          </View>

          <View style={styles.socialView}>
            <Image source={facebookIcon} style={styles.socialIcons} />
            <Image source={instagramIcon} style={styles.socialIcons} />
            <Image source={twitterIcon} style={styles.socialIcons} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  QuoteCard: {
    backgroundColor: appColors.lightPink,
    alignItems:'center',
  },
  QuoteCardDetail: {
    height: scaledValue(445),
    width: scaledValue(345),
    backgroundColor: appColors.white,
    borderRadius: scaledValue(8),
    marginVertical: scaledValue(10),
    padding:scaledValue(10),
    alignItems:'center',
  },
  QuoteCardDetailImage: {
    borderRadius: scaledValue(8),
    height: scaledValue(325),
    width: scaledValue(325),
    padding:scaledValue(10)
  },
  QuoteCardDetailText: {
    fontSize: scaledValue(14),
    fontFamily: 'Mukta',
    fontWeight: '700',
    width: scaledValue(304),
    marginVertical:scaledValue(10),
  },
  titleView: {
    width: scaledValue(324),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaledValue(16),
    justifyContent: 'space-between',
  },
  dateView: {flexDirection: 'row', alignItems: 'center'},
  contextCardCalenderIcon: {
    height: scaledValue(15),
    width: scaledValue(15),
    margin: scaledValue(5),
    marginRight: scaledValue(8),
  },
  date: {
    fontSize: 14,
    color: '#6c757d',
  },
  socialView: {
    flexDirection: 'row',
    width: scaledValue(107),
    justifyContent: 'space-between',
  },
  socialIcons: {
    width: scaledValue(20),
    height: scaledValue(20),
  },
});
