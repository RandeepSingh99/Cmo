import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, FlatList} from 'react-native';
import rightArrow from '../../../assets/images/chevronRight.png'; // Replace with your right arrow icon path
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import twitterIcon from '../../../assets/images/twitterIcon.png';
import facebookIcon from '../../../assets/images/facebookIcon.png';
import phoneCall from '../../../assets/images/phoneCall.png';
import {govData} from '../../utils/constants';

const ListItem = props => {
  const [expendable, setExpendable] = useState(false);

  useEffect(() => {
    if (props.activeListItem === props.title) {
      setExpendable(true);
    }
    return () => setExpendable(false);
  }, [props.activeListItem]);

  const renderProfileCard = () =>
    props.title === 'Governor' ||
    props.title === 'Chief Minister' ||
    props.title === 'Deputy Chief Minister';

  const renderDetailCard = () =>
    props.title.includes('Governor') || props.title === 'Chief Minister';

  const renderDepartments = () =>
    props.title === 'Deputy Chief Minister' ||
    props.title === 'Cabinet Minister' ||
    props.title.includes('State Minister');

  const renderSmallGovProfileCard = () =>
    props.title === 'Cabinet Minister' ||
    props.title === 'MLA' ||
    props.title === 'Chief Secretary' ||
    props.title.includes('State Minister');

  return (
    <View style={styles.cardView}>
      <Pressable
        style={[
          styles.container,
          !expendable ? styles.allCornerRound : styles.upperCornerRound,
        ]}
        onPress={() => setExpendable(!expendable)}>
        <Text allowFontScaling={false} style={styles.title}>
          {props.title}
        </Text>
        <Image
          resizeMode="contain"
          source={rightArrow}
          style={[styles.icon, expendable && styles.transformed]}
        />
      </Pressable>
      <FlatList
        data={govData[props.title]}
        renderItem={({item}) => (
          <>
            {expendable && (
              <View>
                {renderProfileCard() && (
                  <View style={styles.governorNameImage}>
                    {item?.img && (
                      <View style={styles.outerGovernorImage}>
                        <Image
                          style={styles.governorImage}
                          source={item?.img}
                        />
                      </View>
                    )}
                    <View>
                      <Text
                        allowFontScaling={false}
                        style={styles.governorName}>
                        {item?.name}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={styles.governorPostName}>
                        {item?.post}
                      </Text>
                    </View>
                    <View style={styles.socialView}>
                      {item?.social?.fb && (
                        <Image
                          source={facebookIcon}
                          style={styles.socialIcons}
                        />
                      )}
                      {item?.social?.twitter && (
                        <Image
                          source={twitterIcon}
                          style={styles.socialIcons}
                        />
                      )}
                    </View>
                  </View>
                )}
                {renderDetailCard() && (
                  <View style={styles.governorDescription}>
                    {item?.dob && (
                      <View style={styles.governorDescriptionDOB}>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionDateOfBirth}>
                          Date of Birth :{' '}
                        </Text>

                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionDOBName}>
                          {item?.dob}
                        </Text>
                      </View>
                    )}
                    {item?.homeTown && (
                      <View style={styles.governorDescriptionHomeTown}>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionHT}>
                          Home Town :{' '}
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionHTName}>
                          {item?.homeTown}
                        </Text>
                      </View>
                    )}
                    <View style={styles.governorDescriptionSocialMediaApp}>
                      {item?.social.twitter && (
                        <View>
                          <Text
                            allowFontScaling={false}
                            style={styles.governorDescriptionSMT}>
                            Social Media Twitter
                          </Text>
                          <Text
                            allowFontScaling={false}
                            style={styles.governorDescriptionSMTid}>
                            {item?.social.twitter}
                          </Text>
                        </View>
                      )}
                      {item?.social.fb && (
                        <View>
                          <Text
                            allowFontScaling={false}
                            style={styles.governorDescriptionSMT}>
                            Facebook
                          </Text>
                          <Text
                            allowFontScaling={false}
                            style={styles.governorDescriptionSMTid}>
                            {item?.social.fb}
                          </Text>
                        </View>
                      )}
                    </View>
                    {item?.contact && (
                      <View style={styles.governorDescriptionContactDetails}>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionCD}>
                          Contacts Details
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionCDName}>
                          {item?.contact}
                        </Text>
                      </View>
                    )}
                    {item?.exec && (
                      <View style={styles.governorDescriptionExecutivePosition}>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionELP}>
                          Executive & Legislative Positions
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionELPName}>
                          {item?.exec}
                        </Text>
                      </View>
                    )}
                    {item?.atPresent && (
                      <View style={styles.governorDescriptionAtPresent}>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionAT}>
                          At Present
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.governorDescriptionATName}>
                          {item?.atPresent}
                        </Text>
                      </View>
                    )}
                  </View>
                )}
                {renderSmallGovProfileCard() && (
                  <View style={styles.outerCabinetMinister}>
                    {item?.img && (
                      <View style={styles.cabinetMinisterImage}>
                        <Image
                          style={styles.cabinetMinisterI}
                          source={item?.img}
                        />
                      </View>
                    )}
                    <View style={styles.outerCabinetMinisterText}>
                      <View>
                        {item?.name && (
                          <Text
                            allowFontScaling={false}
                            style={styles.cabinetMinisterText}>
                            {item?.name}
                          </Text>
                        )}
                        {item?.post && (
                          <Text
                            allowFontScaling={false}
                            style={styles.cabinetMinisterTextName}>
                            {item?.post}
                          </Text>
                        )}
                        {item?.dob && (
                          <Text
                            allowFontScaling={false}
                            style={styles.cabinetMinisterTextName}>
                            D.O.B {item?.dob}
                          </Text>
                        )}
                        {item?.qualification && (
                          <Text
                            numberOfLines={2}
                            allowFontScaling={false}
                            style={styles.cabinetMinisterTextName}>
                            Qualification {item?.qualification}
                          </Text>
                        )}
                      </View>
                      {item?.phnNumber && (
                        <View style={styles.cabinetMinisterPhoneNo}>
                          <Image style={styles.phoneCall} source={phoneCall} />
                          <Text
                            allowFontScaling={false}
                            style={styles.cabinetMinisterPhoneNoName}>
                            {item?.phnNumber}
                          </Text>
                        </View>
                      )}
                      {props.title === 'MLA' && (
                        <View>
                          <Text
                            allowFontScaling={false}
                            style={styles.cabinetMinisterAssemblyC}>
                            Assembly Constituency
                          </Text>
                          <Text
                            allowFontScaling={false}
                            style={styles.cabinetMinisterAC}>
                            {item?.assembly}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                )}
                {renderDepartments() && (
                  <View style={styles.outerDeputyChiefMinister}>
                    <View style={styles.innerDeputyChiefMinister}>
                      <Text
                        allowFontScaling={false}
                        style={styles.deputyChiefMinisterD}>
                        Department
                      </Text>
                      {item?.department.map(text => (
                        <Text
                          numberOfLines={1}
                          style={styles.deputyChiefMinisterDName}>
                          • {text}
                        </Text>
                      ))}

                      <Text
                        allowFontScaling={false}
                        style={styles.deputyChiefMinisterAC}>
                        Assembly Constituency
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={styles.deputyChiefMinisterACC}>
                        {item?.assembly}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            )}
          </>
        )}
      />
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
  outerDeputyChiefMinister: {
    height: scaledValue(276),
    width: scaledValue(345),
    backgroundColor: appColors.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderBottomRightRadius: scaledValue(4),
    borderBottomLeftRadius: scaledValue(4),
  },
  deputyChiefMinisterD: {
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
    marginBottom: scaledValue(5),
    color: appColors.black,
  },
  innerDeputyChiefMinister: {
    height: scaledValue(253),
    width: scaledValue(320),
    paddingHorizontal: scaledValue(20),
    marginVertical: scaledValue(20),
  },
  deputyChiefMinisterDName: {
    fontFamily: 'Roboto',
    width: scaledValue(320),
    fontSize: scaledValue(14),
    fontWeight: '600',
    color: appColors.gray,
    paddingVertical: scaledValue(2),
    textAlign: 'left',
    paddingLeft: scaledValue(8),
  },
  deputyChiefMinisterAC: {
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',

    color: appColors.black,
    marginTop: scaledValue(8),
    marginLeft: scaledValue(7),
  },
  deputyChiefMinisterACC: {
    marginLeft: scaledValue(7),
    color: appColors.gray,
  },
  outerCabinetMinister: {
    height: scaledValue(122),
    width: scaledValue(345),
    backgroundColor: appColors.white,
    flexDirection: 'row',
    borderColor: appColors.border,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cabinetMinisterImage: {
    height: scaledValue(85.05),
    width: scaledValue(84),
    borderRadius: scaledValue(100),
    marginHorizontal: scaledValue(13),
  },
  cabinetMinisterI: {
    height: scaledValue(85.05),
    width: scaledValue(84),
    backgroundColor: appColors.white,
    borderRadius: scaledValue(88),
    borderWidth: scaledValue(5),
    borderColor: appColors.border,
  },
  outerCabinetMinisterText: {
    width: scaledValue(203),
  },
  cabinetMinisterText: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
  },
  cabinetMinisterTextName: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '600',
  },
  cabinetMinisterPhoneNo: {
    flexDirection: 'row',
  },
  cabinetMinisterPhoneNoName: {
    marginVertical: scaledValue(10),
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '700',
  },
  cabinetMinisterAssemblyC: {
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '800',
    color: appColors.black,
    marginTop: scaledValue(6),
  },
  cabinetMinisterAC: {
    color: appColors.gray,
  },
  phoneCall: {
    height: scaledValue(18),
    width: scaledValue(18),
    marginVertical: scaledValue(10),
    marginRight: scaledValue(10),
  },
});

export default ListItem;
