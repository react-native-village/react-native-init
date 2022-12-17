import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from '../types';
import {Text} from 'react-native';

export type HomeScreenTitleProps = {
  route: RouteProp<RootStackParamList>;
};
export function HomeScreenTitle({route}: HomeScreenTitleProps) {
  return <Text>{route.name}</Text>;
}
