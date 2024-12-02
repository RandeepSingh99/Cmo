import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import {appColors} from '../../utils/constants/colors';
import GalleryCard from '../../components/GalleryCard';
import Spacer from '../../components/Spacer';
import {scaledValue} from '../../utils/designUtils';

const PhotoGallery = () => {
  return (
    <View style={styles.container}>
      <Header title={appRoutes.gallery} />
      <Spacer height={scaledValue(12)} />
      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        data={[{}, {}, {}, {}]}
        renderItem={() => <GalleryCard />}
      />
      <Spacer height={scaledValue(12)} />
    </View>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
});
