import React, {useCallback} from 'react';

import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {DARK_BG_1, LIGHT_BG_1, LIGHT_GRAPHIC_RED_1} from 'src/variables';

type TabbarProps = {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
};
export function TabBar(props: TabbarProps) {
  const {index, routeNames} = props.state;
  const insets = useSafeAreaInsets();
  const onPressTab = useCallback(
    (route: string) => {
      props.navigation.navigate(route);
    },
    [props.navigation],
  );

  return (
    <View style={[styles.wrapper, {paddingBottom: insets.bottom}]}>
      {routeNames.map((item, i) => (
        <TouchableOpacity onPress={() => onPressTab(item)} key={item}>
          <View style={styles.tabBarItem}>
            <Text
              style={{color: index === i ? LIGHT_GRAPHIC_RED_1 : DARK_BG_1}}>
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 70,
    backgroundColor: LIGHT_BG_1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarItem: {
    marginTop: 5,
    height: 50,
    justifyContent: 'center',
  },
});
