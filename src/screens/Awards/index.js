import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import OurGovtCard from '../../components/OurGovtCard';
import QuotesCard from '../../components/QuotesCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAchievementList} from '../../store/achievementsSlice';
import {fetchAwards} from '../../store/awardsSlice';

const Awards = () => {
  const dispatch = useDispatch();
  const awardList = useSelector(state => state.awards.awardList);
  const loadData = () => {
    dispatch(fetchAwards());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.awards}>
      <Header title={appRoutes.awards} />
      <FlatList
        contentContainerStyle={styles.flatList}
        data={awardList}
        renderItem={({item}) => (
          <QuotesCard
            onPress={() => {}}
            title={item.Achievement}
            img={item.ImagePath}
            date={item.AchievementDateHindi}
          />
        )}
      />
    </View>
  );
};

export default Awards;

const styles = StyleSheet.create({
  awards: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  flatList: {alignItems: 'center'},
});
