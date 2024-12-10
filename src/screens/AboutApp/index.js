import { StyleSheet, View, ScrollView, Text } from 'react-native';
import React from 'react';
import { appColors } from '../../utils/constants/colors';
import Header from '../../components/Header';
import { appRoutes } from '../../utils/constants/routeNames';
import { scaledValue } from '../../utils/designUtils';

const AboutApp = () => {
  return (
    <View style={styles.aboutApp}>
      <Header title={appRoutes.aboutApp} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.outerText}>
        <Text style={styles.heading}>
          Welcome to the official website of the Chief Minister's Office (CMO), Rajasthan.
        </Text>
        <Text style={styles.text}>
          We serve as the administrative epicenter for the Honorable Chief Minister of Rajasthan, 
          driving the state’s development agenda, fostering transparent governance, and ensuring seamless 
          communication between the government and its citizens.
        </Text>
        <Text style={styles.text}>
          Our mission is to build a prosperous Rajasthan by championing inclusive growth, empowering 
          communities, and upholding accountability at all levels of governance. Through this platform, 
          we aim to provide timely updates on government initiatives, public policies, and key decisions 
          that impact the lives of our citizens.
        </Text>
        <Text style={styles.heading}>
          Our Vision
        </Text>
        <Text style={styles.text}>
          The CMO works closely with various departments to facilitate policy implementation, monitor 
          developmental programs, and address public grievances effectively. Guided by the principles of 
          good governance, we strive to bridge the gap between the government and the people, ensuring 
          every voice is heard and every concern addressed.
        </Text>
        <Text style={styles.text}>
          This website serves as a resourceful medium for citizens to stay informed about Rajasthan’s 
          journey toward progress. We encourage you to explore our initiatives, participate in state-building 
          endeavors, and connect with us for a collaborative future.
        </Text>
        <Text style={styles.text}>
          Together, let us pave the way for a brighter and more resilient Rajasthan.
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  aboutApp: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  outerText: {
    marginVertical: scaledValue(10),
    marginHorizontal: scaledValue(10),
  },
  heading: {
    fontSize: scaledValue(16),
    fontWeight: '700',
    marginVertical: scaledValue(10),
    color: appColors.primaryText,
  },
  text: {
    fontSize: scaledValue(14),
    fontWeight: '400',
    marginBottom: scaledValue(10),
    color: appColors.secondaryText,
  },
});
