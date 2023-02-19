import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

import {navigator} from 'src/navigator';
import {Home} from 'src/screens/home';
import {WelcomeScreen} from 'src/screens/Welcome';
import {RootStackParamList} from 'src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};
export function App() {
  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={basicScreenOptions}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
