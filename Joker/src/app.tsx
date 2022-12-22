import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import {navigator} from 'src/navigator';
import {FirstScreen} from 'src/screens/first-screen';
import {Home} from 'src/screens/home';
import {RootStackParamList} from 'src/types';

import ThemeContext from './contexts/ThemeContext';
import {app} from './services';
import {DarkTheme, LightTheme} from './themes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

type TypeScheme = 'system' | 'custom';
type TypeTheme = 'light' | 'dark';

export function App() {
  const takeScheme = useColorScheme();
  const [scheme, setScheme] = useState<TypeScheme>('system');
  const [customTheme, setCustomTheme] = useState<TypeTheme>('dark');
  const theme = () => {
    if (scheme === 'system')
      if (takeScheme === 'dark') return DarkTheme;
      else return LightTheme;
    else {
      if (customTheme === 'dark') return DarkTheme;
      else return LightTheme;
    }
  };
  useEffect(() => {
    const toggleCustomTheme = (type: TypeTheme) => {
      setCustomTheme(type);
    };
    const toggleTypeScheme = (type: TypeScheme) => {
      setScheme(type);
    };

    app.on('toggleTheme', toggleCustomTheme);
    app.on('toggleTypeScheme', toggleTypeScheme);
    return () => {
      app.off('toggleTheme', toggleCustomTheme);
      app.off('toggleTypeScheme', toggleTypeScheme);
    };
  }, []);
  return (
    <ThemeContext.Provider value={theme()}>
      <NavigationContainer ref={navigator}>
        <Stack.Navigator screenOptions={basicScreenOptions}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="firstScreen" component={FirstScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
