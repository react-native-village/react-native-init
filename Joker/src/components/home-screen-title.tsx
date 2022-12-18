import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from '../types';
import {Text} from 'react-native';
import { useTypedRoute } from 'src/hooks/use-typed-route';


export function HomeScreenTitle() {
  const route = useTypedRoute()
  console.log(route)
  return <Text>{route.name}</Text>;
}
