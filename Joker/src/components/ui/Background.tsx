import React from 'react';

import {StyleSheet, View, ViewProps} from 'react-native';

import {useThematicStyles} from 'src/hooks/useThematicStyles';
import {Color} from 'src/themeTypes';

interface BackgroundPros extends ViewProps {
  centered?: boolean;
}

export function Background({style, centered, ...restProps}: BackgroundPros) {
  const {styles} = useThematicStyles(rawStyles);
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
});
