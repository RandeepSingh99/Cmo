import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import {useSelector} from 'react-redux';
import GalleryCard from '../../components/GalleryCard';
import {dateFormatter} from '../../utils';

const MegaEvents = props => {
  const megaEvents = useSelector(state => state.megaEvents.megaEvents);
  const {language} = useSelector(state => state.ui);

  return (
    <View style={styles.megaEvents}>
      <Header title={appRoutes.megaEvents} />
      <Spacer height={12} />
      <FlatList
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={megaEvents}
        renderItem={({item}) => (
          <GalleryCard
            onPress={() =>
              props.navigation.navigate(appRoutes.detail, {
                header: appRoutes.megaEvents,
                ...item,
              })
            }
            img={item.HomePageImageUrl}
            title={item.Description}
            date={
              language === 'English'
                ? dateFormatter(item.PressreleaseDate)
                : item.PressReleaseDateHindi
            }
          />
        )}
      />
      <Spacer height={12} />
    </View>
  );
};

export default MegaEvents;

const styles = StyleSheet.create({
  megaEvents: {flex: 1, backgroundColor: appColors.background},
  flatList: {
    alignItems: 'center',
  },
});
