import {useMemo} from 'react';

import {ColorTheme} from 'src/themes';

import {useTheme} from './use-theme';

type Generator<T extends {}> = (color: ColorTheme) => T;

export const useThemeObject = <T extends {}>(fn: Generator<T>) => {
  const {color} = useTheme().theme;
  const ThemeObject = useMemo(() => fn(color), [fn, color]);
  return ThemeObject;
};
