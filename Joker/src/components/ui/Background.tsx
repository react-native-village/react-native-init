import React from 'react';

import {StyleSheet, View, ViewProps /* , useColorScheme */} from 'react-native';

import {useThematicStyles} from 'src/hooks/useThematicStyles';
import {Color} from 'src/themeTypes';

interface BackgroundPros extends ViewProps {
  centered?: boolean;
  bgImg?: 'symbols';
}

// const BgImages = {
// 'symbols-light': () => (
//   <BackgroundSymbols style={rawStyles.bgImage} color={'gray'} />
// ),
// 'symbols-dark': () => <BackgroundSymbols style={rawStyles.bgImage} />,
// };

export function Background({
  style,
  bgImg,
  centered,
  children,
  ...restProps
}: BackgroundPros) {
  const {styles} = useThematicStyles(rawStyles);
  // const scheme = useColorScheme();
  // const bg = ('symbols-' + scheme) as keyof typeof BgImages;

  if (bgImg) {
    return (
      <View
        {...restProps}
        style={[centered && styles.centered, styles.container, style]}>
        {/* {BgImages[bg]()} */}
        {children}
      </View>
    );
  }
  return (
    <View
      {...restProps}
      style={[centered && styles.centered, styles.container, style]}>
      {children}
    </View>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
  },
});
