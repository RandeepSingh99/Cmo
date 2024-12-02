import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import {appRoutes} from '../utils/constants/routeNames';
import {scaledValue} from '../utils/designUtils';
import CustomDrawerContent from './component/CustomDrawer';
import KeyOfficials from '../screens/KeyOfficials';
import Distribution from '../screens/Distribution';
import StateGovernment from '../screens/StateGovernment';
import SuccessStories from '../screens/SuccessStories';
import OurGovt from '../screens/OurGovt';
import Events from '../screens/Events';
import PhotoGallery from '../screens/PhotoGallery';
import ListOfCm from '../screens/ListOfFormerCm';
import WriteToCm from '../screens/WriteToCm';
import FeedBack from '../screens/FeedBack';

const DrawerStack = createDrawerNavigator();

const Drawer = props => {
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
        name={appRoutes.distribution}
        component={Distribution}
      />
      <DrawerStack.Screen
        name={appRoutes.stateGovernment}
        component={StateGovernment}
      />
      <DrawerStack.Screen
        name={appRoutes.successStories}
        component={SuccessStories}
      />
      <DrawerStack.Screen name={appRoutes.ourGovernment} component={OurGovt} />
      <DrawerStack.Screen name={appRoutes.events} component={Events} />
      <DrawerStack.Screen name={appRoutes.gallery} component={PhotoGallery} />
      <DrawerStack.Screen name={appRoutes.listOfCms} component={ListOfCm} />
      <DrawerStack.Screen name={appRoutes.writeToCm} component={WriteToCm} />
      <DrawerStack.Screen name={appRoutes.feedBack} component={FeedBack} />
      
    </DrawerStack.Navigator>
  );
};
export default Drawer;
