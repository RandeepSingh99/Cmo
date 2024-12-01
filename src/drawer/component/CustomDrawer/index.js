import {
  Image,
  ImageBackground,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import bgLinear from '../../../../assets/images/bgLinear.png';
import share from '../../../../assets/images/share.png';
import logo from '../../../../assets/images/logo.png';
import xCircle from '../../../../assets/images/xCircle.png';
import {scaledValue} from '../../../utils/designUtils';
import {appColors} from '../../../utils/constants/colors';
import DrawerItem from '../../../components/DrawerItem';
import BulletDrawerItem from '../../../components/BulletDrawerItem';
import {sections, stateGovt} from '../../../utils/constants';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {appRoutes} from '../../../utils/constants/routeNames';
const CustomDrawerContent = props => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = title => {
    setExpandedSections(prevState => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  const handleNavigation = screen => {
    if (
      screen === appRoutes.keyOfficials ||
      screen === appRoutes.distribution
    ) {
      props.navigation.navigate(screen);
      return;
    }
    if (
      screen === stateGovt.governor ||
      screen === stateGovt.chiefMinister ||
      screen === stateGovt.chiefSecretary ||
      screen === stateGovt.deputyChiefMinister ||
      screen === stateGovt.mla ||
      screen === stateGovt.stateMinister
    ) {
      props.navigation.navigate(appRoutes.stateGovernment, screen);
      return;
    }
  };

  return (
    <View {...props}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => (
          <ImageBackground style={styles.drawerHeader} source={bgLinear}>
            <Image
              tintColor={appColors.white}
              style={styles.logo}
              source={logo}
            />
            <TouchableOpacity
              style={styles.crossTouchable}
              onPress={() => props.navigation.closeDrawer()}>
              <Image
                resizeMode="contain"
                style={styles.cross}
                source={xCircle}
              />
            </TouchableOpacity>
            <View>
              <View style={styles.titleView}>
                <Text style={styles.title}>CMO Rajasthan</Text>
                <Image
                  resizeMode="contain"
                  tintColor={appColors.white}
                  style={styles.share}
                  source={share}
                />
              </View>
              <Text style={styles.lastAppUpdateTime}>
                 Last update : 04-Aug-2024, 9:31 PM
              </Text>
            </View>
          </ImageBackground>
        )}
        renderSectionHeader={({section}) => (
          <DrawerItem
            onPress={() => toggleSection(section.title)}
            title={section.title}
            showMinus={section.data.length > 0}
          />
        )}
        renderItem={({item, section}) =>
          expandedSections[section.title] && (
            <BulletDrawerItem
              onPress={() => handleNavigation(item)}
              title={item}
            />
          )
        }
        contentContainerStyle={styles.container}
        stickySectionHeadersEnabled={false} // Optional, to disable sticky headers
      />
    </View>
  );
};
export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerHeader: {
    width: scaledValue(351),
    height: scaledValue(148),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: scaledValue(40),
    height: scaledValue(62),
    marginRight: scaledValue(12),
  },
  title: {
    color: appColors.white,
    fontSize: scaledValue(16),
    fontWeight: '800',
    marginRight: scaledValue(6),
  },
  lastAppUpdateTime: {
    color: appColors.white,
    fontSize: scaledValue(12),
    fontWeight: '400',
    marginTop: scaledValue(4),
  },
  titleView: {flexDirection: 'row'},
  cross: {
    width: scaledValue(32),
    height: scaledValue(32),
  },
  share: {width: scaledValue(20), height: scaledValue(20)},
  crossTouchable: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 99,
    width: scaledValue(50),
    height: scaledValue(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {height: scaledValue(150)},
});
