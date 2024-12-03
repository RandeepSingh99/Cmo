import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
import liveImg from '../../../assets/images/liveImg.png';
import moneyImg from '../../../assets/images/moneyImg.png';
import drawerIcon from '../../../assets/images/drawerIcon.png';
import {appColors} from '../../utils/constants/colors';
import RoundButton from '../RoundButton';
import {useNavigation} from '@react-navigation/native';
import {appRoutes} from '../../utils/constants/routeNames';
const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitleText}>{props.title}</Text>
      <View style={styles.imgsView}>
        <Image style={styles.actionButtonIcons} source={liveImg} />
        <RoundButton
          onPress={() => navigation.navigate(appRoutes.cmReliefFund)}
          img={moneyImg}
        />
        <RoundButton onPress={() => navigation.openDrawer()} img={drawerIcon} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: scaledValue(375),
    height: scaledValue(75),
    alignItems: 'center',
    paddingHorizontal: scaledValue(17.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.white,
  },
  imgsView: {flexDirection: 'row'},
  actionButtonIcons: {width: scaledValue(40), height: scaledValue(40)},
  headerTitleText: {
    fontSize: scaledValue(16),
    fontWeight: '800',
    color: appColors.black,
  },
});
