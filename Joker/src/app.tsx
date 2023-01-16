import React from 'react';

import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import {useTheme} from 'src/hooks';
import {navigator} from 'src/navigator';
import {AuthScreen} from 'src/screens/Auth';
import {AuthSuccessScreen} from 'src/screens/AuthSuccess';
import {CreateTaskIssueSelectScreen} from 'src/screens/CreateTaskIssueSelect';
import {CreateTaskRepoSelectScreen} from 'src/screens/CreateTaskRepoSelect';
import {Home} from 'src/screens/Home';
import {WelcomeScreen} from 'src/screens/Welcome';
import {RootStackParamList} from 'src/types';

import {DevTestsScreen} from './screens/DevTests';

const Stack = createNativeStackNavigator<RootStackParamList>();

const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const authGroupScreenOptions = {
  headerShown: true,
  gestureEnabled: true,
};

const groupScreenOptions = {
  headerShown: true,
  gestureEnabled: true,
};

export function App() {
  const {
    theme: {color},
  } = useTheme();
  const isDark = useColorScheme() === 'dark';
  const theme: Theme = {
    dark: isDark,
    colors: {
      ...DefaultTheme.colors,
      background: color.bg1,
      card: color.bg1,
      text: color.textBase1,
    },
  };
  return (
    <NavigationContainer theme={theme} ref={navigator}>
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
        </Stack.Group>
        <Stack.Screen name="devTests" component={DevTestsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
