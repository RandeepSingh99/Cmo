import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import {scaledValue} from '../../utils/designUtils';

const TermsCondition = () => {
  return (
    <View style={styles.termsCondition}>
      <Header title={appRoutes.termsCondition} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        style={styles.outerTermsCondition}>
        <Text style={styles.termsConditionText}>
          • This application is designed, developed and maintained by Department
          of Information Technology & Communication (DoIT&C) and content
          provided by concern Department/District Administration.
        </Text>

        <Text style={styles.termsConditionText}>
          • Though all efforts have been made to ensure the accuracy and
          currency of the content on this application, the same should not be
          construed as a statement of law or used for any legal purposes. In
          case of any ambiguity or doubts, users are advised to verify / check
          with the Department(s) and / or other source(s), and to obtain
          appropriate professional advice.
        </Text>

        <Text style={styles.termsConditionText}>
          • Under no circumstances will this Department be liable for any
          expense, loss or damage including, without limitation, indirect or
          consequential loss or damage, or any expense, loss or damage
          whatsoever arising from use, or loss of use, of data, arising out of
          or in connection with the use of this application.
        </Text>

        <Text style={styles.termsConditionText}>
          • These terms and conditions shall be governed by and construed in
          accordance with the Indian Laws. Any dispute arising under these terms
          and conditions shall be subject to the jurisdiction of the courts of
          India.
        </Text>

        <Text style={styles.termsConditionText}>
          • The information posted on this application could include hypertext
          links or pointers to information created and maintained by
          non-Government / private organizations. Concern Department/District
          Administration, is providing these links and pointers solely for your
          information and convenience. When you select a link to an outside
          application, you are leaving the Concern Department/District
          Administration, application and are subject to the privacy and
          security policies of the owners / sponsors of the outside application.
        </Text>

        <Text style={styles.termsConditionText}>
          • Concern Department/District Administration, does not guarantee the
          availability of such linked pages at all times.
        </Text>

        <Text style={styles.termsConditionText}>
          • Concern Department/District Administration, cannot authorize the use
          of copyrighted materials contained in linked applications. Users are
          advised to request such authorization from the owner of the linked
          application.
        </Text>

        <Text style={styles.termsConditionText}>
          • Concern Department/District Administration, does not guarantee that
          linked applications comply with Indian Government Web Guidelines.
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsCondition;

const styles = StyleSheet.create({
  outerTermsCondition: {
    backgroundColor: appColors.background,
    paddingHorizontal: scaledValue(10),
    flex: 1,
  },
  scrollContainer: {marginVertical: scaledValue(14)},
  termsConditionHeading: {
    fontSize: scaledValue(14),
    fontWeight: '700',
  },
  termsConditionText: {
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: scaledValue(14),
    fontWeight: '400',
    marginVertical: scaledValue(5),
  },
  termsCondition: {
    flex: 1,
    backgroundColor: appColors.background,
  },
});
