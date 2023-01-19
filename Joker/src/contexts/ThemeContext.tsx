import React, {createContext, memo, useEffect, useMemo, useState} from 'react';

import {useColorScheme} from 'react-native';

import {DARK_THEME, LIGHT_THEME} from 'src/themes';
import {ColorTheme} from 'src/types';

interface ProvidedValue {
  color: ColorTheme;
  lightTheme: () => void;
  darkTheme: () => void;
  systemTheme: () => void;
}

export const ThemeContext = createContext<ProvidedValue>({
  color: LIGHT_THEME,
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
  initial?: ColorTheme;
  children?: React.ReactNode;
}

export const ThemeProvider = memo<Props>(props => {
  const systemThemeHook =
    useColorScheme() === 'dark' ? DARK_THEME : LIGHT_THEME;
  const [color, setColor] = useState<ColorTheme>(
    /*props.initial*/ systemThemeHook,
  );
  const [isSystemTheme, setIsSystemTheme] = useState<boolean>(true);

  const onLightTheme = () => {
    setColor(LIGHT_THEME);
    setIsSystemTheme(false);
  };
  const onDarkTheme = () => {
    setColor(DARK_THEME);
    setIsSystemTheme(false);
  };
  const onSystemTheme = () => setIsSystemTheme(true);

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      color,
      lightTheme: onLightTheme,
      darkTheme: onDarkTheme,
      systemTheme: onSystemTheme,
    };
    return value;
  }, [color, isSystemTheme]);

  useEffect(() => {
    isSystemTheme && setColor(systemThemeHook);
  }, [isSystemTheme, systemThemeHook]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});
