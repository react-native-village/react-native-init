import React from 'react';

import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import {navigator} from 'src/navigator';
import {FirstScreen} from 'src/screens/first-screen';
import {Home} from 'src/screens/home';
import {RootStackParamList} from 'src/types';

import {useTheme} from './hooks';
import {CreateTaskIssueSelectScreen} from './screens/CreateTaskIssueSelect';
import {CreateTaskRepoSelectScreen} from './screens/CreateTaskRepoSelect';

const Stack = createNativeStackNavigator<RootStackParamList>();

const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
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
      <Stack.Navigator screenOptions={basicScreenOptions}>
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
        <Stack.Screen name="firstScreen" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
