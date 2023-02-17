import React from 'react';

import {StyleSheet, View} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from '../ui';

interface TagT {
  children: string;
}
export function Tag({children}: TagT) {
  const {styles} = useThematicStyles(rawStyles);

  const small = children.length > 2;
  const color = small ? '#E16363' : '#0489D4';
  const circle = small ? 44 : 23;
  const max = small ? undefined : 15;
  return (
    <View style={[styles.container, {borderColor: color, width: circle}]}>
      <Text
        children={children}
        color={small ? Color.textRed1 : Color.textBlue1}
        t14
        style={{maxWidth: max}}
      />
    </View>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    height: 23,
    borderRadius: 11.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
