import React from 'react';
import {Text} from 'react-native';
import { useTypedRoute } from 'src/hooks/use-typed-route';


export function HomeScreenTitle() {
  const route = useTypedRoute()
  return <Text>{route.name}</Text>;
}
