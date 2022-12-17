import React from 'react';
import {StatusBar} from 'react-native';
import {Modals} from './srs/screens/modals';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from './srs/types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigator} from './srs/navigator';
import {FirstScreen} from './srs/screens/first-screen';
import {Home} from './srs/screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();
const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer ref={navigator}>
        <Stack.Navigator screenOptions={basicScreenOptions}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="firstScreen" component={FirstScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Modals />
    </SafeAreaProvider>
  );
};

export default App;
