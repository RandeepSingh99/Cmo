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
import ContextSmallCard from '../../components/ContextSmallCard';
import MessageToChief from '../../components/MessageToChief';
import CMSpeechesCard from '../../components/CMSpeechesCard';
import Spacer from '../../components/Spacer';
import SocialMediaModal from '../../components/FollowUsModal';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAchievementList} from '../../store/achievementsSlice';
import {appRoutes} from '../../utils/constants/routeNames';
import ListItem from '../../components/ListItem';
import { StretchOutY } from 'react-native-reanimated';

const Home = () => {
  const dispatch = useDispatch();
  const [selectedChip, setSelectedChip] = useState('All');
  const bannerData = useSelector(state => state.achievements);

  const loadData = () => {
    dispatch(fetchAchievementList());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll}>
      <Header title="CMO Rajasthan" />
      <Text
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
      </Text>
      <Image
        resizeMode="fit"
        style={styles.banner}
        source={{uri: bannerData?.data[0]?.ImagePath}}
      />
      
      <View style={styles.governorDescription}>
        <View style={styles.governorDescriptionDOB}>
          <Text style={styles.governorDescriptionDateOfBirth}>
            Date of Birth :
          </Text>
          <Text style={styles.governorDescriptionDOBName}>17 August 1945</Text>
        </View>
        <View style={styles.governorDescriptionHomeTown}>
          <Text style={styles.governorDescriptionHT}>
            Home Town :
          </Text>
          <Text  style={styles.governorDescriptionHTName}>Phulambri, Aurangabad, Maharashtra</Text>
        </View>
        <View style={styles.governorDescriptionSocialMediaApp}>
          <View style={styles.governorDescriptionSocialMedia}>
            <Text style={styles.governorDescriptionSMT}>
              Social Media Twitter
            </Text>
            <Text style={styles.governorDescriptionSMTid}>@rajbhavanjaipur</Text>
          </View>
          <View style={styles.governorDescriptionSocialMedia}>
            <Text style={styles.governorDescriptionSMT}>
              Facebook
            </Text>
            <Text style={styles.governorDescriptionSMTid}>@RajBhavanJaipur</Text>
          </View>
        </View>
        <View style={styles.governorDescriptionContactDetails}>
          <Text style={styles.governorDescriptionCD}>Contacts Details</Text>
          <Text style={styles.governorDescriptionCDName}>
            Governor’s secretariat, raj bhawan jaipur epabx 0141-2228716-19,
            2228722, 2228611, 2228612 FAX No 0141-2221156
          </Text>
        </View>
        <View style={styles.governorDescriptionExecutivePosition}>
          <Text style={styles.governorDescriptionELP}>Executive & Legislative Positions</Text>
          <Text  style={styles.governorDescriptionELPName}>Governor of Rajasthan from 31st July, 2024</Text>
        </View>
        <View style={styles.governorDescriptionAtPresent}>
          <Text style={styles.governorDescriptionAT}>At Present</Text>
          <Text style={styles.governorDescriptionATName}>
            Assumed the office of the Governor of Rajasthan on 31st July, 2024.
          </Text>
        </View>
      </View>

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
      /> */}
      <ContextHeader />
      {/* <FlatList
        horizontal
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewsCard />}
      />

      <ContributionClickHere />
      <ContextHeader />

      <ContextSmallCard />
      <FlatList
        vertical
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ContextSmallCard />}
      />

      <ContextHeader />
      <FlatList
        horizontal
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewsCard />}
      />

      <MessageToChief />
      <ContextHeader />
      <FlatList
        horizontal
        data={[{}, {}, {}]}
        keyExtractor={i => i}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewsCard />}
      />
      <ContextHeader />
      <CMSpeechesCard />
      <Spacer height={12} />
      <SocialMediaModal /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {width: scaledValue(375), height: scaledValue(177)},
  flatList: {marginHorizontal: scaledValue(6)},
  scroll: {backgroundColor: appColors.background},

  governorDescription:{
    height: scaledValue(376),
   paddingTop:scaledValue(20),
    backgroundColor: appColors.white,
  paddingHorizontal:scaledValue(20)
  },
  governorDescriptionDOB:{
    flexDirection:'row',
    height:scaledValue(31),
    width:scaledValue(311)
  },
  governorDescriptionDateOfBirth:{
    color:appColors.black,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:800,
  },
  governorDescriptionDOBName:{
    color:appColors.gray,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:600,
  },
  governorDescriptionHomeTown:{
    flexDirection:'row',
    height:scaledValue(31),
    width:scaledValue(311)
  },
  governorDescriptionHT:{
    color:appColors.black,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:800,
  },
  governorDescriptionHTName:{
    color:appColors.gray,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:600,
  },
  governorDescriptionSocialMediaApp:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:scaledValue(31),
    width:scaledValue(311)
  },
  governorDescriptionSMT:{
    color:appColors.black,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:800,
  },
  governorDescriptionSMTid:{
    color:appColors.gray,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:600,
  },
  governorDescriptionContactDetails:{
    flexDirection:'column',
    marginTop:scaledValue(10),
    width:scaledValue(311),
    
  },
  governorDescriptionCD:{
    color:appColors.black,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:800,
  },
  governorDescriptionCDName:{
    color:appColors.gray,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:600,
  },
  governorDescriptionExecutivePosition:{
    marginTop:scaledValue(10),
    width:scaledValue(311)
  },
  governorDescriptionELP:{
    color:appColors.black,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:800,
  },
  governorDescriptionELPName:{
    color:appColors.gray,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:600,
  },
  governorDescriptionAtPresent:{
    marginTop:scaledValue(10),
    width:scaledValue(311)
  },
  governorDescriptionAT:{
    color:appColors.black,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:800,
  },
  governorDescriptionATName:{
    color:appColors.gray,
    fontFamily:"Roboto",
    fontSize:scaledValue(14),
    fontWeight:600,
  }


  
});
