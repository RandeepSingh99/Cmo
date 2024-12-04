import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../components/Header';
import banner from '../../../assets/images/banner.png';
import {scaledValue} from '../../utils/designUtils';
import Chip from '../../components/Chip';
import {filterChip} from '../../utils/constants';
import ContextHeader from '../../components/ContextHeader';
import NewsCard from '../../components/NewsCard';
import ContributionClickHere from '../../components/ContributionClickHere';
import {appColors} from '../../utils/constants/colors';
import QuotesCard from '../../components/QuotesCard';
import MessageToChief from '../../components/MessageToChief';
import CMSpeechesCard from '../../components/CMSpeechesCard';
import Spacer from '../../components/Spacer';
import SocialMediaModal from '../../components/FollowUsModal';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAchievementList} from '../../store/achievementsSlice';
import {appRoutes} from '../../utils/constants/routeNames';
import ListItem from '../../components/ListItem';
import {fetchEvents} from '../../store/eventsSlice';
import {fetchCMQuotes} from '../../store/cmQuotesSlice';
import {useNavigation} from '@react-navigation/native';
import SingleImageViewer from '../../components/SingleImageViewer';
import {fetchPressReleases} from '../../store/pressReleaseSlice';
import QuoteCard from '../../components/QuoteCard';
import {fetchMegaEvents} from '../../store/megaEventsSlice';
import {fetchSuccessStories} from '../../store/successStoriesSlice';
import {fetchCMSpeeches} from '../../store/cmSpeechesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);
  const megaEventsRef = useRef(null);
  const cmQuotesRef = useRef(null);
  const successStoriesRef = useRef(null);
  const pressReleaseRef = useRef(null);
  const navigation = useNavigation();
  const [selectedChip, setSelectedChip] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageViewer, setImageViewer] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const bannerData = useSelector(state => state.achievements);
  // const upComingEventList = useSelector(state => state.eventList);
  const quotes = useSelector(state => state.cmQuotes.quotes);
  const pressRelease = useSelector(state => state.pressRelease.pressRelease);
  const megaEvents = useSelector(state => state.megaEvents.megaEvents);
  const successStories = useSelector(state => state.successStories.stories);
  const cmSpeeches = useSelector(state => state.cmSpeeches.videos);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const loadData = () => {
    dispatch(fetchAchievementList());
    dispatch(fetchEvents());
    dispatch(fetchCMQuotes());
    dispatch(fetchPressReleases());
    dispatch(fetchMegaEvents());
    dispatch(fetchSuccessStories());
    dispatch(fetchCMSpeeches());
  };

  useEffect(() => {
    loadData();
  }, []);

  const onChipPress = item => {
    setSelectedChip(item);
    if (item === 'Event') {
      megaEventsRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({x: 0, y, animated: true});
        },
        error => {
          console.error('Measurement error:', error);
        },
      );
      return;
    }
    if (item === 'Quotes') {
      cmQuotesRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({x: 0, y, animated: true});
        },
        error => {
          console.error('Measurement error:', error);
        },
      );
      return;
    }
    if (item === 'Success Stories') {
      successStoriesRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({x: 0, y, animated: true});
        },
        error => {
          console.error('Measurement error:', error);
        },
      );
      return;
    }
    if (item === 'Success Stories') {
      successStoriesRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({x: 0, y, animated: true});
        },
        error => {
          console.error('Measurement error:', error);
        },
      );
      return;
    }
    if (item === 'Press Releases' || item === 'Speeches') {
      pressReleaseRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({x: 0, y, animated: true});
        },
        error => {
          console.error('Measurement error:', error);
        },
      );
      return;
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      style={styles.scroll}>
      <Header title="CMO Rajasthan" />
      {/* <Text
        style={{
          position: 'absolute',
          color: appColors.white,
          fontWeight: '800',
          fontSize: scaledValue(16),
        }}>
        Title
      </Text>
      <Text
        style={{
          position: 'absolute',
          color: appColors.white,
          fontWeight: '400',
        }}>
        Des
      </Text> */}
      <Image
        resizeMode="fit"
        style={styles.banner}
        source={{uri: bannerData?.data[0]?.ImagePath}}
      />
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal
        data={filterChip}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Chip
            onPress={() => onChipPress(item)}
            title={item}
            selected={selectedChip}
          />
        )}
      />
      <View ref={megaEventsRef} />
      <ContextHeader
        onPress={() => navigation.navigate(appRoutes.megaEvents)}
        title="Latest Events"
      />
      <FlatList
        horizontal
        data={megaEvents}
        keyExtractor={i => i.Description}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <NewsCard
            title={item.Description}
            img={item.HomePageImageUrl}
            date={item.PressReleaseDateHindi}
          />
        )}
      />
      <ContributionClickHere />
      <View ref={cmQuotesRef} />
      <ContextHeader
        onPress={() => navigation.navigate(appRoutes.cmQuotes)}
        title="Latest Quotes"
      />
      <FlatList
        data={quotes.slice(0, 3)}
        keyExtractor={i => i.ImagePath}
        initialNumToRender={3}
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

      <View ref={successStoriesRef} />
      <ContextHeader
        title={appRoutes.successStories}
        onPress={() => navigation.navigate(appRoutes.successStories)}
      />
      <FlatList
        horizontal
        data={successStories}
        keyExtractor={i => i.Description}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <NewsCard
            title={item.Description}
            img={item.HomePageImageUrl}
            date={item.PressReleaseDateHindi}
          />
        )}
      />
      <MessageToChief />
      <View ref={pressReleaseRef} />
      <ContextHeader
        onPress={() => navigation.navigate(appRoutes.pressRelease)}
        title={appRoutes.pressRelease}
      />
      <FlatList
        horizontal
        data={pressRelease}
        keyExtractor={i => i.Description}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <NewsCard
            title={item.Description}
            img={item.HomePageImageUrl}
            date={item.PressReleaseDateHindi}
          />
        )}
      />
      <ContextHeader
        ref={cmSpeeches}
        onPress={() => navigation.navigate(appRoutes.cmSpeeches)}
        title={appRoutes.cmSpeeches}
      />
      <FlatList
        data={cmSpeeches.slice(0, 4)}
        horizontal
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        renderItem={({item}) => (
          <CMSpeechesCard
            onPress={() => Linking.openURL(item.YoutubeURL)}
            title={item.Achievement}
            img={item.ImagePath}
          />
        )}
      />
      <Spacer height={12} />
      <View style={styles.paginationContainer}>
        {cmSpeeches.slice(0, 4).map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.unActiveDot,
              ]}
            />
          );
        })}
      </View>
      <Spacer height={24} />
      <SingleImageViewer
        visible={imageViewer}
        selectedImage={selectedImage}
        closeModal={() => setImageViewer(false)}
      />
      <SocialMediaModal />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {width: scaledValue(375), height: scaledValue(177)},
  flatList: {marginHorizontal: scaledValue(6)},
  scroll: {backgroundColor: appColors.background},
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: scaledValue(4),
  },
  activeDot: {
    backgroundColor: appColors.activeDot,
    width: scaledValue(9),
    height: scaledValue(9),
  },
  unActiveDot: {
    backgroundColor: appColors.unActiveDot,
    width: scaledValue(7),
    height: scaledValue(7),
  },
});
