import {Alert, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import {appRoutes} from '../../utils/constants/routeNames';
import {scaledValue} from '../../utils/designUtils';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import ImageUploader from '../../components/ImageUploader';
import RNFS from 'react-native-fs';
import axios from 'axios';
import {feedBackUri} from '../../utils/constants/uri';

const FeedBack = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitFeedBack = async () => {
    if (description === '' && image === null) {
      Alert.alert('Please fill the feedback form!');
      return;
    }
    const requestBody = {
      Name: '',
      Mobile: '',
      Email: '',
      Address: '',
      SectorCode: '951',
      DepartmentCode: 980,
      Feedback: description || '',
      AppUserId: 183151,
      AttachmentPath: image?.base64String || '', // Replace "base64_data" with actual base64 content
    };
    try {
      setLoading(true);
      const response = await axios.post(feedBackUri, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setImage(null);
        setDescription('');
        Alert.alert('Success', 'Feedback submitted successfully!');
      } else {
        Alert.alert('Error', `Request failed with status: ${response.status}`);
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const pickImg = async () => {
    const result = await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.images], // You can specify file types here
    });
    if (result) {
      RNFS.readFile(result.uri, 'base64')
        .then(base64String => {
          setImage({base64String, ...result});
        })
        .catch(err => {
          console.error('File conversion error:', err);
        });
    }
  };

  return (
    <View style={styles.keyOfficials}>
      <Header title={appRoutes.feedBack} />
      <Spacer height={12} />
      <View style={styles.paddingContainer}>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          placeholderTextColor={appColors.placeholderText}
          multiline={true}
        />
        <Spacer height={24} />
        <View style={styles.addImgView}>
          <ImageUploader onPress={pickImg} img={image?.uri} />
        </View>
        <Spacer height={32} />
        <Button
          onPress={submitFeedBack}
          width={335}
          height={49}
          title={loading ? 'Submitting...' : 'Submit'}
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
  paddingContainer: {flex: 1, alignItems: 'center'},
  input: {
    borderWidth: 1,
    borderColor: appColors.inputBorder,
    borderRadius: 8,
    paddingVertical: scaledValue(16),
    paddingHorizontal: scaledValue(10),
    fontSize: scaledValue(14),
    color: appColors.black,
    backgroundColor: appColors.white,
    width: scaledValue(335),
  },
  textArea: {
    height: scaledValue(133),
    textAlignVertical: 'top',
  },
  addImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
