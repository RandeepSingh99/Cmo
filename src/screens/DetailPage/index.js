import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
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

const DetailPage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title={appRoutes.successStories} />
      <Spacer height={scaledValue(12)} />
      <View style={styles.card}>
        <Text  allowFontScaling={false}style={styles.title}>
          Rajasthan Advancing Towards Solar Energy Revolution
        </Text>
        <View style={styles.titleView}>
          <View style={styles.dateView}>
            <Image
              resizeMode="contain"
              style={styles.contextCardCalenderIcon}
              source={calenderIcon}
            />
            <Text  allowFontScaling={false}style={styles.date}>05 July 2024</Text>
          </View>

          <View style={styles.socialView}>
            <Image source={downloadingIcon} style={styles.socialIcons} />
            <Image
              source={facebookIcon}
              style={styles.socialIcons}
            />
            <Image source={instagramIcon} style={styles.socialIcons} />
            <Image source={twitterIcon} style={styles.socialIcons} />
          </View>
        </View>

        <Image
          source={{uri: 'https://via.placeholder.com/325'}}
          style={styles.mainBanner}
        />
        <Spacer height={scaledValue(12)} />
        <View style={styles.imageGrid}>
          <FlatList
            data={[{}, {}, {}, {}, {}]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
              <Image
                source={{uri: 'https://via.placeholder.com/100'}}
                style={styles.image}
              />
            )}
          />
        </View>
        <Text  allowFontScaling={false}style={styles.description}>
          The Swami Vivekananda Scholarship for Academic Excellence (SVSAE) in
          Rajasthan stands as a beacon of hope and opportunity for economically
          disadvantaged students. By sponsoring the education of students
          studying in the top 50% across various fields, the SVSAE Program
          demonstrates making a powerful statement about its commitment to
          education and social equity.
        </Text>
        <Text  allowFontScaling={false}style={styles.description}>
          Inspired by the visionary teachings of Swami Vivekananda, this
          scholarship program embodies his belief in the transformative power of
          education. As Swami Vivekananda wisely said, "Education is not the
          amount of information that is put into your brain and runs riot there,
          undigested, all your life. We must have life-building, man-making,
          character-making assimilation of ideas.”
        </Text>
        <Text  allowFontScaling={false}style={styles.description}>
          Under the visionary leadership of Chief Minister Shri [Name], the
          SVSAE Program continues to transform lives, making Rajasthan a hub of
          education, innovation, and dreams for the future.
        </Text>
        <View style={styles.authorNameView}>
          <Text  allowFontScaling={false}style={styles.postedByText}>Posted By : </Text>
          <Text  allowFontScaling={false}style={styles.postedByNameText}>Anushka</Text>
        </View>
        <View style={styles.relatedVideo}>
          <Text  allowFontScaling={false}style={styles.relatedVideoText}>Related Video</Text>
          <Image
            source={{uri: 'https://via.placeholder.com/100'}}
            style={styles.relatedVideoImage}
          />
        </View>
      </View>
      <Text  allowFontScaling={false}style={styles.storyTitle}>Latest Success Stories</Text>
      <FlatList
        horizontal
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewsCard />}
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
  storyTitle: {
    marginLeft: scaledValue(14),
    marginVertical: scaledValue(16),
    color: appColors.darkPurple,
    fontSize: scaledValue(20),
    fontWeight: '600',
  },
});

export default DetailPage;
