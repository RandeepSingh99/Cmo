import {Linking, SectionList, StyleSheet, View} from 'react-native';

import {scaledValue} from '../../../utils/designUtils';
import DrawerItem from '../../../components/DrawerItem';
import BulletDrawerItem from '../../../components/BulletDrawerItem';
import {linkingStrings, sections, stateGovt} from '../../../utils/constants';
import {useState} from 'react';
import {appRoutes} from '../../../utils/constants/routeNames';
import Header from '../Header';
import Spacer from '../../../components/Spacer';
import {
  acb,
  budget,
  distribution,
  dopWebsite,
  excise,
  generalAdministrationDepartment,
  homeDepartment,
  infoAndPublic,
  planningDepartment,
  policy,
  terms,
} from '../../../utils/constants/uri';
import {setFollowUsModal} from '../../../store/uiSlice';
import {useDispatch, useSelector} from 'react-redux';
const CustomDrawerContent = props => {
  const dispatch = useDispatch();
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
    if (screen === linkingStrings.followUs) {
      props.navigation.closeDrawer();
      props.navigation.navigate(appRoutes.home);
      dispatch(setFollowUsModal(true));
      return;
    }
    if (screen === linkingStrings.distribution) {
      Linking.openURL(distribution);
      return;
    }
    if (screen.includes(linkingStrings.budget)) {
      Linking.openURL(budget);
      return;
    }
    if (screen.includes(linkingStrings.doP)) {
      Linking.openURL(dopWebsite);
      return;
    }
    if (screen.includes(linkingStrings.excise)) {
      Linking.openURL(excise);
      return;
    }
    if (screen.includes(linkingStrings.homeDepartment)) {
      Linking.openURL(homeDepartment);
      return;
    }
    if (screen.includes(linkingStrings.planningDepartment)) {
      Linking.openURL(planningDepartment);
      return;
    }
    if (screen.includes(linkingStrings.generalAdministrationDepartment)) {
      Linking.openURL(generalAdministrationDepartment);
      return;
    }
    if (screen.includes(linkingStrings.infoAndPublic)) {
      Linking.openURL(infoAndPublic);
      return;
    }
    if (screen.includes(linkingStrings.acb)) {
      Linking.openURL(acb);
      return;
    }

    if (
      screen === appRoutes.keyOfficials ||
      screen === appRoutes.successStories ||
      screen === appRoutes.ourGovernment ||
      screen === appRoutes.gallery ||
      screen === appRoutes.listOfCms ||
      screen === appRoutes.writeToCm ||
      screen === appRoutes.feedBack ||
      screen === appRoutes.cmQuotes ||
      screen === appRoutes.awards ||
      screen === appRoutes.pressRelease ||
      screen === appRoutes.megaEvents ||
      screen === appRoutes.photoBooth ||
      screen === appRoutes.privacyPolicy ||
      screen === appRoutes.termsCondition ||
      screen === appRoutes.cmEvent ||
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
          <Header
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate(appRoutes.home);
            }}
          />
        )}
        renderSectionHeader={({section}) => (
          <DrawerItem
            expanded={expandedSections[section.title]}
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
