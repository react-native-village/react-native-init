import React from 'react';

import {StyleSheet, ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Color} from 'src/themeTypes';

import {HeaderButton, HeaderButtonProps} from './header-button';

import {Text} from '../';

interface CustomHeaderProps {
  title?: string;
  iconLeft?: string;
  textLeft?: HeaderButtonProps['text'];
  /* i18nTextLeft?: HeaderButtonProps['i18n']; */
  onPressLeft?: HeaderButtonProps['onPress'];
  disabledLeft?: HeaderButtonProps['disabled'];
  colorLeft?: Color;
  iconRight?: string;
  textRight?: HeaderButtonProps['text'];
  /* i18nTextRight?: HeaderButtonProps['i18n']; */
  colorRight?: Color;
  onPressRight?: HeaderButtonProps['onPress'];
  disabledRight?: HeaderButtonProps['disabled'];
  style?: StyleProp<ViewStyle>;
}

export function CustomHeader({
  onPressLeft,
  onPressRight,
  disabledLeft,
  disabledRight,
  colorLeft,
  colorRight,
  iconLeft,
  iconRight,
  textLeft,
  textRight,
  title = undefined,
  style,
}: /* i18nTextRight,
  i18nTextLeft, */
CustomHeaderProps) {
  const {top} = useSafeAreaInsets();

  return (
    <Animated.View style={[styles.container, {paddingTop: 16 + top}, style]}>
      <HeaderButton
        onPress={onPressLeft}
        disabled={disabledLeft}
        iconColor={colorLeft}
        text={textLeft}
        icon={iconLeft}
        /* i18n={i18nTextLeft} */
      />
      <Text t8 center>
        {title}
      </Text>
      <HeaderButton
        onPress={onPressRight}
        disabled={disabledRight}
        iconColor={colorRight}
        text={textRight}
        icon={iconRight}
        /* i18n={i18nTextRight} */
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    paddingHorizontal: 22,
    flexDirection: 'row',
    zIndex: 1,
  },
});
