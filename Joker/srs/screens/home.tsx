import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import {HomeScreenTitle} from '../components/home-screen.title';
import {TabBar} from '../components/tab-bar';
import {TabScreen1} from './tab-screen1';
import {TabScreen2} from './tab-screen2';
import {TabScreen3} from './tab-screen3';
import {TabScreen4} from './tab-screen4';
import {TabScreen5} from './tab-screen5';

const Tab = createBottomTabNavigator<RootStackParamList>();

const screenOption = {
  title: 'lala',
};

export const screenOptions = ({
  route,
}: {
  route: RouteProp<RootStackParamList>;
  navigation: any;
}): BottomTabNavigationOptions => ({
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitle: () => <HomeScreenTitle route={route} />,
});

export function Home() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="tab1" component={TabScreen1} options={screenOption} />
      <Tab.Screen name="tab2" component={TabScreen2} options={screenOption} />
      <Tab.Screen name="tab3" component={TabScreen3} options={screenOption} />
      <Tab.Screen name="tab4" component={TabScreen4} options={screenOption} />
      <Tab.Screen name="tab5" component={TabScreen5} options={screenOption} />
    </Tab.Navigator>
  );
}
