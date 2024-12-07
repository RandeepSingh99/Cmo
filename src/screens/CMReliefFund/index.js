import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import {reliefColors, scaledValue} from '../../utils/designUtils';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import Button from '../../components/Button';
import dropDown from '../../../assets/images/dropDown.png';
import medicalIcon from '../../../assets/images/medicalIcon.png';
import qr from '../../../assets/images/qr.png';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCMRelief} from '../../store/cmReliefSlice';
import ReliefFundCard from '../../components/ReliefCard';
import { reliefImg } from '../../utils/constants';

const CmReliefFund = () => {
  const dispatch = useDispatch();
  const cmRelief = useSelector(state => state.cmRelief.info);

  useEffect(() => {
    dispatch(fetchCMRelief());
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title={appRoutes.cmReliefFund} />
      <Spacer height={scaledValue(24)} />
      <View style={styles.paddingContainer}>
        {/* <View style={styles.cmReliefFundDonateForm}>
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
        </View> */}
        <Image style={styles.qr} resizeMode="contain" source={qr} />
        <View style={styles.offlinePaymentDetail}>
          <Text
            allowFontScaling={false}
            style={styles.offlinePaymentDetailHText}>
            Offline Payment Detail
          </Text>
          <View style={styles.outerOfflinePaymentDetailText}>
            <View style={styles.offlinePaymentDetailText}>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameText}>
                Name -{' '}
              </Text>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameTextDetail}>
                Rajasthan Chief Minister Relief Fund
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameText}>
                Account No.-
              </Text>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameTextDetail}>
                51088903513
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameText}>
                Type of Account:
              </Text>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameTextDetail}>
                Saving Account
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameText}>
                IFSC Code -
              </Text>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameTextDetail}>
                {' '}
                SBIN0031031
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameText}>
                Branch Name -
              </Text>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameTextDetail}>
                State Bank of India Secretariat Jaipur.
              </Text>
            </View>
            <View style={styles.offlinePaymentDetailText}>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameText}>
                UPI Id -
              </Text>
              <Text
                allowFontScaling={false}
                style={styles.offlinePaymentDetailNameTextDetail}>
                51088903513@SBI
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.offlinePaymentDetail}>
          <Text style={styles.offlinePaymentDetailHText}>
            Rajasthan CM Relief Fund
          </Text>
          <FlatList
            data={cmRelief}
            renderItem={({item}) => (
              <ReliefFundCard
                reportName={item['Report Name']}
                totalCount={item['Total Count']}
                totalAmount={item['Total Amount']}
                color={reliefColors[item['Report Name']]}
                img={reliefImg[item['Report Name']]}
              />
            )}
            keyExtractor={item => item['Report Name']}
            numColumns={2} // Display cards in two columns
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  paddingContainer: {
    flex: 1,
    backgroundColor: appColors.background,
    alignItems: 'center',
  },
  qr: {
    marginBottom: scaledValue(26),
    width: scaledValue(140),
    height: scaledValue(140),
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
    fontWeight: '800',
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
    width: scaledValue(345),
    backgroundColor: appColors.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    marginBottom: scaledValue(18),
  },
  offlinePaymentDetailHText: {
    fontFamily: 'Roboto',
    fontSize: scaledValue(20),
    fontWeight: '800',
    width: scaledValue(316),
    color: appColors.blue,
    marginVertical: scaledValue(18),
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
    fontWeight: '600',
    color: appColors.blue,
    width: scaledValue(324),
    height: scaledValue(41),
  },
  outerOfflinePaymentDetailText: {
    width: scaledValue(310),
  },
  offlinePaymentDetailNameText: {
    color: appColors.darkPurple,
    fontFamily: 'Roboto',
    fontSize: scaledValue(12),
    fontWeight: '800',
    marginBottom: scaledValue(6),
  },
  offlinePaymentDetailNameTextDetail: {
    color: appColors.gray,
    fontFamily: 'Roboto',
    fontSize: scaledValue(12),
    fontWeight: '600',
    marginBottom: scaledValue(12),
  },
  offlinePaymentDetailText: {
    flexDirection: 'row',
  },
});

export default CmReliefFund;
