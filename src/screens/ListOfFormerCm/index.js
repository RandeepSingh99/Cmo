import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import FormerCm from '../../components/FormerCmCard';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import {scaledValue} from '../../utils/designUtils';

const ListOfCm = () => {
  return (
    <View style={styles.container}>
      <Header title={appRoutes.listOfCms} />
      <Spacer height={scaledValue(12)} />
      <FlatList
        numColumns={2}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        data={[{}, {}, {}, {}]}
        renderItem={() => <FormerCm />}
      />
      <Spacer height={scaledValue(12)} />
    </View>
  );
};

export default ListOfCm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
});
