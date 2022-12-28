import React, {useMemo} from 'react';

import {StyleSheet, View, ViewProps} from 'react-native';

export type SpacerProps = ViewProps & {height?: number; width?: number};

export function Spacer({
  children,
  style,
  height,
  width,
  ...props
}: SpacerProps) {
  const container = useMemo(() => {
    const hasSizeProp = !!height || !!width;
    return [hasSizeProp ? {height, width} : styles.flexOne, style].filter(
      Boolean,
    );
  }, [style, height, width]);

  return (
    <View style={container} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  flexOne: {flex: 1},
});
