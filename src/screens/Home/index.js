import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import banner from '../../../assets/images/banner.png';
import { scaledValue } from '../../utils/designUtils';
import Chip from '../../components/Chip';
import { filterChip } from '../../utils/constants';
import ContextHeader from '../../components/ContextHeader';
import NewsCard from '../../components/NewsCard';
import ContributionClickHere from '../../components/ContributionClickHere';
import { appColors } from '../../utils/constants/colors';
import ContextSmallCard from '../../components/ContextSmallCard';
import MessageToChief from '../../components/MessageToChief';
import CMSpeechesCard from '../../components/CMSpeechesCard';
import Spacer from '../../components/Spacer';
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
        renderItem={({ item }) => (
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
        renderItem={({ item }) => <NewsCard />}
      />

      <ContributionClickHere />
      <ContextHeader />

      <ContextSmallCard />
      <FlatList
        vertical
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>  <ContextSmallCard />}
      />

      <ContextHeader />
      <FlatList
        horizontal
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <NewsCard />}
      />

      <MessageToChief />
       <ContextHeader />
       <FlatList
        horizontal
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <NewsCard />}
      />
      <ContextHeader />
      <CMSpeechesCard />
      <Spacer height={12}/>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: { width: scaledValue(375), height: scaledValue(177) },
  flatList: { marginHorizontal: scaledValue(6) },
  scroll: { backgroundColor: appColors.background },
});
