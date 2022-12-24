import React, {createContext, memo, useEffect, useMemo, useState} from 'react';

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
  const themeHook = useColorScheme();
  const themeResult = useMemo(() => {
    if (themeHook === DARK_THEME_ID) return DARK_THEME;
    else return LIGHT_THEME;
  }, [themeHook]);
  const [theme, setTheme] = useState<Theme>(/*props.initial*/ themeResult);
  const [systemTheme, setSystemTheme] = useState<boolean>(true);

  const onLightTheme = () => {
    setTheme(LIGHT_THEME);
    setSystemTheme(false);
  };
  const onDarkTheme = () => {
    setTheme(DARK_THEME);
    setSystemTheme(false);
  };
  const onSystemTheme = () => setSystemTheme(true);

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      lightTheme: onLightTheme,
      darkTheme: onDarkTheme,
      systemTheme: onSystemTheme,
    };
    return value;
  }, [theme, systemTheme]);

  useEffect(() => {
    systemTheme && setTheme(themeResult);
  }, [systemTheme, themeResult]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});
