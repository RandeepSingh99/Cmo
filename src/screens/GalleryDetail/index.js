import {FlatList, StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import GalleryDetailCard from '../../components/GalleryDetailCard';
import {appRoutes} from '../../utils/constants/routeNames';
import {appColors} from '../../utils/constants/colors';
import Spacer from '../../components/Spacer';
import {scaledValue} from '../../utils/designUtils';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';


const GalleryDetail = ({route}) => {
  const { HomePageImageUrl, Description, PressReleaseDateHindi } = route.params; // Extract data passed from the first screen
    const gallery = useSelector(state => state.photoGallery.gallery);

  return (
    <ScrollView style={styles.container}>
      <Header title={appRoutes.gallery} />
      <Spacer height={scaledValue(12)} />
    
          <GalleryDetailCard
            img={HomePageImageUrl}
            title={Description}
            date={PressReleaseDateHindi}
          />
    </ScrollView>
  );
};

export default GalleryDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
    
  },
  flatList: {alignItems: 'center'},
});
