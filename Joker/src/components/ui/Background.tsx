import React from 'react';

import {View} from 'react-native';

import {useTheme} from 'src/hooks';

interface BackgroundPros {
  style?: object;
  children?: React.ReactNode;
  center?: boolean;
}

export function Background({style, center, children}: BackgroundPros) {
  const {color} = useTheme();
  return (
    <View
      style={[
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        center && {alignItems: 'center'},
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flex: 1,
          backgroundColor: color.bg1,
          justifyContent: 'center',
        },
      ]}>
      {children}
    </View>
  );
}
