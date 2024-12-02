import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import { scaledValue } from '../../utils/designUtils';
import { appColors } from '../../utils/constants/colors';
import { appRoutes } from '../../utils/constants/routeNames';
import Button from '../../components/Button';
import dropDown from '../../../assets/images/dropDown.png';

const CmReliefFund = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title={appRoutes.cmReliefFund} />
      <Spacer height={scaledValue(24)} />
      <Text style={styles.cmReliefFundText}>Individual/Institution Donation Form</Text>
      <View style={styles.paddingContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Choose Payment Type*"
            placeholderTextColor={appColors.placeholderText}
            value={''}
            onChangeText={() => { }}
          />
          <Image source={dropDown} style={styles.dropDown} />
        </View>
        <Spacer height={scaledValue(24)} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Donor Type*"
            placeholderTextColor={appColors.placeholderText}
            value={''}
            onChangeText={() => { }}
          />
          <Image source={dropDown} style={styles.dropDown} />
        </View>
        <Spacer height={scaledValue(24)} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Name*"
            placeholderTextColor={appColors.placeholderText}
            value={''}
            onChangeText={() => { }}
          />
        </View>
        <Spacer height={scaledValue(24)} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email ID*"
            placeholderTextColor={appColors.placeholderText}
            value={''}
            onChangeText={() => { }}
          />
        </View>
        <Spacer height={scaledValue(24)} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="PAN No."
            placeholderTextColor={appColors.placeholderText}
            value={''}
            onChangeText={() => { }}
          />
        </View>
        <Spacer height={scaledValue(24)} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Mobile No.*"
            placeholderTextColor={appColors.placeholderText}
            value={''}
            onChangeText={() => { }}
          />
        </View>
        <Spacer height={scaledValue(24)} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Amount*"
            placeholderTextColor={appColors.placeholderText}
            value={''}
            onChangeText={() => { }}
          />
        </View>
        <Spacer height={scaledValue(24)} />
        <Button
          width={335}
          height={49}
          title="Submit"
          color={appColors.blue}
          titleColor={appColors.white}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  paddingContainer: { flex: 1, paddingHorizontal: scaledValue(16) },
  cmReliefFundText: {
    fontSize:scaledValue(20),
  fontWeight:600,
  },
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
  dropDown: {
    height: scaledValue(6.17),
    width: scaledValue(10),
  },
});

export default CmReliefFund;
