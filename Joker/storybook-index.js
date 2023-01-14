/**
 * @format
 */
import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import StoryBookApp from './App';
import {name as appName} from './app.json';

SplashScreen.hide();
AppRegistry.registerComponent(appName, () => StoryBookApp);
