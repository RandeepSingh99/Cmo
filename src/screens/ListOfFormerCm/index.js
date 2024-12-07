import {FlatList, Linking, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import FormerCm from '../../components/FormerCmCard';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import {scaledValue} from '../../utils/designUtils';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFormerCMS} from '../../store/formerCMSSlice';

const ListOfCm = () => {
  const {language} = useSelector(state => state.ui);
  const cms = useSelector(state => state.formerCM.cms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFormerCMS());
  }, []);

  return (
    <View style={styles.container}>
      <Header title={appRoutes.listOfCms} />
      <Spacer height={scaledValue(12)} />
      <FlatList
        numColumns={2}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        data={cms}
        renderItem={({item}) => (
          <FormerCm
            onPress={() => Linking.openURL(item.Url)}
            title={
              language === 'English' ? item.Achievement : item.AchievementHindi
            }
            img={item.ImagePath}
          />
        )}
      />
      <Spacer height={scaledValue(12)} />
    </View>
  );
};

export default ListOfCm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
});
