import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types';

export const useTypedNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
