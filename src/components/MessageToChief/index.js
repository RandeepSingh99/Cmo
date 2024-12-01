import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import ClickBlueButton from '../ClickBlueButton';
import msgToChief from '../../../assets/images/msgToChief.png';

const MessageToChief = () => {
  return (
    <View style={styles.messageToChief}>
      <View style={styles.outerMessageToChiefText}>
        <Text style={styles.messageToChiefText}>
          Write to the Chief Minister
        </Text>
        <Text style={styles.messageToChiefTexts}>
          Share Your Concerns with the Chief Minister
        </Text>

        <ClickBlueButton />
      </View>
      <View style={styles.OuterOfMsgImage}>
        <Image
          resizeMode="contain"
          style={styles.msgToChief}
          source={msgToChief}
        />
      </View>
    </View>
  );
};

export default MessageToChief;

const styles = StyleSheet.create({
  messageToChief: {
    width: scaledValue(346),
    height: scaledValue(157),
    borderRadius: 4,
    backgroundColor: appColors.white,
    marginLeft: scaledValue(16),
    marginTop: scaledValue(16),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: appColors.border,
  },
  messageToChiefText: {
    fontFamily: 'Roboto',
    fontWeight: 800,
    width: scaledValue(188),
    fontSize: scaledValue(14),
  },
  messageToChiefTexts: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    width: scaledValue(188),
    fontSize: scaledValue(14),
    marginBottom: scaledValue(13),
  },
  msgToChief: {
    height: scaledValue(98),
    width: scaledValue(78),
  },
  outerMessageToChiefText: {
    marginVertical: scaledValue(19),
  },
  OuterOfMsgImage: {
    marginVertical: scaledValue(19),
  },
});
