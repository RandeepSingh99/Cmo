import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import addImageIconText from '../../../assets/images/addImageIconText.png';

const ImageUploader = props => {
  return (
    <View style={styles.uploaderView}>
    <Image source={addImageIconText} style={styles.addImageIconText}/>
    </View>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({
  uploaderView: {
    borderWidth: 1,
    borderColor: appColors.inputBorder,
    width: scaledValue(160),
    height: scaledValue(128),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaledValue(8),
    backgroundColor: appColors.white,
  },
  // text: {
  //   color: appColors.placeholderText,
  //   fontSize: scaledValue(14),
  //   fontWeight: '400',
  // },
  addImageIconText:{
    alignItems: 'center',
    height:scaledValue(61),
    width:scaledValue(85),
    backgroundColor: appColors.background,
  }
});
