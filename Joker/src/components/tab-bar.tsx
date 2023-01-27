import React, {useCallback} from 'react';

import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {ButtonPlus, Text} from './ui';

type TabBarProps = {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
};

const tabBarEmoji = ['👾', '💼', '🦄', '⚙️'];

export function TabBar(props: TabBarProps) {
  const {routeNames} = props.state;

  const insets = useSafeAreaInsets();
  const {styles} = useThematicStyles(rawStyles);

  if (!routeNames.includes('+')) routeNames.splice(2, 0, '+');

  const onPressTab = useCallback(
    (route: string) => {
      props.navigation.navigate(route);
    },
    [props.navigation],
  );

  const onPressPlus = () => {
    props.navigation.navigate('createTaskRepoSelect');
  };

  return (
    <View style={[styles.tabBarContainer, {paddingBottom: insets.bottom + 20}]}>
      <View style={styles.tabBar}>
        {routeNames.map((item, i) =>
          item === '+' ? (
            <View style={styles.tabBarItem}>
              <ButtonPlus onPress={onPressPlus} />
            </View>
          ) : (
            <TouchableOpacity onPress={() => onPressTab(item)} key={item}>
              <View style={styles.tabBarItem}>
                <Text t1>{tabBarEmoji[i]}</Text>
              </View>
            </TouchableOpacity>
          ),
        )}
      </View>
    </View>
  );
}

const rawStyles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    width: '100%',
    paddingBottom: 20,
    alignItems: 'center',
    bottom: 0,
  },
  tabBar: {
    borderRadius: 100,
    borderColor: Color.graphicBorder1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  tabBarItem: {
    paddingHorizontal: 12,
  },
});
