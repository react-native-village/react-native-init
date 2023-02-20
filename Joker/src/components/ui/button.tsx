import React from 'react';

import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from './text/text';

interface ButtonT {
  children: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
export function Button({children, style, onPress}: ButtonT) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, style]}>
      <Text t6>{children}</Text>
    </TouchableOpacity>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    // height: 55,
    padding: 14.58,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
