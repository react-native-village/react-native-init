// import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IS_IOS} from '../variables';

type TabbarProps = {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
};
export function TabBar(props: TabbarProps) {
  const tabRoutes = props.state.routeNames;
  const index = props.state.index;
  const insets = useSafeAreaInsets();
  const onPressTab = useCallback(
    (route: string) => {
      props.navigation.navigate(route);
    },
    [props.navigation],
  );

  return (
    <View style={[styles.wrapper, {paddingBottom: Math.max(insets.bottom)}]}>
      {tabRoutes.map((item, i) => (
        <TouchableOpacity onPress={() => onPressTab(item)} key={item}>
          <View style={styles.tabBarItem}>
            <Text style={{color: index === i ? 'red' : '#000'}}>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: IS_IOS ? 80 : 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarItem: {
    marginTop: IS_IOS ? 5 : 0,
    height: IS_IOS ? 50 : 30,
    justifyContent: 'center',
  },
});
