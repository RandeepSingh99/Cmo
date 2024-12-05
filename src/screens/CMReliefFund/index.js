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
import {scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import Button from '../../components/Button';
import dropDown from '../../../assets/images/dropDown.png';
import medicalIcon from '../../../assets/images/medicalIcon.png';

const CmReliefFund = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title={appRoutes.cmReliefFund} />
      <Spacer height={scaledValue(24)} />
      <View style={styles.paddingContainer}>
        <View style={styles.cmReliefFundDonateForm}>
          <View style={styles.outerCmReliefFundText}>
            <Text  allowFontScaling={false}style={styles.cmReliefFundText}>
              Individual/Institution Donation Form
            </Text>
          </View>
          <Spacer height={scaledValue(24)} />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Choose Payment Type*"
              placeholderTextColor={appColors.placeholderText}
              value={''}
              onChangeText={() => {}}
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
              onChangeText={() => {}}
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
              onChangeText={() => {}}
            />
          </View>
          <Spacer height={scaledValue(24)} />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Email ID*"
              placeholderTextColor={appColors.placeholderText}
              value={''}
              onChangeText={() => {}}
            />
          </View>
          <Spacer height={scaledValue(24)} />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="PAN No."
              placeholderTextColor={appColors.placeholderText}
              value={''}
              onChangeText={() => {}}
            />
          </View>
          <Spacer height={scaledValue(24)} />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Mobile No.*"
              placeholderTextColor={appColors.placeholderText}
              value={''}
              onChangeText={() => {}}
            />
          </View>
          <Spacer height={scaledValue(24)} />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Amount*"
              placeholderTextColor={appColors.placeholderText}
              value={''}
              onChangeText={() => {}}
            />
          </View>
          <Spacer height={scaledValue(24)} />
          <Button
            width={335}
            height={49}
            title="Proceed"
            color={appColors.blue}
            titleColor={appColors.white}
          />
          <Spacer height={scaledValue(24)} />
        </View>
        <Spacer height={scaledValue(24)} />
        <View style={styles.offlinePaymentDetail}>
          <Text  allowFontScaling={false}style={styles.offlinePaymentDetailHText}>
            Offline Payment Detail
          </Text>
          <View style={styles.outerOfflinePaymentDetailText}>
            <View style={styles.offlinePaymentDetailText}>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameText}>Name - </Text>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameTextDetail}>
                Rajasthan Chief Minister Relief Fund
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameText}>
                Account No.-{' '}
              </Text>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameTextDetail}>
                51088903513
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameText}>
                Type of Account:{' '}
              </Text>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameTextDetail}>
                Saving Account
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameText}>
                IFSC Code -{' '}
              </Text>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameTextDetail}>
                {' '}
                SBIN0031031
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameText}>
                Branch Name -{' '}
              </Text>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameTextDetail}>
                State Bank of India Secretariat Jaipur.
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameText}>UPI Id - </Text>
              <Text  allowFontScaling={false}style={styles.offlinePaymentDetailNameTextDetail}>
                51088903513@SBI
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  paddingContainer: {
    flex: 1,
    backgroundColor: appColors.background,
    paddingHorizontal: scaledValue(16),
  },
  cmReliefFundDonateForm: {
    paddingHorizontal: scaledValue(16),
    backgroundColor: appColors.white,
  },
  outerCmReliefFundText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cmReliefFundText: {
    fontSize: scaledValue(20),
    fontWeight: 800,
    fontFamily: 'Roboto',
    color: appColors.blue,
    width: scaledValue(272),
    lineHeight: scaledValue(31),
    textAlign: 'center',
    marginTop: scaledValue(20),
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
  
  dropDown: {
    height: scaledValue(6.17),
    width: scaledValue(10),
    position: 'absolute',
    right: scaledValue(8),
  },
  offlinePaymentDetail: {
    height: scaledValue(230),
    width: scaledValue(345),
    backgroundColor: appColors.white,
    paddingHorizontal: scaledValue(16),
    paddingVertical: scaledValue(7),
  },
  offlinePaymentDetailHText: {
    fontFamily: 'Roboto',
    fontSize: scaledValue(20),
    fontWeight: 800,
    width: scaledValue(331),
    color: appColors.blue,
  
  },
  rajasthanCmReliefFund: {
    height: scaledValue(480),
    width: scaledValue(345),
    backgroundColor: appColors.white,
  },
  rajasthanCmReliefFundCard: {
    width: scaledValue(150),
    height: scaledValue(189.31),
    backgroundColor: appColors.lightPurple,
  },
  medicalIcon: {
    width: scaledValue(20),
    height: scaledValue(20),
  },
  rajasthanCmReliefFundCardText: {
    fontSize: scaledValue(20),
    fontFamily: 'Roboto',
    fontWeight: 600,
    color: appColors.blue,
    width: scaledValue(324),
    height: scaledValue(41),
  },
  outerOfflinePaymentDetailText: {
    width: scaledValue(310),
    height: scaledValue(180),
    paddingVertical: scaledValue(16),
  },
  offlinePaymentDetailNameText: {
    color: appColors.darkPurple,
    fontFamily: 'Roboto',
    fontSize: scaledValue(13),
    fontWeight: 800,
    paddingVertical: scaledValue(6),
  },
  offlinePaymentDetailNameTextDetail: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(13),
    fontWeight: 600,
    paddingVertical: scaledValue(6),
  },
  offlinePaymentDetailText: {
    flexDirection: 'row',
  },
});

export default CmReliefFund;
