import {
  RootBottomTabParamList,
  RootStackParamList,
  RootTopTabParamList
} from '../../../types'
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'

export type TsScreenT = {
  navigation: CompositeNavigationProp<
    MaterialTopTabNavigationProp<RootTopTabParamList, 'TS_SCREEN'>,
    CompositeNavigationProp<
      BottomTabNavigationProp<RootBottomTabParamList>,
      NativeStackNavigationProp<RootStackParamList>
    >
  >
  route: RouteProp<RootTopTabParamList, 'TS_SCREEN'>
}
