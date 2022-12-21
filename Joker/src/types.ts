import {NavigatorScreenParams} from '@react-navigation/native';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {Color} from 'src/colors';

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
export type ColorType = Color | string;
