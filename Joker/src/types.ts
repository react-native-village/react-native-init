import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type TabParamList = {
  homeOwnTickets: undefined;
  homeProfile: undefined;
  homeTicketsMarketplace: undefined;
  homeSearch: undefined;
};
export type RootStackParamList = {
  home?: NavigatorScreenParams<TabParamList>;
  welcome: undefined;
};

export interface ScreenOptionType extends StackNavigationOptions {
  tab?: boolean;
  headerBackVisible?: boolean;
  headerBackHidden?: boolean | string;
}

export type FontT = TextStyle | ViewStyle | ImageStyle | undefined;

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
