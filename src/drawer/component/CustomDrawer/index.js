import {
  Image,
  ImageBackground,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {scaledValue} from '../../../utils/designUtils';
import {appColors} from '../../../utils/constants/colors';
import DrawerItem from '../../../components/DrawerItem';
import BulletDrawerItem from '../../../components/BulletDrawerItem';
import {sections, stateGovt} from '../../../utils/constants';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {appRoutes} from '../../../utils/constants/routeNames';
import Header from '../Header';
import Spacer from '../../../components/Spacer';
const CustomDrawerContent = props => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = title => {
    setExpandedSections(prevState => ({
      ...prevState,
      [title]: !prevState[title],
    }));
    handleNavigation(title);
  };
  const handleNavigation = screen => {
    if (
      screen === stateGovt.governor ||
      screen === stateGovt.chiefMinister ||
      screen === stateGovt.chiefSecretary ||
      screen === stateGovt.deputyChiefMinister ||
      screen === stateGovt.mla ||
      screen === stateGovt.stateMinister ||
      screen === stateGovt.stateMinisterIndependentCharge ||
      screen === stateGovt.cabinetMinister
    ) {
      props.navigation.navigate(appRoutes.stateGovernment, screen);
      return;
    }
    if (
      screen === appRoutes.keyOfficials ||
      screen === appRoutes.distribution ||
      screen === appRoutes.successStories ||
      screen === appRoutes.ourGovernment ||
      screen === appRoutes.gallery ||
      screen === appRoutes.listOfCms ||
      screen === appRoutes.writeToCm ||
      screen === appRoutes.feedBack ||
      screen === appRoutes.cmReliefFund
    ) {
      props.navigation.navigate(screen);
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
          <Header onPress={() => props.navigation.closeDrawer()} />
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
      <Spacer height={scaledValue(12)} />
    </View>
  );
};
export default CustomDrawerContent;

const styles = StyleSheet.create({
  spacer: {height: scaledValue(150)},
});
