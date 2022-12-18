import {AppRegistry} from 'react-native';

import {AppWithProviders} from 'src/app-with-providers';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWithProviders);
