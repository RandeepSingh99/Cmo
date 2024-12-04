import {FlatList, Linking, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {appColors} from '../../utils/constants/colors';
import {appRoutes} from '../../utils/constants/routeNames';
import OurGovtCard from '../../components/OurGovtCard';
import Spacer from '../../components/Spacer';
import {scaledValue} from '../../utils/designUtils';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImportantLinks} from '../../store/importantLinksSlice';
import info from '../../../assets/images/info.png';
import gov from '../../../assets/images/gov.png';
import tm from '../../../assets/images/tm.png';

const OurGovt = () => {
  const links = useSelector(state => state.importantLinks.links);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImportantLinks());
  }, []);

  const renderImg = title => {
    title = title.split(' ')[0];
    if (title == 'Right') {
      return info;
    }
    if (
      title == 'Rajasthan' ||
      title == 'CMRF' ||
      title == 'State' ||
      title == 'Rajasthan'
    ) {
      return gov;
    }
    if (title == 'Jan') {
      return tm;
    }
  };

  return (
    <View style={styles.ourGovt}>
      <Header title={appRoutes.ourGovernment} />
      <Spacer height={scaledValue(12)} />

      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={2}
        data={links}
        renderItem={({item}) => (
          <OurGovtCard
            onPress={() => Linking.openURL(item.Url)}
            title={item.Achievement}
            img={renderImg(item.Achievement)}
          />
        )}
      />
    </View>
  );
};

export default OurGovt;

const styles = StyleSheet.create({
  ourGovt: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  flatList: {alignItems: 'center'},
});
