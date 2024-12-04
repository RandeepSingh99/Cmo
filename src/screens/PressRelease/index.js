import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import NewsCard from '../../components/NewsCard';
import {useSelector} from 'react-redux';
import GalleryCard from '../../components/GalleryCard';

const PressRelease = () => {
  const pressRelease = useSelector(state => state.pressRelease.pressRelease);

  return (
    <View style={styles.pressRelease}>
      <Header title={appRoutes.pressRelease} />
      <Spacer height={12} />
      <FlatList
      contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={pressRelease}
        renderItem={({item}) => (
          <GalleryCard
            onPress={() => {}}
            img={item.HomePageImageUrl}
            title={item.Description}
            date={item.PressReleaseDateHindi}
          />
        )}
      />
      <Spacer height={12} />
    </View>
  );
};

export default PressRelease;

const styles = StyleSheet.create({
  pressRelease: {flex: 1, backgroundColor: appColors.background},
  flatList:{
    alignItems:'center'
  }
});
