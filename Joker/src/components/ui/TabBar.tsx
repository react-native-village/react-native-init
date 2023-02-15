import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vs} from 'react-native-size-matters';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Tab} from './Tab';

export function TabBar({state, navigation}: BottomTabBarProps) {
  const {index, routes} = state;
  const {bottom: paddingBottom} = useSafeAreaInsets();
  const {styles} = useThematicStyles(rawStyles);
  const handlePress = (name: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate('home', {
        screen: name,
        merge: true,
      });
    }
  };

  return (
    <View style={[styles.tabContainer, {paddingBottom}]}>
      {routes.map(({name, key}, id) => {
        const isFocused = index === id;
        return (
          <Tab
            isFocused={isFocused}
            key={key}
            onPress={() => handlePress(name, isFocused)}
            tabId={id}
          />
        );
      })}
    </View>
  );
}

const rawStyles = StyleSheet.create({
  tabContainer: {
    paddingTop: vs(5),
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: Color.graphicSecond1,
    backgroundColor: Color.bg1,
  },
});
