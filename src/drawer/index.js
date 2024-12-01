import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import {appRoutes} from '../utils/constants/routeNames';
import {scaledValue} from '../utils/designUtils';
import CustomDrawerContent from './component/CustomDrawer';

const DrawerStack = createDrawerNavigator();

const Drawer = (props) => {
  return (
    <DrawerStack.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: scaledValue(351),
          borderRadius: 0,
        },
        drawerPosition: 'right',
      }}>
      <DrawerStack.Screen name={appRoutes.home} component={Home} />
    </DrawerStack.Navigator>
  );
};
export default Drawer;
