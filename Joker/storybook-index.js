/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {name as appName} from './app.json';
import StoryBookApp from './StorybookApp';

SplashScreen.hide();
AppRegistry.registerComponent(appName, () => StoryBookApp);
AppRegistry.registerComponent(
  'overview',
  () =>
    function () {
      return <View />;
    },
);
