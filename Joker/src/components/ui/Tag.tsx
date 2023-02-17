import React from 'react';

import {StyleSheet, View} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from '.';

interface TagT {
  name: string;
  withMarginLeft?: boolean;
}
export function Tag({name, withMarginLeft}: TagT) {
  const {styles, colors} = useThematicStyles(rawStyles);

  return (
    <View
      style={[
        styles.container,
        {borderColor: colors.primary},
        withMarginLeft && styles.marginLeft,
      ]}>
      <Text color={Color.primary} t18>
        {name}
      </Text>
    </View>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  marginLeft: {
    marginLeft: 5,
  },
});
