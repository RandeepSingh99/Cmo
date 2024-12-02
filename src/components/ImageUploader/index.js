import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';

const ImageUploader = props => {
  return (
    <View style={styles.uploaderView}>
      <Text style={styles.text}>Add Image</Text>
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
  text: {
    color: appColors.placeholderText,
    fontSize: scaledValue(14),
    fontWeight: '400',
  },
});
