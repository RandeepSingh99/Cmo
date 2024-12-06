import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import faceScanner from '../../../assets/images/faceScanner.png';
import {scaledValue} from '../../utils/designUtils';

const PhotoBooth = () => {
  return (
    <View style={styles.photoBooth}>
      <Header title={appRoutes.photoBooth} />
      <View style={styles.photoBoothContainer}>
        <Text style={styles.photoBoothContentTextOne}>
          Welcome to CM photo booth
        </Text>
        <Text style={styles.photoBoothContentTextSecond}>
          Download your Photographs taken with your CM
        </Text>
        <View style={styles.photoBoothImage}>
          <Image
            style={styles.photoBoothFaceScannerImage}
            source={faceScanner}
          />
          <Text style={styles.photoBoothFaceScannerImageText}>
            click here to scan your face
          </Text>
        </View>
        <Text style={styles.photoBoothThirdText}>
          Scan your face using your device's front-facing camera
        </Text>
        <View style={styles.photoBoothFourthText}>
          <Text style={styles.photoBoothFourthTextOne}>Want to upload an image?</Text>
          <Text  style={styles.photoBoothFourthTextSecond}>Click Here</Text>
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
    
    
  },
  photoBoothContentTextOne: {
    width: scaledValue(274),
    height: scaledValue(96),
    fontFamily: 'Roboto',
    fontSize: scaledValue(32),
    fontWeight: '800',
    textTransform: 'capitalize'
  },
  photoBoothContentTextSecond: {
    width: scaledValue(274),
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: scaledValue(20),
    marginBottom:scaledValue(40)
  },
  photoBoothImage: {
    backgroundColor: appColors.white,
    borderRadius: scaledValue(8),
    height: scaledValue(209),
    width: scaledValue(242),
    alignItems: 'center',
  },
  photoBoothFaceScannerImage: {
    height: scaledValue(85),
    width: scaledValue(85),
    alignItems: 'center',
    justifyContent:'center'
  },
  photoBoothFaceScannerImageText: {
    width: scaledValue(231),
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '700',
    alignItems: 'center',
    textTransform: 'uppercase',
    height:scaledValue(44),
    width:scaledValue(231)
  },
  photoBoothFourthText:{
    height:scaledValue(67),
    width:scaledValue(338),

  },
  photoBoothThirdText:{
    height:scaledValue(46),
    width:scaledValue(231),
    lineHeight:scaledValue(23),
    marginHorizontal:scaledValue(10),
   color:appColors.darkBlue
  },
  photoBoothFourthTextOne:{
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    color:appColors.black,
  },
  photoBoothFourthTextSecond:{
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
