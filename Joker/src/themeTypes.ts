import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface ThemeColors {
  primary: string;
  primary1: string;
  // MESSAGE MEANING
  textRed1: string;
  opacityRed1: string;
  textBlue1: string;
  opacityBlue1: string;
  textYellow1: string;
  opacityYellow1: string;

  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;

  grayStroke: string;
  card: string;

  textBase1: string;
  textBase2: string;
  textBase3: string;

  textSecond1: string;
  textSecond2: string;

  graphicBase1: string;
  graphicBase2: string;
  graphicBase3: string;
  graphicSecond1: string;
  graphicSecond2: string;
  graphicSecond3: string;
  graphicSecond4: string;
}

export interface ThemeDictionaryType {
  [key: string]: ThemeColors;
}

export type SomeStyle = ViewStyle | TextStyle | ImageStyle;
export type NamedStyles<T> = {
  [P in keyof T]: SomeStyle;
};

export enum Color {
  primary = 'primary',
  primary1 = 'primary1',

  textBlue1 = 'textBlue1',
  opacityBlue1 = 'opacityBlue1',
  textRed1 = 'textRed1',
  opacityRed1 = 'opacityRed1',
  textYellow1 = 'textYellow1',
  opacityYellow1 = 'opacityYellow1',

  bg1 = 'bg1',
  bg2 = 'bg2',
  bg3 = 'bg3',
  bg4 = 'bg4',

  grayStroke = 'grayStroke',
  card = 'card',

  textBase1 = 'textBase1',
  textBase2 = 'textBase2',
  textBase3 = 'textBase3',

  textSecond1 = 'textSecond1',
  textSecond2 = 'textSecond2',

  graphicBase1 = 'graphicBase1',
  graphicBase2 = 'graphicBase2',
  graphicBase3 = 'graphicBase3',

  graphicSecond1 = 'graphicSecond1',
  graphicSecond2 = 'graphicSecond2',
  graphicSecond3 = 'graphicSecond3',
  graphicSecond4 = 'graphicSecond4',
}
