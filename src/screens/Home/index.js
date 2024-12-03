import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {StretchOutY} from 'react-native-reanimated';
import {fetchEvents} from '../../store/eventsSlice';
import {fetchCMQuotes} from '../../store/cmQuotesSlice';
import {useNavigation} from '@react-navigation/native';
import SingleImageViewer from '../../components/SingleImageViewer';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedChip, setSelectedChip] = useState('All');
  const [imageViewer, setImageViewer] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const bannerData = useSelector(state => state.achievements);
  const data = useSelector(state => state.eventList);
  const quotes = useSelector(state => state.cmQuotes.quotes);

  const loadData = () => {
    dispatch(fetchAchievementList());
    dispatch(fetchEvents());
    dispatch(fetchCMQuotes());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll}>
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

      {/* <FlatList
        contentContainerStyle={styles.flatList}
        horizontal
        data={filterChip}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Chip
            onPress={() => setSelectedChip(item)}
            title={item}
            selected={selectedChip}
          />
        )}
      />
      <ContextHeader />
      <FlatList
        horizontal
        data={[]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewsCard />}
      /> */}

      <ContributionClickHere />
      <ContextHeader
        onPress={() => navigation.navigate(appRoutes.cmQuotes, quotes)}
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

      <ContextHeader />
      {/* <FlatList
        horizontal
        data={[]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewsCard />}
      />

      <MessageToChief />
      <ContextHeader />
      <FlatList
        horizontal
        data={[]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewsCard />}
      />
      <ContextHeader />
      <CMSpeechesCard />
      <Spacer height={12} />
      <SocialMediaModal /> */}
      <SingleImageViewer
        visible={imageViewer}
        selectedImage={selectedImage}
        closeModal={() => setImageViewer(false)}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {width: scaledValue(375), height: scaledValue(177)},
  flatList: {marginHorizontal: scaledValue(6)},
  scroll: {backgroundColor: appColors.background},
});
