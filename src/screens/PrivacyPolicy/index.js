import {StyleSheet, View,ScrollView,Text} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import { scaledValue } from '../../utils/designUtils';

const PrivacyPolicy = () => {
  return (
    <View style={styles.privacyPolicy}>
      <Header title={appRoutes.privacyPolicy} />
      <ScrollView style={styles.outerPrivacyPolicyText}>

        <Text style={styles.ThanksHeadingPrivacy}>
          Thanks for visiting our website.
        </Text>

        <Text style={styles.privacyPolicyText}>j
          As a general rule, this website does not collect personal Information
          about you when you visit the site. You can generally visit the site
          without revealing Personal Information, unless you choose to provide
          such information. This website does not record your visit and logs. We
          do not identify users or their browsing activities.
        </Text>

        <Text style={styles.privacyPolicyHeading}>
        Cookies
        </Text>

        <Text style={styles.privacyPolicyText}>
        cookie is a piece of software code that an Internet website sends to your browser when you access information in that site. This site does not use cookies.
        </Text>

        <Text style={styles.privacyPolicyHeading}>
        E-mail Management
        </Text>
        <Text style={styles.privacyPolicyText}>
        Your e-mail address will only be recorded if you choose to send a message. It will only be used for the purpose for which you have provided it and will not be added to a mailing list. Your e-mail address will not be used for any other purpose, and will not be disclosed without your consent.
        </Text>

        <Text style={styles.privacyPolicyTextTwo}>
        Note: The use of the term "Personal Information" in this privacy statement refers to any information from which your identity is apparent or can be reasonably ascertained.
        </Text>
        <Text style={styles.privacyPolicyHeading}>
        E-mail Management
        </Text>
        <Text style={styles.termsConditionText}>Unauthorised attempts to upload information or change information on this service are strictly prohibited and may be punishable under Indian IT Act.

</Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  privacyPolicy: {flex: 1, backgroundColor: appColors.background},
  outerPrivacyPolicyText:{
    marginVertical:scaledValue(10),
    marginHorizontal:scaledValue(10)
  },
  ThanksHeadingPrivacy:{
    fontSize: scaledValue(14),
    fontWeight: '400',
    marginVertical:scaledValue(10)
  },
  privacyPolicyHeading:{
    alignItems:'center',
    fontFamily:'Roboto',
    fontSize:scaledValue(14),
    fontWeight:'700',
    marginVertical:scaledValue(5)
  },
  privacyPolicyText:{
    fontSize: scaledValue(14),
    fontWeight: '400',
  },
  privacyPolicyTextTwo:{
    fontSize: scaledValue(14),
    fontWeight: '400',
    marginVertical:scaledValue(10)
  }

});
