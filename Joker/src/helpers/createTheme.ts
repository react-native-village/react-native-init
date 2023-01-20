import {Color, NamedStyles, ThemeColors} from 'src/themeTypes';

export function createTheme<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
  colors: ThemeColors,
): T {
  const style: any = {};
  const keys = Object.keys(styles);
  const styled = Object.keys(colors);

  keys.forEach(key => {
    // @ts-ignore
    style[key] = Object.entries(styles[key]).reduce((memo, [prop, value]) => {
      return {
        ...memo,
        [prop]: styled.includes(value as string)
          ? colors[value as Color]
          : value,
      };
    }, {});
  });

  return style as T;
}
