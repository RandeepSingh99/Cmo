import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import youtubeIcon from '../../../assets/images/youtubeIcon.png';
const CMSpeechesCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cmSpeechesCard}>
      <View style={styles.boundView}>
        <Image
          resizeMode="contain"
          source={youtubeIcon}
          style={styles.ytIcon}
        />
        <Image
          resizeMode="fit"
          style={styles.contextPhoto}
          source={{uri: props.img}}
        />
      </View>
      <Text  allowFontScaling={false}style={styles.cmSpeechesCardText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CMSpeechesCard;

const styles = StyleSheet.create({
  cmSpeechesCard: {
    width: scaledValue(350),
    borderRadius: scaledValue(16),
    backgroundColor: appColors.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: appColors.border,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaledValue(16),
    marginHorizontal:scaledValue(12.5),
    marginVertical:scaledValue(6)
  },
  contextPhoto: {
    width: scaledValue(318),
    height: scaledValue(200),
    borderRadius: scaledValue(16),
  },
  cmSpeechesCardText: {
    fontFamily: 'Mukta',
    fontWeight: 600,
    fontSize: scaledValue(16),
    width: scaledValue(318),
    color: appColors.darkBlue,
    marginTop: scaledValue(8),
    textAlign: 'center',
  },
  boundView: {justifyContent: 'center', alignItems: 'center'},
  ytIcon: {
    position: 'absolute',
    zIndex: 2,
    width: scaledValue(70),
    height: scaledValue(70),
  },
});
