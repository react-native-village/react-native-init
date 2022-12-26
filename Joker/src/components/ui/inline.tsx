import React, {useMemo} from 'react';

import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

export type InlineProps = {
  gap: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
export function Inline({gap, children, style = {}}: InlineProps) {
  const container = useMemo(() => {
    const {margin, marginHorizontal, marginLeft, marginRight, ...s} =
      StyleSheet.flatten(style);

    return [
      styles.container,
      s,
      {
        marginLeft:
          Number(margin || marginHorizontal || marginLeft || 0) - gap * 0.5,
      },
      {
        marginRight:
          Number(margin || marginHorizontal || marginRight || 0) - gap * 0.5,
      },
    ];
  }, [gap, style]);

  const childrenList = React.Children.toArray(children).filter(el => !!el);
  return (
    <View style={container}>
      {React.Children.map(
        childrenList,
        child =>
          child &&
          // @ts-ignore
          React.cloneElement(child, {
            // @ts-ignore
            style: StyleSheet.compose('props' in child && child?.props?.style, {
              marginHorizontal: gap * 0.5,
              flex: 1,
            }),
          }),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
