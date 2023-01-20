import React, {createContext, memo, useEffect, useMemo, useState} from 'react';

import {useColorScheme} from 'react-native';

import {DARK_THEME, LIGHT_THEME} from 'src/themes';
import {ThemeColors} from 'src/themeTypes';

interface ProvidedValue {
  colors: ThemeColors;
  toggleLight: () => void;
  toggleDark: () => void;
  toggleSystem: () => void;
}

export const ThemeContext = createContext<ProvidedValue>({
  colors: LIGHT_THEME,
  toggleLight: () => {},
  toggleDark: () => {},
  toggleSystem: () => {},
});

interface Props {
  initial?: ThemeColors;
  children?: React.ReactNode;
}

export const ThemeProvider = memo<Props>(props => {
  const systemTheme = useColorScheme() === 'dark' ? DARK_THEME : LIGHT_THEME;
  const [colors, setColor] = useState<ThemeColors>(
    /*props.initial*/ systemTheme,
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
      colors,
      toggleLight: onLightTheme,
      toggleDark: onDarkTheme,
      toggleSystem: onSystemTheme,
    };
    return value;
  }, [colors, isSystemTheme]);

  useEffect(() => {
    isSystemTheme && setColor(systemTheme);
  }, [isSystemTheme, systemTheme]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});
