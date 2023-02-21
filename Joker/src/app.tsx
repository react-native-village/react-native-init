import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigator} from 'src/navigator';
import {Home} from 'src/screens/home';
import {TicketDetailScreen} from 'src/screens/TicketDetail';
import {WelcomeScreen} from 'src/screens/Welcome';
import {RootStackParamList} from 'src/types';

import {SettingsScreen} from './screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const gestureEnabled = {
  gestureEnabled: true,
};

export function App() {
  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={basicScreenOptions}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="settings" component={SettingsScreen} />
        <Stack.Screen
          options={gestureEnabled}
          name="ticketDetail"
          component={TicketDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
