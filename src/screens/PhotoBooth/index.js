import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import faceScanner from '../../../assets/images/faceScanner.png';
import {scaledValue} from '../../utils/designUtils';
import arrowSign from '../../../assets/images/arrowSign.png';
import ImagePicker from 'react-native-image-crop-picker';
import {List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSearchImgEventList} from '../../store/searchImgEventListSlice';
import Button from '../../components/Button';
import Spacer from '../../components/Spacer';
import axios from 'axios';

const PhotoBooth = () => {
  const dispatch = useDispatch();
  const [userImage, setUserImage] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventImages, setEventImages] = useState([]);
  const [event, setEvent] = useState('Select Event');
  const listOfEvents = useSelector(state => state.searchImgEventList.events);

  const handlePress = () => setExpanded(!expanded);
  const clickUserImg = () => {
    ImagePicker.openCamera({
      width: scaledValue(242),
      height: scaledValue(209),
      cropping: true,
    })
      .then(image => {
        setUserImage(image);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const openUserGallery = () => {
    ImagePicker.openPicker({
      width: scaledValue(242),
      height: scaledValue(209),
      cropping: true,
    })
      .then(image => {
        setUserImage(image);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const search = async () => {
    if (userImage === null) {
      Alert.alert('Please upload your image!');
      return;
    }
    if (event === 'Select Event') {
      Alert.alert('Please select the event!');
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('event_name', event);
      formData.append('file', {
        uri:
          Platform.OS === 'ios'
            ? userImage?.path?.replace('file://', '')
            : userImage?.path,
        name: userImage?.filename, // Adjust the name as needed
        type: userImage?.mime, // Ensure the correct MIME type
      });

      // Sending the POST request
      const response = await axios.post(
        'https://momentswithcm.rajasthan.gov.in/search_faces/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response?.data?.matched_images) {
        if (response?.data?.matched_images?.length === 0) {
          Alert.alert('No image in event!');
          return;
        }
        setEventImages(response?.data?.matched_images);
      } else {
        Alert.alert('Error uploading image:', response?.data?.error);
      }
    } catch (error) {
      Alert.alert('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchSearchImgEventList());
  }, []);

  return (
    <View style={styles.photoBooth}>
      <Header title={appRoutes.photoBooth} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.photoBoothContain}
        style={styles.photoBoothContainer}>
        <Text style={styles.photoBoothContentTextOne}>
          Welcome To CM Photo Booth
        </Text>
        <Text style={styles.photoBoothContentTextSecond}>
          Download Your Photographs Taken With Your CM
        </Text>
        {userImage === null && (
          <TouchableOpacity
            onPress={clickUserImg}
            style={styles.outerPhotoBoothImage}>
            <View style={styles.innerPhotoBoothImage}>
              <Image
                style={styles.photoBoothFaceScannerImage}
                source={faceScanner}
              />
              <Text style={styles.photoBoothFaceScannerImageText}>
                click here to scan your face
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {userImage !== null && (
          <TouchableOpacity
            onPress={clickUserImg}
            style={styles.outerPhotoBoothImage}>
            <Image style={styles.userImg} source={{uri: userImage?.path}} />
          </TouchableOpacity>
        )}

        <Text style={styles.photoBoothThirdText}>
          Scan your face using your device's front-facing camera
        </Text>

        <List.Accordion
          style={styles.accordion}
          titleStyle={{
            color: appColors.black,
            fontFamily: 'Roboto',
            fontSize: scaledValue(16),
            fontWeight: '700',
          }}
          title={event}
          expanded={expanded}
          onPress={handlePress}>
          {listOfEvents?.map(item => (
            <List.Item
              key={item}
              titleStyle={styles.listItemText}
              style={styles.listItem}
              title={item}
              onPress={() => {
                handlePress();
                setEvent(item);
              }}
            />
          ))}
        </List.Accordion>

        <TouchableOpacity
          onPress={openUserGallery}
          style={styles.photoBoothFourthText}>
          <Text style={styles.photoBoothFourthTextOne}>
            Want to upload an image?
          </Text>
          <View style={styles.photoBoothFourthTextImage}>
            <Text style={styles.photoBoothFourthTextSecond}>Click Here</Text>
            <Image source={arrowSign} style={styles.arrowSign} />
          </View>
        </TouchableOpacity>
        <Button
          onPress={search}
          color={appColors.blue}
          width={335}
          height={52}
          title={loading ? 'Searching...' : 'Search'}
          titleColor={appColors.white}
        />
        <Spacer height={scaledValue(24)} />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerTextOne}>Disclaimer : </Text>
        <Text style={styles.footerTextSecond}>
          Photos will be available to download with in 48 hours
        </Text>
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
  listItemText: {
    color: appColors.black,
    fontFamily: 'Roboto',
    fontSize: scaledValue(15),
    fontWeight: '600',
  },
  listItem: {
    width: scaledValue(338),
    height: scaledValue(58),
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderRadius: scaledValue(8),
    borderColor: appColors.background,
    marginTop: scaledValue(2),
  },
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
  userImg: {
    width: scaledValue(242),
    height: scaledValue(209),
    borderRadius: scaledValue(8),
  },
  accordion: {
    height: scaledValue(64),
    width: scaledValue(339),
    borderColor: appColors.gray,
    borderWidth: 1,
    borderRadius: scaledValue(8),
    backgroundColor: appColors.background,
  },
  addImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoBoothContainer: {
    flex: 1,
  },
  photoBoothContain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBoothContentTextOne: {
    width: scaledValue(220),
    fontFamily: 'Roboto',
    fontSize: scaledValue(24),
    fontWeight: '800',
    textAlign: 'center',
    marginTop: scaledValue(20),
    marginBottom: scaledValue(16),
  },
  photoBoothContentTextSecond: {
    width: scaledValue(204),
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: scaledValue(14),
    marginBottom: scaledValue(16),
    textAlign: 'center',
    color: appColors.darkBlue,
  },
  outerPhotoBoothImage: {
    backgroundColor: appColors.white,
    borderRadius: scaledValue(8),
    height: scaledValue(209),
    width: scaledValue(242),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  },
  photoBoothFourthText: {
    height: scaledValue(67),
    width: scaledValue(338),
    textAlign: 'center',
    borderColor: appColors.gray,
    borderWidth: 1,
    borderRadius: scaledValue(8),
    marginVertical: scaledValue(24),
    justifyContent: 'center',
  },
  photoBoothThirdText: {
    height: scaledValue(46),
    width: scaledValue(220),
    marginVertical: scaledValue(10),
    color: appColors.darkBlue,
    textAlign: 'center',
    alignItems: 'center',
  },
  photoBoothFourthTextOne: {
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: appColors.black,
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
    height: scaledValue(53),
    width: scaledValue(375),
    flexDirection: 'row',
    backgroundColor: appColors.white,
    paddingHorizontal: scaledValue(14),
    paddingTop: scaledValue(7),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  footerTextOne: {
    color: appColors.darkBlue,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: scaledValue(15),
  },
  footerTextSecond: {
    color: appColors.darkBlue,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: scaledValue(15),
    width: scaledValue(260),
  },
});
