import {
  RootBottomTabParamList,
  RootStackParamList,
  RootTopTabParamList
} from '../../../types'
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'

export type AwsScreenT = {
  navigation: CompositeNavigationProp<
    MaterialTopTabNavigationProp<RootTopTabParamList, 'AWS_SCREEN'>,
    CompositeNavigationProp<
      BottomTabNavigationProp<RootBottomTabParamList>,
      NativeStackNavigationProp<RootStackParamList>
    >
  >
  route: RouteProp<RootTopTabParamList, 'AWS_SCREEN'>
}
