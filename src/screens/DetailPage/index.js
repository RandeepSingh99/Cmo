import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import Header from '../../components/Header';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import {scaledValue} from '../../utils/designUtils';
import Spacer from '../../components/Spacer';
import calenderIcon from '../../../assets/images/calenderIcon.png';
import NewsCard from '../../components/NewsCard';
import downloadingIcon from '../../../assets/images/downloadingIcon.png';
import facebookIcon from '../../../assets/images/facebookIcon.png';
import instagramIcon from '../../../assets/images/instagramIcon.png';
import twitterIcon from '../../../assets/images/twitterIcon.png';
import {useSelector} from 'react-redux';
import youtubeIcon from '../../../assets/images/youtubeIcon.png';
import {dateFormatter, generateRandomNumber} from '../../utils';
import {pressReleaseImageUri} from '../../utils/constants/uri';

const DetailPage = props => {
  const {params} = props.route;
  const megaEvents = useSelector(state => state.megaEvents.megaEvents);
  const cmSpeeches = useSelector(state => state.cmSpeeches.videos);
  const successStories = useSelector(state => state.successStories.stories);
  const pressRelease = useSelector(state => state.pressRelease.pressRelease);
  const {language} = useSelector(state => state.ui);

  const mapRelatedVideos = () => {
    if (params.header === appRoutes.events||params.header === appRoutes.megaEvents) {
      return megaEvents.filter(itm => itm.Id !== params?.Id) || [];
    }
    if (params.header === appRoutes.successStories) {
      return successStories.filter(itm => itm.Id !== params?.Id) || [];
    }
    if (params.header === appRoutes.pressRelease) {
      return pressRelease.filter(itm => itm.Id !== params?.Id) || [];
    }
  };

  const randomNumber = generateRandomNumber(cmSpeeches.length);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title={params?.header || ''} />
      <Spacer height={scaledValue(12)} />
      <View style={styles.card}>
        <Text numberOfLines={1} allowFontScaling={false} style={styles.title}>
          {params?.Description}
        </Text>
        <View style={styles.titleView}>
          <View style={styles.dateView}>
            <Image
              resizeMode="contain"
              style={styles.contextCardCalenderIcon}
              source={calenderIcon}
            />
            <Text allowFontScaling={false} style={styles.date}>
              {language === 'English'
                ? dateFormatter(params?.PressreleaseDate)
                : params?.PressReleaseDateHindi}
            </Text>
          </View>

          {/* <View style={styles.socialView}>
            <Image source={downloadingIcon} style={styles.socialIcons} />
            <Image source={facebookIcon} style={styles.socialIcons} />
            <Image source={instagramIcon} style={styles.socialIcons} />
            <Image source={twitterIcon} style={styles.socialIcons} />
          </View> */}
        </View>

        <Image
          source={{uri: params?.HomePageImageUrl || pressReleaseImageUri}}
          style={styles.mainBanner}
        />
        <Spacer height={scaledValue(12)} />
        <View style={styles.imageGrid}>
          <FlatList
            data={params?.ImageAttachments}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Image
                resizeMode="fit"
                source={{uri: item}}
                style={styles.image}
              />
            )}
          />
        </View>
        <Text allowFontScaling={false} style={styles.description}>
          {params?.Description}
        </Text>

        {/* <View style={styles.authorNameView}>
          <Text allowFontScaling={false} style={styles.postedByText}>
            Posted By :{' '}
          </Text>
          <Text allowFontScaling={false} style={styles.postedByNameText}>
            Anushka
          </Text>
        </View> */}
        <View style={styles.relatedVideo}>
          <Text allowFontScaling={false} style={styles.relatedVideoText}>
            CM Speech Video
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(cmSpeeches[randomNumber].YoutubeURL)}
            style={styles.ytView}>
            <Image
              resizeMode="contain"
              source={youtubeIcon}
              style={styles.ytIcon}
            />
            <Image
              source={{uri: cmSpeeches[randomNumber].ImagePath}}
              style={styles.relatedVideoImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.storyTitle}>
        Latest {params?.header}
      </Text>
      <FlatList
        horizontal
        data={mapRelatedVideos()}
        keyExtractor={i => i.Id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <NewsCard
            onPress={() =>
              props.navigation.navigate(appRoutes.detail, {
                header: params.header,
                ...item,
              })
            }
            title={item.Description}
            img={item.HomePageImageUrl}
            date={
              language === 'English'
                ? dateFormatter(item.PressreleaseDate)
                : item.PressReleaseDateHindi
            }
          />
        )}
      />
      <Spacer height={scaledValue(12)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contextCardCalenderIcon: {
    height: scaledValue(15),
    width: scaledValue(15),
    margin: scaledValue(5),
    marginRight: scaledValue(8),
  },
  ytView: {justifyContent: 'center', alignItems: 'center'},
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  card: {
    backgroundColor: appColors.white,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    width: scaledValue(345),
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    width: scaledValue(324),
  },
  date: {
    fontSize: 14,
    color: '#6c757d',
  },
  imageGrid: {
    flexDirection: 'row',
    marginBottom: 16,
    width: scaledValue(345),
  },
  dateView: {flexDirection: 'row', alignItems: 'center'},
  image: {
    width: scaledValue(70),
    height: scaledValue(70),
    borderRadius: scaledValue(8),
    marginHorizontal: scaledValue(10),
  },
  description: {
    fontSize: scaledValue(14),
    color: appColors.black,
    marginBottom: scaledValue(16),
    width: scaledValue(324),
    fontWeight: '400',
  },
  relatedVideo: {
    marginTop: 16,
    alignItems: 'center',
  },
  relatedVideoText: {
    fontSize: scaledValue(16),
    fontWeight: '500',
    marginBottom: 8,
    width: scaledValue(310),
  },
  relatedVideoImage: {
    height: scaledValue(172),
    width: scaledValue(315),
    borderRadius: 5,
  },
  authorNameView: {
    width: scaledValue(325),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  postedByText: {
    color: appColors.black,
    fontSize: scaledValue(16),
    fontWeight: '500',
  },
  postedByNameText: {
    color: appColors.black,
    fontSize: scaledValue(16),
    fontWeight: '400',
  },
  titleView: {
    width: scaledValue(324),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaledValue(16),
    justifyContent: 'space-between',
  },
  socialView: {
    flexDirection: 'row',
    width: scaledValue(107),
    justifyContent: 'space-between',
  },
  socialIcons: {
    width: scaledValue(20),
    height: scaledValue(20),
  },
  mainBanner: {
    width: scaledValue(325),
    height: scaledValue(199),
    borderRadius: scaledValue(8),
  },
  ytIcon: {
    position: 'absolute',
    zIndex: 2,
    width: scaledValue(70),
    height: scaledValue(70),
  },
  storyTitle: {
    marginLeft: scaledValue(14),
    marginVertical: scaledValue(16),
    color: appColors.darkPurple,
    fontSize: scaledValue(20),
    fontWeight: '600',
  },
});

export default DetailPage;
