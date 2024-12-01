import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import banner from '../../../assets/images/banner.png';
import {scaledValue} from '../../utils/designUtils';
import Chip from '../../components/Chip';
import {filterChip} from '../../utils/constants';
import ContextHeader from '../../components/ContextHeader';
import ContextCart from '../../components/ContextCard';
import ContributionClickHere from '../../components/ContributionClickHere';
import {appColors} from '../../utils/constants/colors';
const Home = () => {
  const [selectedChip, setSelectedChip] = useState('All');
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll}>
      <Header title='CMO Rajasthan' />
      <Image resizeMode="contain" style={styles.banner} source={banner} />
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal
        data={filterChip}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Chip
            onPress={() => setSelectedChip(item)}
            title={item}
            selected={selectedChip}
          />
        )}
      />
      <ContextHeader />
      <FlatList
        horizontal
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ContextCart />}
      />

      <ContributionClickHere />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {width: scaledValue(375), height: scaledValue(177)},
  flatList: {marginHorizontal: scaledValue(6)},
  scroll: {backgroundColor: appColors.background},
});
