import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList} from 'src/types';

export function useTypedRoute<T extends keyof RootStackParamList>() {
  return useRoute<RouteProp<RootStackParamList, T>>();
}
