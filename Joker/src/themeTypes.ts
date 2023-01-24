import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface ThemeColors {
  textBase1: string;
  textBase2: string;
  textBase3: string;
  textSecond1: string;
  textSecond2: string;
  textGreen1: string;
  textRed1: string;
  textYellow1: string;
  textBlue1: string;
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  bg6: string;
  bg7: string;
  bg8: string;
  bg9: string;
  bg10: string;
  graphicBase1: string;
  graphicBase2: string;
  graphicBase3: string;
  graphicBlue1: string;
  graphicRed1: string;
  graphicGreen1: string;
  graphicGreen2: string;
  graphicSecond1: string;
  graphicSecond2: string;
  graphicSecond3: string;
  graphicSecond4: string;
  textAqua1: string;
}

export interface ThemeDictionaryType {
  [key: string]: ThemeColors;
}

export type SomeStyle = ViewStyle | TextStyle | ImageStyle;
export type NamedStyles<T> = {
  [P in keyof T]: SomeStyle;
};

export enum Color {
  textBase1 = 'textBase1',
  textBase2 = 'textBase2',
  textBase3 = 'textBase3',
  textSecond1 = 'textSecond1',
  textSecond2 = 'textSecond2',
  textGreen1 = 'textGreen1',
  textRed1 = 'textRed1',
  textYellow1 = 'textYellow1',
  textBlue1 = 'textBlue1',
  bg1 = 'bg1',
  bg2 = 'bg2',
  bg3 = 'bg3',
  bg4 = 'bg4',
  bg5 = 'bg5',
  bg6 = 'bg6',
  bg7 = 'bg7',
  bg8 = 'bg8',
  bg9 = 'bg9',
  bg10 = 'bg10',
  graphicBase1 = 'graphicBase1',
  graphicBase2 = 'graphicBase2',
  graphicBase3 = 'graphicBase3',
  graphicRed1 = 'graphicRed1',
  graphicGreen1 = 'graphicGreen1',
  graphicGreen2 = 'graphicGreen2',
  graphicSecond1 = 'graphicSecond1',
  graphicSecond2 = 'graphicSecond2',
  graphicSecond3 = 'graphicSecond3',
  graphicSecond4 = 'graphicSecond4',
}
