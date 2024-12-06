import {StyleSheet, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';

const PrivacyPolicy = () => {
  return (
    <View style={styles.privacyPolicy}>
      <Header title={appRoutes.privacyPolicy} />
    
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  privacyPolicy: {flex: 1, backgroundColor: appColors.background},
  
});
