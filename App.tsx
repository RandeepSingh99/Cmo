// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import { appRoutes } from './src/utils/constants/routeNames';
import { appColors } from './src/utils/constants/colors';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.app} >
      <StatusBar backgroundColor={appColors.white} barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={appRoutes.splash} component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App
const styles = StyleSheet.create({
  app: { flex: 1 }
})
