import {AppRegistry} from 'react-native';

import '@ethersproject/shims';
import '@walletconnect/react-native-compat';
import {AppWithProviders} from 'src/app-with-providers';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWithProviders);
