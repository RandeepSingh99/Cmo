import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import Spacer from '../../components/Spacer';

const KeyOfficials = () => {
  return (
    <View style={styles.keyOfficials}>
      <Header title="Key Officials" />
      <Spacer height={8} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[{}, {}, {}, {}, {}]}
        renderItem={({}) => <InfoCard />}
      />
      <Spacer height={8} />
    </View>
  );
};

export default KeyOfficials;

const styles = StyleSheet.create({
  keyOfficials: {flex: 1, backgroundColor: appColors.background},
});
