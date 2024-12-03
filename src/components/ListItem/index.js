import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import rightArrow from '../../../assets/images/chevronRight.png'; // Replace with your right arrow icon path
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import twitterIcon from '../../../assets/images/twitterIcon.png';
import facebookIcon from '../../../assets/images/facebookIcon.png';
import {appRoutes} from '../../utils/constants/routeNames';

const ListItem = props => {
  const [expendable, setExpendable] = useState(false);

  const renderProfileCard = () =>
    props.title.includes('Governor') || props.title.includes('Chief');
  const renderDetailCard = () =>
    props.title.includes('Governor') || props.title === 'Chief Minister';
  const renderDepartments = () =>
    props.title === 'Deputy Chief Minister' ||
    props.title === 'Cabinet Minister' ||
    props.title.includes('State Minister');

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
        <View>
          {renderProfileCard() && (
            <View style={styles.governorNameImage}>
              <View style={styles.outerGovernorImage}>
                <Image style={styles.governorImage} source={props.img} />
              </View>
              <View>
                <Text style={styles.governorName}>
                  Haribhau Kisanrao Bagade
                </Text>
                <Text style={styles.governorPostName}>
                  Governor of Rajasthan
                </Text>
              </View>
              <View style={styles.socialView}>
                <Image source={facebookIcon} style={styles.socialIcons} />
                <Image source={twitterIcon} style={styles.socialIcons} />
              </View>
            </View>
          )}
          {renderDetailCard() && (
            <View style={styles.governorDescription}>
              <View style={styles.governorDescriptionDOB}>
                <Text style={styles.governorDescriptionDateOfBirth}>
                  Date of Birth :{' '}
                </Text>
                <Text style={styles.governorDescriptionDOBName}>
                  17 August 1945
                </Text>
              </View>
              <View style={styles.governorDescriptionHomeTown}>
                <Text style={styles.governorDescriptionHT}>Home Town : </Text>
                <Text style={styles.governorDescriptionHTName}>
                  Phulambri, Aurangabad, Maharashtra
                </Text>
              </View>
              <View style={styles.governorDescriptionSocialMediaApp}>
                <View style={styles.governorDescriptionSocialMedia}>
                  <Text style={styles.governorDescriptionSMT}>
                    Social Media Twitter
                  </Text>
                  <Text style={styles.governorDescriptionSMTid}>
                    @rajbhavanjaipur
                  </Text>
                </View>
                <View style={styles.governorDescriptionSocialMedia}>
                  <Text style={styles.governorDescriptionSMT}>Facebook</Text>
                  <Text style={styles.governorDescriptionSMTid}>
                    @RajBhavanJaipur
                  </Text>
                </View>
              </View>
              <View style={styles.governorDescriptionContactDetails}>
                <Text style={styles.governorDescriptionCD}>
                  Contacts Details
                </Text>
                <Text style={styles.governorDescriptionCDName}>
                  Governor’s secretariat, raj bhawan jaipur epabx
                  0141-2228716-19, 2228722, 2228611, 2228612 FAX No 0141-2221156
                </Text>
              </View>
              <View style={styles.governorDescriptionExecutivePosition}>
                <Text style={styles.governorDescriptionELP}>
                  Executive & Legislative Positions
                </Text>
                <Text style={styles.governorDescriptionELPName}>
                  Governor of Rajasthan from 31st July, 2024
                </Text>
              </View>
              <View style={styles.governorDescriptionAtPresent}>
                <Text style={styles.governorDescriptionAT}>At Present</Text>
                <Text style={styles.governorDescriptionATName}>
                  Assumed the office of the Governor of Rajasthan on 31st July,
                  2024.
                </Text>
              </View>
            </View>
          )}

          {renderDepartments() && <View></View>}
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
  },
  allCornerRound: {borderRadius: scaledValue(4)},
  upperCornerRound: {
    borderTopRightRadius: scaledValue(4),
    borderTopLeftRadius: scaledValue(4),
  },

  governorDescription: {
    width: scaledValue(345),
    paddingVertical: scaledValue(40),
    backgroundColor: appColors.white,
    paddingHorizontal: scaledValue(20),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderBottomStartRadius: scaledValue(4),
    borderBottomEndRadius: scaledValue(4),
  },
  governorDescriptionDOB: {
    flexDirection: 'row',
    height: scaledValue(31),
    width: scaledValue(311),
  },
  governorDescriptionDateOfBirth: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: 800,
  },
  governorDescriptionDOBName: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: 600,
  },
  governorDescriptionHomeTown: {
    flexDirection: 'row',
    height: scaledValue(31),
    width: scaledValue(311),
  },
  governorDescriptionHT: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
  },
  governorDescriptionHTName: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '600',
    width: scaledValue(210),
  },
  governorDescriptionSocialMediaApp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scaledValue(31),
    width: scaledValue(311),
  },
  governorDescriptionSMT: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
  },
  governorDescriptionSMTid: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '600',
  },
  governorDescriptionContactDetails: {
    flexDirection: 'column',
    marginTop: scaledValue(10),
    width: scaledValue(311),
  },
  governorDescriptionCD: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
  },
  governorDescriptionCDName: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '600',
  },
  governorDescriptionExecutivePosition: {
    marginTop: scaledValue(10),
    width: scaledValue(311),
  },
  governorDescriptionELP: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
  },
  governorDescriptionELPName: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '600',
  },
  governorDescriptionAtPresent: {
    marginTop: scaledValue(10),
    width: scaledValue(311),
  },
  governorDescriptionAT: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
  },
  governorDescriptionATName: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '600',
  },
});

export default ListItem;
