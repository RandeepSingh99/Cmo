import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import banner from '../../../assets/images/banner.png';
import {scaledValue} from '../../utils/designUtils';
import Chip from '../../components/Chip';
import {filterChip} from '../../utils/constants';
const Home = () => {
  const [selectedChip, setSelectedChip] = useState('All');
  return (
    <View>
      <Header />
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {width: scaledValue(375), height: scaledValue(177)},
  flatList: {marginHorizontal: scaledValue(6)},
});
