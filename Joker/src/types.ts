import {NavigatorScreenParams} from '@react-navigation/native';

// NAVIGATION

export type TabParamList = {
  homeOwnTickets: undefined;
  homeProfile: undefined;
  homeMarket: undefined;
  homeSearch: undefined;
};
export type RootStackParamList = {
  home?: NavigatorScreenParams<TabParamList>;
  welcome: undefined;
};

// INTERFACES

export interface TicketInfo {
  id: string;
  name: string;
  tags: string[];
  startData: string;
  endData: string;
  geoPosition: string;
  imageUrl: string;
  price?: number;
  currencySymbols?: string;
}

// UTILS

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
