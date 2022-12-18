import {AppRegistry} from 'react-native';

<<<<<<< HEAD
import {App} from './src/app';
=======
import {AppWithProviders} from 'src/app-with-providers';

>>>>>>> f8dc3bfd7d9bf3e78611d67537a2cd9c3ae19f40
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWithProviders);
