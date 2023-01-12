import React from 'react';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import {HomeScreenTitle} from 'src/components/home-screen-title';
import {TabBar} from 'src/components/tab-bar';
import {TabParamList} from 'src/types';

import {HomeProfileScreen} from './HomeProfile';
import {HomeSettingsScreen} from './HomeSettings';
import {HomeTaskExplorerScreen} from './HomeTaskExplorer';
// import {TabScreen4} from './tab-screen4';
// import {TabScreen5} from './tab-screen5';

const Tab = createBottomTabNavigator<TabParamList>();

export const screenOptions = ({}: {
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
      {/* <Tab.Screen name="tab4" component={TabScreen4} options={screenOptions} />
      <Tab.Screen name="tab5" component={TabScreen5} options={screenOptions} /> */}
    </Tab.Navigator>
  );
}
