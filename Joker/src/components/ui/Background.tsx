import React from 'react';

import {StyleSheet, View, ViewProps} from 'react-native';

import {useThematicStyles} from 'src/hooks/useThematicStyles';
import {Color} from 'src/themeTypes';

import {BackgroundSymbols} from './svg';

interface BackgroundPros extends ViewProps {
  centered?: boolean;
  bgImg?: 'symbols-light' | 'symbols-dark';
}

const BgImages = {
  'symbols-light': () => (
    <BackgroundSymbols style={rawStyles.bgImage} color={gray} />
  ),
  'symbols-dark': () => <BackgroundSymbols style={rawStyles.bgImage} />,
};

export function Background({
  style,
  bgImg,
  centered,
  children,
  ...restProps
}: BackgroundPros) {
  const {styles} = useThematicStyles(rawStyles);

  if (bgImg) {
    return (
      <View
        {...restProps}
        style={[centered && styles.centered, styles.container, style]}>
        {BgImages[bgImg]()}
        {children}
      </View>
    );
  }
  return (
    <View
      {...restProps}
      style={[centered && styles.centered, styles.container, style]}
    />
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg1,
    justifyContent: 'center',
  },
  centered: {
    alignItems: 'center',
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
  },
});
