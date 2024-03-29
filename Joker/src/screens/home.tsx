import React from 'react';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import {TabBar} from 'src/components/tab-bar';
import {TabParamList} from 'src/types';

import {HomeProfileScreen} from './HomeProfile';
import {HomeSettingsScreen} from './HomeSettings';
import {HomeTaskExplorerScreen} from './HomeTaskExplorer';

const Tab = createBottomTabNavigator<TabParamList>();

export const screenOptions = ({}: {
  route: RouteProp<TabParamList>;
  navigation: any;
}): BottomTabNavigationOptions => ({
  headerShadowVisible: false,
});

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export function Home() {
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="homeTaskExplorer"
        component={HomeTaskExplorerScreen}
        options={screenOptions}
      />
      <Tab.Screen
        name="homeProfile"
        component={HomeProfileScreen}
        options={screenOptions}
      />
      <Tab.Screen
        name="homeSettings"
        component={HomeSettingsScreen}
        options={screenOptions}
      />
    </Tab.Navigator>
  );
}
