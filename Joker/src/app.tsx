import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigator} from 'src/navigator';
import {AuthScreen} from 'src/screens/Auth';
import {AuthSuccessScreen} from 'src/screens/AuthSuccess';
import {CreateTaskCompleteScreen} from 'src/screens/CreateTaskComplete';
import {CreateTaskConfirmationScreen} from 'src/screens/CreateTaskConfirmation';
import {CreateTaskIssueSelectScreen} from 'src/screens/CreateTaskIssueSelect';
import {CreateTaskRepoSelectScreen} from 'src/screens/CreateTaskRepoSelect';
import {Home} from 'src/screens/home';
import NftTestsScreen from 'src/screens/TestsNft';
import {WelcomeScreen} from 'src/screens/Welcome';
import {RootStackParamList} from 'src/types';

import {ProfileScreen} from './screens/Profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const authGroupScreenOptions = {
  headerShown: false,
  gestureEnabled: true,
};

const groupScreenOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export function App() {
  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={basicScreenOptions}>
        <Stack.Group screenOptions={authGroupScreenOptions}>
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="authentication" component={AuthScreen} />
          <Stack.Screen
            name="authenticationSuccess"
            component={AuthSuccessScreen}
          />
        </Stack.Group>
        <Stack.Screen name="home" component={Home} />
        <Stack.Group screenOptions={groupScreenOptions}>
          <Stack.Screen
            name="createTaskRepoSelect"
            component={CreateTaskRepoSelectScreen}
          />
          <Stack.Screen
            name="createTaskIssueSelect"
            component={CreateTaskIssueSelectScreen}
          />
          <Stack.Screen
            name="createTaskConfirmation"
            component={CreateTaskConfirmationScreen}
          />
          <Stack.Screen
            name="createTaskComplete"
            component={CreateTaskCompleteScreen}
          />
          <Stack.Screen name="profile" component={ProfileScreen} />
        </Stack.Group>
        <Stack.Screen name="devTests" component={NftTestsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
