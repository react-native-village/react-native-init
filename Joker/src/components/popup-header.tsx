import React, {useEffect, useMemo} from 'react';

import {NavigationAction} from '@react-navigation/routers';
import {StackHeaderProps} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Icon, IconButton, Text} from 'src/components/ui';
import {useTheme} from 'src/hooks';
import {ScreenOptionType} from 'src/types';
import {DEFAULT_HITSLOP} from 'src/variables';

type PopupHeaderProps = StackHeaderProps & {
  options: ScreenOptionType;
};

export function PopupHeader({options, back, navigation}: PopupHeaderProps) {
  const {color} = useTheme().theme;
  const insets = useSafeAreaInsets();

  const canGoBack = useMemo(
    () => back && !options.headerBackHidden,
    [back, options.headerBackHidden],
  );

  useEffect(() => {
    const subscription = (e: {
      preventDefault: () => void;
      data: {action: NavigationAction};
    }) => {
      if (!canGoBack && !e.data.action.source) {
        e.preventDefault();
      }
    };

    navigation.addListener('beforeRemove', subscription);

    return () => {
      navigation.removeListener('beforeRemove', subscription);
    };
  }, [canGoBack, navigation]);

  return (
    <View style={[page.container, options.tab && {marginTop: insets.top}]}>
      {canGoBack ? (
        <IconButton onPress={navigation.goBack} hitSlop={DEFAULT_HITSLOP}>
          <Icon i24 name="arrow_back" color={color.graphicBase1} />
        </IconButton>
      ) : (
        <View style={page.spacer} />
      )}
      <Text t8 center color={color.textBase1}>
        {options.title}
      </Text>
      {options.headerRight ? (
        options.headerRight({})
      ) : (
        <View style={page.spacer} />
      )}
    </View>
  );
}

const page = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: 56,
    flexDirection: 'row',
    zIndex: 1,
  },
  spacer: {
    width: 24,
    height: 24,
  },
});
