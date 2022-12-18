import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, TabParamList} from '../types';
import {HomeScreenTitle} from '../components/home-screen-title';
import {TabBar} from '../components/tab-bar';
import {TabScreen1} from './tab-screen1';
import {TabScreen2} from './tab-screen2';
import {TabScreen3} from './tab-screen3';
import {TabScreen4} from './tab-screen4';
import {TabScreen5} from './tab-screen5';

const Tab = createBottomTabNavigator<TabParamList>();



export const screenOptions = ({
}: {
  route: RouteProp<TabParamList>;
  navigation: any;
}): BottomTabNavigationOptions => ({
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitle: () => <HomeScreenTitle />,
});

export function Home() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="tab1" component={TabScreen1} options={screenOptions} />
      <Tab.Screen name="tab2" component={TabScreen2} options={screenOptions} />
      <Tab.Screen name="tab3" component={TabScreen3} options={screenOptions} />
      <Tab.Screen name="tab4" component={TabScreen4} options={screenOptions} />
      <Tab.Screen name="tab5" component={TabScreen5} options={screenOptions} />
    </Tab.Navigator>
  );
}
