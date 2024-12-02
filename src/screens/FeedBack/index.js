import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import Spacer from '../../components/Spacer';
import {appRoutes} from '../../utils/constants/routeNames';
import {scaledValue} from '../../utils/designUtils';
import Button from '../../components/Button';
import ImageUploader from '../../components/ImageUploader';

const FeedBack = () => {
  return (
    <View style={styles.keyOfficials}>
      <Header title={appRoutes.feedBack} />
      <Spacer height={12} />
      <View style={styles.paddingContainer}>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          value={''}
          onChangeText={() => {}}
          placeholderTextColor={appColors.placeholderText}
          multiline={true}
        />
        <Spacer height={24} />
        <View style={styles.addImgView}>
            <ImageUploader/>
            <ImageUploader/>
        </View>
        <Spacer height={32} />
        <Button
          width={335}
          height={49}
          title="Submit"
          color={appColors.blue}
          titleColor={appColors.white}
        />
      </View>
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  keyOfficials: {flex: 1, backgroundColor: appColors.background},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingContainer: {flex: 1, paddingHorizontal: scaledValue(16)},
  input: {
    borderWidth: 1,
    borderColor: appColors.inputBorder,
    borderRadius: 8,
    paddingVertical: scaledValue(16),
    paddingHorizontal: scaledValue(10),
    fontSize: scaledValue(14),
    color: appColors.black,
    backgroundColor: appColors.white,
  },
  textArea: {
    height: scaledValue(133),
    textAlignVertical: 'top',
  },
  addImgView: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
});
