import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import addImageIconText from '../../../assets/images/addImageIconText.png';

const ImageUploader = props => {
  return (
    <TouchableOpacity style={styles.touch} onPress={props.onPress}>
      <ImageBackground
        resizeMode="fit"
        source={{uri: props.img}}
        style={styles.uploaderView}>
        {!props.img && (
          <Image source={addImageIconText} style={styles.addImageIconText} />
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
  touch: {overflow: 'hidden', borderRadius: scaledValue(8)},
  addImageIconText: {
    alignItems: 'center',
    height: scaledValue(61),
    width: scaledValue(85),
    backgroundColor: appColors.background,
  },
});
