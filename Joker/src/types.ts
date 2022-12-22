import {NavigatorScreenParams} from '@react-navigation/native';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type TabParamList = {
  tab1: undefined;
  tab2: undefined;
  tab3: undefined;
  tab4: undefined;
  tab5: undefined;
};
export type RootStackParamList = {
  home: NavigatorScreenParams<TabParamList>;
  firstScreen: undefined;
};
export type FontT = TextStyle | ViewStyle | ImageStyle | undefined;
export type Theme = {
  transparent: string;
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
  graphicRed1: string;
  graphicGreen1: string;
  graphicGreen2: string;
  graphicSecond1: string;
  graphicSecond2: string;
  graphicSecond3: string;
  graphicSecond4: string;
};
