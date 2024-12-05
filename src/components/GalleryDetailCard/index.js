import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {pressReleaseImageUri} from '../../utils/constants/uri';
import shareIcon from '../../../assets/images/shareIcon.png';
import {scaledValue} from '../../utils/designUtils';
import calenderIcon from '../../../assets/images/calenderIcon.png';
import {appColors} from '../../utils/constants/colors';

const GalleryDetailCard = (props) => {
  return (
    <View style={styles.contextCard}>
      <Image
        resizeMode="cover"
        style={styles.contextPhoto}
        source={{uri: props.img}}
      />
      <View style={styles.outerContextCardText}>
        <Text numberOfLines={2} style={styles.contextCardText}>
          {props.title}
        </Text>
      </View>
      <View style={styles.outerContextCardCalenderDate}>
        <View style={styles.contextCardCalenderDate}>
          <Image
            resizeMode="contain"
            style={styles.contextCardCalenderIcon}
            source={calenderIcon}
          />
          <Text style={styles.contextCardDate}>{props.date}</Text>
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={styles.shareIcon}
            source={shareIcon}
          />
        </View>
      </View>
      <View style={styles.contextSC}>
        <View style={styles.contextSmallCards}>
          <Image
            resizeMode="contain"
            style={styles.contextSmallCardsImage}
            source={{uri: props.img}}
          />
        </View>
        <View style={styles.contextSmallCards}>
          <Image
            resizeMode="contain"
            style={styles.contextSmallCardsImage}
            source={{uri: props.img}}
          />
        </View>
        <View style={styles.contextSmallCards}>
          <Image
            resizeMode="contain"
            style={styles.contextSmallCardsImage}
            source={{uri: props.img}}
          />
        </View>
        <View style={styles.contextSmallCards}>
          <Image
            resizeMode="contain"
            style={styles.contextSmallCardsImage}
            source={{uri: props.img}}
          />
        </View>
      </View>
    </View>
  );
};

export default GalleryDetailCard;

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
    marginVertical: scaledValue(8),
    
  },
  contextPhoto: {
    height: scaledValue(199),
    width: scaledValue(325),
    borderRadius: scaledValue(4),
  },
  outerContextCardText: {
    padding: scaledValue(10),
  },
  contextCardText: {
    fontFamily: 'Mukta',
    fontWeight: '700',
    fontSize: scaledValue(16),
  },
  outerContextCardCalenderDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaledValue(30),
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
  shareIcon: {
    height: scaledValue(32),
    width: scaledValue(32),
    margin: scaledValue(5),
  },
  contextSmallCards: {
    width: scaledValue(150),
    height: scaledValue(150),
    borderRadius: scaledValue(4),
    backgroundColor: appColors.lightPink,
    alignItems: 'center',
    marginHorizontal:scaledValue(5),
    marginVertical:scaledValue(5)
  },
  contextSmallCardsImage: {
    width: scaledValue(131.25),
    height: scaledValue(131.25),
    borderRadius: scaledValue(4),
  
  },
  contextSC: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});
