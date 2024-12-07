import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {appRoutes} from '../../utils/constants/routeNames';
import {appColors} from '../../utils/constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import QuoteCard from '../../components/QuoteCard';
import {dateFormatter} from '../../utils';
import {fetchCMEvents} from '../../store/cmEventsSlice';
import GalleryCard from '../../components/GalleryCard';
import { scaledValue } from '../../utils/designUtils';

const CmEvents = props => {
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.ui);
  const cmEvents = useSelector(state => state.cmEvents.list);

  useEffect(() => {
    dispatch(fetchCMEvents());
  }, []);

  return (
    <View style={styles.cmEvents}>
      <Header title={appRoutes.cmEvent} />
      <FlatList
        data={cmEvents}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <GalleryCard
            onPress={() =>
              props.navigation.navigate(appRoutes.detail, {
                header: appRoutes.cmEvent,
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
    </View>
  );
};

export default CmEvents;

const styles = StyleSheet.create({
  cmEvents: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  flatList: {
    alignItems: 'center',
    paddingVertical:scaledValue(12)
  },
});
