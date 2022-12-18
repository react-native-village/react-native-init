import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList} from '../types';

export function useTypedRoute<T extends keyof RootStackParamList>() {
  return useRoute<RouteProp<RootStackParamList, T>>();
}