import {useMemo} from 'react';

import {ColorTheme} from 'src/types';

import {useTheme} from './useTheme';

type Generator<T extends {}> = (color: ColorTheme) => T;

export const useThemeObject = <T extends {}>(fn: Generator<T>) => {
  const {color} = useTheme().theme;
  const ThemeObject = useMemo(() => fn(color), [fn, color]);
  return ThemeObject;
};
