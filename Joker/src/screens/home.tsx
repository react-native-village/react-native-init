import React from 'react';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import {TabBar} from 'src/components/ui';
import {TabParamList} from 'src/types';

import {MarketScreen} from './marketScreen';
import {ProfileScreen} from './profileScreen';
import {TicketsScreen} from './ticketsScreen';

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
        name="homeMarket"
        component={MarketScreen}
        options={screenOptions}
      />
      <Tab.Screen
        name="homeTickets"
        component={TicketsScreen}
        options={screenOptions}
      />
      <Tab.Screen
        name="homeProfile"
        component={ProfileScreen}
        options={screenOptions}
      />
    </Tab.Navigator>
  );
}
