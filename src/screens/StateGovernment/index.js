import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import Spacer from '../../components/Spacer';
import ListItem from '../../components/ListItem';
import {sections} from '../../utils/constants';

const StateGovernment = props => {
  const {params} = props.route || '';
  return (
    <View style={styles.stateGovernment}>
      <Header title={appRoutes.stateGovernment} />
      <Spacer height={8} />
      <FlatList
        data={sections[2].data}
        renderItem={({item}) => <ListItem title={item} />}
      />
      <Spacer height={8} />
    </View>
  );
};

export default StateGovernment;

const styles = StyleSheet.create({
  stateGovernment: {flex: 1, backgroundColor: appColors.background},
});
