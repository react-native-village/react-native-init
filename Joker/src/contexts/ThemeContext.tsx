import React, {createContext, memo, useEffect, useMemo, useState} from 'react';

import {useColorScheme} from 'react-native';

import {DARK_THEME, DARK_THEME_ID, LIGHT_THEME} from 'src/themes';
import {Theme} from 'src/types';

interface ProvidedValue {
  theme: Theme;
  lightTheme: () => void;
  darkTheme: () => void;
  systemTheme: () => void;
}

export const ThemeContext = createContext<ProvidedValue>({
  theme: LIGHT_THEME,
  lightTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
  darkTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
  systemTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

interface Props {
  initial?: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = memo<Props>(props => {
  const systemThemeHook =
    useColorScheme() === DARK_THEME_ID ? DARK_THEME : LIGHT_THEME;
  const [theme, setTheme] = useState<Theme>(/*props.initial*/ systemThemeHook);
  const [isSystemTheme, setIsSystemTheme] = useState<boolean>(true);

  const onLightTheme = () => {
    setTheme(LIGHT_THEME);
    setIsSystemTheme(false);
  };
  const onDarkTheme = () => {
    setTheme(DARK_THEME);
    setIsSystemTheme(false);
  };
  const onSystemTheme = () => setIsSystemTheme(true);

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      lightTheme: onLightTheme,
      darkTheme: onDarkTheme,
      systemTheme: onSystemTheme,
    };
    return value;
  }, [theme, isSystemTheme]);

  useEffect(() => {
    isSystemTheme && setTheme(systemThemeHook);
  }, [isSystemTheme, systemThemeHook]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});
