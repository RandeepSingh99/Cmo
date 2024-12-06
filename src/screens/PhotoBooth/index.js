import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import faceScanner from '../../../assets/images/faceScanner.png';
import {scaledValue} from '../../utils/designUtils';
import arrowSign from '../../../assets/images/arrowSign.png';
import babelConfig from '../../../babel.config';

const PhotoBooth = () => {
  return (
    <View style={styles.photoBooth}>
      <Header title={appRoutes.photoBooth} />
      <View style={styles.photoBoothContainer}>
        <Text style={styles.photoBoothContentTextOne}>
          Welcome To CM Photo Booth
        </Text>
        <Text style={styles.photoBoothContentTextSecond}>
          Download Your Photographs Taken With Your CM
        </Text>
        <View style={styles.outerPhotoBoothImage}>
          <View style={styles.innerPhotoBoothImage}>
            <Image
              style={styles.photoBoothFaceScannerImage}
              source={faceScanner}
            />
            <Text style={styles.photoBoothFaceScannerImageText}>
              click here to scan your face
            </Text>
          </View>
        </View>
        <Text style={styles.photoBoothThirdText}>
          Scan your face using your device's front-facing camera
        </Text>
        <View style={styles.photoBoothFourthText}>
          <Text style={styles.photoBoothFourthTextOne}>
            Want to upload an image?
          </Text>
          <View style={styles.photoBoothFourthTextImage}>
            <Text style={styles.photoBoothFourthTextSecond}>Click Here</Text>
            <Image source={arrowSign} style={styles.arrowSign} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerTextOne}>Disclaimer : </Text>
          <Text style={styles.footerTextSecond}>
            Photos will be available to download withing 48 hours
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PhotoBooth;

const styles = StyleSheet.create({
  photoBooth: {flex: 1, backgroundColor: appColors.background},
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
    justifyContent: 'space-between',
  },
  photoBoothContainer: {
    height: scaledValue(701),
    width: scaledValue(375),
    backgroundColor: appColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoBoothContentTextOne: {
    width: scaledValue(233.5),
    height: scaledValue(96),
    fontFamily: 'Roboto',
    fontSize: scaledValue(32),
    fontWeight: '800',
    textAlign: 'center',
  },
  photoBoothContentTextSecond: {
    width: scaledValue(274),
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: scaledValue(20),
    marginBottom: scaledValue(40),
    textAlign: 'center',
    color: appColors.darkBlue,
    lineHeight: scaledValue(31),
  },
  outerPhotoBoothImage: {
    backgroundColor: appColors.white,
    borderRadius: scaledValue(8),
    height: scaledValue(209),
    width: scaledValue(242),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerPhotoBoothImage: {
    height: scaledValue(190),
    width: scaledValue(222),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: scaledValue(8),
  },
  photoBoothFaceScannerImage: {
    height: scaledValue(85),
    width: scaledValue(85),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scaledValue(10),
  },
  photoBoothFaceScannerImageText: {
    width: scaledValue(123),
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '700',
    alignItems: 'center',
    textTransform: 'uppercase',
    height: scaledValue(44),
    textAlign: 'center',
    lineHeight: scaledValue(20),
  },
  photoBoothFourthText: {
    height: scaledValue(67),
    width: scaledValue(338),
    textAlign: 'center',
    borderColor: appColors.gray,
    borderWidth: 1,
    borderRadius: scaledValue(8),
    justifyContent: 'center',
  },
  photoBoothThirdText: {
    height: scaledValue(46),
    width: scaledValue(220),
    lineHeight: scaledValue(23),
    marginVertical: scaledValue(10),
    color: appColors.darkBlue,
    textAlign: 'center',
    alignItems: 'center',
  },
  photoBoothFourthTextOne: {
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    color: appColors.black,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: scaledValue(16),
    fontWeight: '700',
  },
  photoBoothFourthTextSecond: {
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: appColors.orange,
    fontFamily: 'Roboto',
    fontSize: scaledValue(16),
    fontWeight: '700',
  },
  arrowSign: {
    height: scaledValue(11.15),
    width: scaledValue(15.58),
    marginLeft: scaledValue(5),
  },
  photoBoothFourthTextImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    bottom: 0,
    height: scaledValue(53),
    flexDirection: 'row',
    backgroundColor: appColors.white,
    marginHorizontal:scaledValue(10),
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  footerTextOne: {
    color: appColors.darkBlue,
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: scaledValue(15),
    paddingLeft:scaledValue(10)
  },
  footerTextSecond: {
    color: appColors.darkBlue,
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: scaledValue(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
