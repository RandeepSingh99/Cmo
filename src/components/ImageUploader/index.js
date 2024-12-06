import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';

const ImageUploader = props => {
  return (
    <TouchableOpacity style={styles.touch} onPress={props.onPress}>
      <ImageBackground
        resizeMode="fit"
        source={{uri: props.img}}
        style={styles.uploaderView}>
        {!props.img && (
          <Text allowFontScaling={false} style={styles.text}>
            Add Image
          </Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
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
  touch: {overflow: 'hidden', borderRadius: scaledValue(8)},
});
