import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import {useSelector} from 'react-redux';
import GalleryCard from '../../components/GalleryCard';
import { dateFormatter } from '../../utils';

const PressRelease = props => {
  const pressRelease = useSelector(state => state.pressRelease.pressRelease);
  const {language} = useSelector(state => state.ui);

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
            onPress={() =>
              props.navigation.navigate(appRoutes.detail, {
                header: appRoutes.pressRelease,
                ...item,
              })
            }
            img={item.HomePageImageUrl}
            title={item.Description}
            date={
              language === 'English'
                ? dateFormatter(item.PressreleaseDate)
                : item.PressReleaseDateHindi
            }          />
        )}
      />
      <Spacer height={12} />
    </View>
  );
};

export default PressRelease;

const styles = StyleSheet.create({
  pressRelease: {flex: 1, backgroundColor: appColors.background},
  flatList: {
    alignItems: 'center',
  },
});
