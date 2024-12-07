import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import QuotesCard from '../../components/QuotesCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAwards} from '../../store/awardsSlice';
import {dateFormatter} from '../../utils';

const Awards = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.ui);
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
            img={item.ImagePath}
            title={
              language === 'English' ? item.Achievement : item.AchievementHindi
            }
            date={
              language === 'English'
                ? dateFormatter(item.AchievementDate)
                : item.AchievementDateHindi
            }
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
