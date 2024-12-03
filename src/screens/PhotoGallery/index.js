import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import {appColors} from '../../utils/constants/colors';
import GalleryCard from '../../components/GalleryCard';
import Spacer from '../../components/Spacer';
import {scaledValue} from '../../utils/designUtils';
import {fetchPhotoGallery} from '../../store/photoGallerySlice';
import {useDispatch, useSelector} from 'react-redux';
import SingleImageViewer from '../../components/SingleImageViewer';

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.photoGallery.gallery);
  const [imageViewer, setImageViewer] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const loadData = () => {
    dispatch(fetchPhotoGallery());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={appRoutes.gallery} />
      <Spacer height={scaledValue(12)} />
      <FlatList
        keyExtractor={i => i.Id}
        contentContainerStyle={styles.flatList}
        initialNumToRender={4}
        maxToRenderPerBatch={1}
        showsVerticalScrollIndicator={false}
        data={gallery}
        renderItem={({item}) => (
          <GalleryCard
            onPress={() => {
              setSelectedImage(item.HomePageImageUrl);
              setImageViewer(true);
            }}
            img={item.HomePageImageUrl}
            title={item.Description}
            date={item.PressReleaseDateHindi}
          />
        )}
      />
      <Spacer height={scaledValue(12)} />
      <SingleImageViewer
        visible={imageViewer}
        selectedImage={selectedImage}
        closeModal={() => setImageViewer(false)}
      />
    </View>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  flatList: {alignItems: 'center'},
});
