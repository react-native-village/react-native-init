import React, {
  createContext,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';

import {useColorScheme} from 'react-native';

import {DARK_THEME, DARK_THEME_ID, LIGHT_THEME, Theme} from 'src/themes';

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
  const sysTheme = useColorScheme();
  const sysThemeResult = () => {
    if (sysTheme === DARK_THEME_ID) return DARK_THEME;
    else return LIGHT_THEME;
  };
  const [theme, setTheme] = useState<Theme>(/*props.initial*/ sysThemeResult);

  const LightTheme = () => setTheme(LIGHT_THEME);
  const DarkTheme = () => setTheme(DARK_THEME);
  const SystemTheme = useCallback(() => {
    setTheme(sysThemeResult);
  }, [sysTheme]);
  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      lightTheme: LightTheme,
      darkTheme: DarkTheme,
      systemTheme: SystemTheme,
    };
    return value;
  }, [theme, SystemTheme]);
  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});
