import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import {appColors} from '../../utils/constants/colors';
import QuotesCard from '../../components/QuotesCard';
import SingleImageViewer from '../../components/SingleImageViewer';
import {useSelector} from 'react-redux';

const CmQuotes = () => {
  const quotes = useSelector(state => state.cmQuotes.quotes);
  const [imageViewer, setImageViewer] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <View style={styles.cmQuotes}>
      <Header title={appRoutes.cmQuotes} />
      <FlatList
        data={quotes}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <QuotesCard
            onPress={() => {
              setSelectedImage(item.ImagePath);
              setImageViewer(true);
            }}
            title={item.Achievement}
            img={item.ThumbnailImagePath}
            date={item.AchievementDateHindi}
          />
        )}
      />
      <SingleImageViewer
        visible={imageViewer}
        selectedImage={selectedImage}
        closeModal={() => setImageViewer(false)}
      />
    </View>
  );
};

export default CmQuotes;

const styles = StyleSheet.create({
  cmQuotes: {flex: 1, backgroundColor: appColors.background},
});