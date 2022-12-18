import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigator} from 'src/navigator';
import {FirstScreen} from 'src/screens/first-screen';
import {Home} from 'src/screens/home';
import {RootStackParamList} from 'src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export function App() {
  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator screenOptions={basicScreenOptions}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="firstScreen" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
