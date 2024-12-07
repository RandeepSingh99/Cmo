import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import GalleryDetailCard from '../../components/GalleryDetailCard';
import {appRoutes} from '../../utils/constants/routeNames';
import {appColors} from '../../utils/constants/colors';
import Spacer from '../../components/Spacer';
import {scaledValue} from '../../utils/designUtils';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {dateFormatter} from '../../utils';

const GalleryDetail = ({route}) => {
  const {
    HomePageImageUrl,
    Description,
    PressReleaseDateHindi,
    PressreleaseDate,
  } = route.params; // Extract data passed from the first screen
  const {language} = useSelector(state => state.ui);

  return (
    <ScrollView style={styles.container}>
      <Header title={appRoutes.gallery} />
      <Spacer height={scaledValue(12)} />
      <GalleryDetailCard
        numberOfLines={100}
        img={HomePageImageUrl}
        title={Description}
        date={
          language === 'English'
            ? dateFormatter(PressreleaseDate)
            : PressReleaseDateHindi
        }
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
