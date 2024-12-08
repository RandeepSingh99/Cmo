import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import Button from '../Button';
import msgToChief from '../../../assets/images/msgToChief.png';

const MessageToChief = (props) => {
  return (
    <View style={styles.messageToChief}>
      <View style={styles.outerMessageToChiefText}>
        <Text  allowFontScaling={false}style={styles.messageToChiefText}>
          Write to the Chief Minister
        </Text>
        <Text  allowFontScaling={false}style={styles.messageToChiefTexts}>
          Share Your Concerns with the Chief Minister
        </Text>
        <Button
        onPress={props.onPress}
          color={appColors.blue}
          width={192}
          height={49}
          title="Click Here"
          titleColor={appColors.white}
        />
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
    alignSelf:'center'
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
