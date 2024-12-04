import {FlatList, Linking, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import {appColors} from '../../utils/constants/colors';
import {useSelector} from 'react-redux';
import CMSpeechesCard from '../../components/CMSpeechesCard';
import {scaledValue} from '../../utils/designUtils';
import Spacer from '../../components/Spacer';

const CmSpeeches = () => {
  const cmSpeeches = useSelector(state => state.cmSpeeches.videos);
  return (
    <View style={styles.cmSpeeches}>
      <Header title={appRoutes.cmSpeeches} />
      <FlatList
        contentContainerStyle={styles.flatList}
        data={cmSpeeches}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CMSpeechesCard
            onPress={() => Linking.openURL(item.YoutubeURL)}
            title={item.Achievement}
            img={item.ImagePath}
          />
        )}
      />
    </View>
  );
};

export default CmSpeeches;

const styles = StyleSheet.create({
  cmSpeeches: {flex: 1, backgroundColor: appColors.background},
  flatList: {paddingVertical: scaledValue(12)},
});
