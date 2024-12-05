import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Header from '../../components/Header';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';
import Spacer from '../../components/Spacer';
import {appRoutes} from '../../utils/constants/routeNames';
import Button from '../../components/Button';

const WriteToCm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title={appRoutes.writeToCm} />
      <Spacer height={scaledValue(24)} />
      <View style={styles.paddingContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Mobile No*"
            placeholderTextColor={appColors.placeholderText}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          <Text  allowFontScaling={false}style={styles.verifyText}>VERIFY</Text>
        </View>
        <Spacer height={scaledValue(24)} />

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Name*"
            placeholderTextColor={appColors.placeholderText}
            value={name}
            onChangeText={setName}
          />
        </View>
        <Spacer height={scaledValue(24)} />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          placeholderTextColor={appColors.placeholderText}
          multiline={true}
        />
        <Spacer height={scaledValue(24)} />

        <View style={styles.inputWrapper}>
          <TextInput
            editable={false}
            style={styles.input}
            placeholder="upload document"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholderTextColor={appColors.placeholderText}
          />
          <Text  allowFontScaling={false}style={styles.verifyText}>CHOOSE FILE</Text>
        </View>
        <Spacer height={scaledValue(24)} />
        <Text  allowFontScaling={false}style={styles.fileUploadNote}>
          ( PDF / JPG / JPEG / WinRAR / WinZip / MP3 / MP4 format, max limit
          25MB )
        </Text>
        <Spacer height={scaledValue(24)} />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text  allowFontScaling={false}style={styles.checkboxText}>I'm not a robot</Text>
        </View>
        <Spacer height={scaledValue(24)} />

        <Button
          width={335}
          height={49}
          title="Submit"
          color={appColors.blue}
          titleColor={appColors.white}
        />
        <Spacer height={scaledValue(20)} />
        <Button
          width={335}
          height={49}
          title="Cancel"
          color={appColors.white}
          titleColor={appColors.danger}
          mode='contained'
        />
        <Spacer height={scaledValue(24)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paddingContainer: {flex: 1, paddingHorizontal: scaledValue(16)},
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: appColors.inputBorder,
    borderRadius: 8,
    paddingVertical: scaledValue(16),
    paddingHorizontal: scaledValue(10),
    fontSize: scaledValue(14),
    color: appColors.black,
    backgroundColor: appColors.white,
  },

  verifyText: {
    color: appColors.secondaryDarkBlue,
    fontWeight: '700',
    fontSize: scaledValue(10),
    position: 'absolute',
    right: scaledValue(8),
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },

  fileUploadNote: {
    fontSize: scaledValue(12),
    color: appColors.grayDarkBlue,
    fontWeight: '400',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: appColors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: scaledValue(8),
  },
  checkboxText: {
    fontSize: 16,
    color: appColors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WriteToCm;
