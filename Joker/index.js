/**
 * @format
 */

import {STORYBOOK_ENABLED} from '@env';
import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import StoryBookApp from './App';
import {name as appName} from './app.json';

if (STORYBOOK_ENABLED === '1') {
  SplashScreen.hide();
  AppRegistry.registerComponent(appName, () => StoryBookApp);
} else {
  //require('./default-index');
}
