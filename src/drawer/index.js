import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import {appRoutes} from '../utils/constants/routeNames';
import {scaledValue} from '../utils/designUtils';
import CustomDrawerContent from './component/CustomDrawer';
import KeyOfficials from '../screens/KeyOfficials';
import StateGovernment from '../screens/StateGovernment';
import OurGovt from '../screens/OurGovt';
import Events from '../screens/Events';
import PhotoGallery from '../screens/PhotoGallery';
import ListOfCm from '../screens/ListOfFormerCm';
import WriteToCm from '../screens/WriteToCm';
import FeedBack from '../screens/FeedBack';
import CmReliefFund from '../screens/CMReliefFund';
import CmQuotes from '../screens/CmQuotes';
import Awards from '../screens/Awards';
import PressRelease from '../screens/PressRelease';
import MegaEvents from '../screens/MegaEvents';
import DetailPage from '../screens/DetailPage';
import SuccessStories from '../screens/SuccessStories';
import CmSpeeches from '../screens/CmSpeeches';
import GalleryDetail from '../screens/GalleryDetail';
import PhotoBooth from '../screens/PhotoBooth';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsCondition from '../screens/TermsCondition';
import CmEvents from '../screens/CmEvents';
import AboutApp from '../screens/AboutApp';

const DrawerStack = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: scaledValue(351),
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
        drawerPosition: 'right',
      }}>
      <DrawerStack.Screen name={appRoutes.home} component={Home} />
      <DrawerStack.Screen
        name={appRoutes.keyOfficials}
        component={KeyOfficials}
      />
      <DrawerStack.Screen
        name={appRoutes.stateGovernment}
        component={StateGovernment}
      />
      <DrawerStack.Screen
        name={appRoutes.successStories}
        component={SuccessStories}
      />
      <DrawerStack.Screen name={appRoutes.detail} component={DetailPage} />
      <DrawerStack.Screen name={appRoutes.ourGovernment} component={OurGovt} />
      <DrawerStack.Screen name={appRoutes.events} component={Events} />
      <DrawerStack.Screen name={appRoutes.gallery} component={PhotoGallery} />
      <DrawerStack.Screen name={appRoutes.listOfCms} component={ListOfCm} />
      <DrawerStack.Screen name={appRoutes.writeToCm} component={WriteToCm} />
      <DrawerStack.Screen name={appRoutes.feedBack} component={FeedBack} />
      <DrawerStack.Screen name={appRoutes.awards} component={Awards} />
      <DrawerStack.Screen
        name={appRoutes.cmReliefFund}
        component={CmReliefFund}
      />
      <DrawerStack.Screen name={appRoutes.cmQuotes} component={CmQuotes} />
      <DrawerStack.Screen
        name={appRoutes.pressRelease}
        component={PressRelease}
      />
      <DrawerStack.Screen name={appRoutes.megaEvents} component={MegaEvents} />
      <DrawerStack.Screen name={appRoutes.cmSpeeches} component={CmSpeeches} />
      <DrawerStack.Screen
        name={appRoutes.galleryDetail}
        component={GalleryDetail}
      />
      <DrawerStack.Screen name={appRoutes.photoBooth} component={PhotoBooth} />
      <DrawerStack.Screen
        name={appRoutes.privacyPolicy}
        component={PrivacyPolicy}
      />
      <DrawerStack.Screen
        name={appRoutes.termsCondition}
        component={TermsCondition}
      />
      <DrawerStack.Screen name={appRoutes.cmEvent} component={CmEvents} />
      <DrawerStack.Screen name={appRoutes.aboutApp} component={AboutApp} />
    </DrawerStack.Navigator>
  );
};
export default Drawer;
