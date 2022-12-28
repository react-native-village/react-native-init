import React from 'react';

import {ColorValue, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HeaderButton, HeaderButtonProps} from './header-button';

import {Text} from '../text';

interface CustomHeaderProps {
  title?: string;
  iconLeft?: HeaderButtonProps['icon'];
  textLeft?: HeaderButtonProps['text'];
  /* i18nTextLeft?: HeaderButtonProps['i18n']; */
  onPressLeft?: HeaderButtonProps['onPress'];
  disabledLeft?: HeaderButtonProps['disabled'];
  colorLeft?: ColorValue;
  iconRight?: HeaderButtonProps['icon'];
  textRight?: HeaderButtonProps['text'];
  /* i18nTextRight?: HeaderButtonProps['i18n']; */
  colorRight?: ColorValue;
  onPressRight?: HeaderButtonProps['onPress'];
  disabledRight?: HeaderButtonProps['disabled'];
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
}: /* i18nTextRight,
  i18nTextLeft, */
CustomHeaderProps) {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {marginTop: top}]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 22,
    height: 56,
    flexDirection: 'row',
    zIndex: 1,
  },
});
