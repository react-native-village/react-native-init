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

export type ColorType = string;

export type FontT = TextStyle | ViewStyle | ImageStyle | undefined;
