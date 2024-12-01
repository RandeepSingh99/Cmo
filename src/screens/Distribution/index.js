import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import { appRoutes } from '../../utils/constants/routeNames';
import Spacer from '../../components/Spacer';
import ListItem from '../../components/ListItem';

const Distribution = () => {
  return (
    <View style={styles.keyOfficials}>
      <Header title={appRoutes.distribution} />
      
      
    </View>
  );
};

export default Distribution;

const styles = StyleSheet.create({
  keyOfficials: {flex: 1, backgroundColor: appColors.background},
});
