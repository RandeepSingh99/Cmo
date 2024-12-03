import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import rightArrow from '../../../assets/images/chevronRight.png'; // Replace with your right arrow icon path
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import twitterIcon from '../../../assets/images/twitterIcon.png';
import facebookIcon from '../../../assets/images/facebookIcon.png';

const ListItem = props => {
  const [expendable, setExpendable] = useState(false);
  return (
    <View style={styles.cardView}>
      <Pressable
        style={[
          styles.container,
          !expendable ? styles.allCornerRound : styles.upperCornerRound,
        ]}
        onPress={() => setExpendable(!expendable)}>
        <Text style={styles.title}>{props.title}</Text>
        <Image
          resizeMode="contain"
          source={rightArrow}
          style={[styles.icon, expendable && styles.transformed]}
        />
      </Pressable>
      {expendable && (
        <View style={styles.governorNameImage}>
          <View style={styles.outerGovernorImage}>
            <Image style={styles.governorImage} source={props.img} />
          </View>
          <View>
            <Text style={styles.governorName}>Haribhau Kisanrao Bagade</Text>
            <Text style={styles.governorPostName}>Governor of Rajasthan</Text>
          </View>
          <View style={styles.socialView}>
            <Image source={facebookIcon} style={styles.socialIcons} />
            <Image source={twitterIcon} style={styles.socialIcons} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appColors.white,
    width: scaledValue(345),
    paddingHorizontal: scaledValue(14),
    height: scaledValue(54),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: scaledValue(16),
    fontWeight: '600',
    color: appColors.black,
  },
  icon: {
    width: scaledValue(20),
    height: scaledValue(20),
  },
  governorNameImage: {
    width: scaledValue(345),
    backgroundColor: appColors.darkWhite,
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: scaledValue(24),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transformed: {
    transform: [{rotate: '90deg'}], // Rotate the image by 45 degrees
  },
  outerGovernorImage: {
    height: scaledValue(155.13),
    width: scaledValue(155.13),
    borderRadius: scaledValue(100),
  },
  governorImage: {
    height: scaledValue(155.13),
    width: scaledValue(155.13),
    backgroundColor: appColors.white,
    borderRadius: scaledValue(88),
    borderWidth: scaledValue(5),
    borderColor: appColors.border,
  },
  governorName: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(16),
    fontWeight: '800',
    marginTop: scaledValue(8),
  },
  governorPostName: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '600',
    textAlign: 'center',
    marginTop: scaledValue(6),
  },
  socialView: {
    flexDirection: 'row',
    marginTop: scaledValue(8),
  },
  socialIcons: {
    width: scaledValue(20),
    height: scaledValue(20),
    marginHorizontal: scaledValue(4),
  },
  cardView: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: scaledValue(6),
    marginHorizontal: scaledValue(16),
  },
  allCornerRound: {borderRadius: scaledValue(4)},
  upperCornerRound: {
    borderTopRightRadius: scaledValue(4),
    borderTopLeftRadius: scaledValue(4),
  },
});

export default ListItem;
