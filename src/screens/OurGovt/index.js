import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import OurGovtCard from '../../components/OurGovtCard';
import Spacer from '../../components/Spacer';
import {scaledValue} from '../../utils/designUtils';

const OurGovt = () => {
  return (
    <View style={styles.ourGovt}>
      <Header title={appRoutes.stateGovernment} />
      <Spacer height={scaledValue(12)} />

      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={2}
        data={[{}, {}, {}, {}, {}, {}]}
        renderItem={() => <OurGovtCard />}
      />
    </View>
  );
};

export default OurGovt;

const styles = StyleSheet.create({
  ourGovt: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  flatList: {alignItems: 'center'},

});
