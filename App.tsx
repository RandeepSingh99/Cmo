import * as React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import {appRoutes} from './src/utils/constants/routeNames';
import {appColors} from './src/utils/constants/colors';
import Drawer from './src/drawer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar backgroundColor={appColors.white} barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={appRoutes.splash}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={appRoutes.splash} component={Splash} />
          <Stack.Screen name={appRoutes.drawer} component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  app: {flex: 1},
});
