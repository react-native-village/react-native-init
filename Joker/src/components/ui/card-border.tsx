import React, {memo} from 'react';

import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {WINDOW_WIDTH} from '../../variables';

const styles = StyleSheet.create({
  containerBlue: {
    borderWidth: 1,
    paddingRight: 3,
    marginLeft: 5,
    paddingBottom: 3,
    flexDirection: 'row',
  },
  containerPink: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: WINDOW_WIDTH - 30,
    borderWidth: 1,
    marginLeft: -5,
    marginTop: 2,
  },
});

interface CardBorderT {
  children?: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  border?: boolean;
}

const shadowColor = '#FF06F4';
const aquaShadow = '#62F5D4';

const CardBorder = memo<CardBorderT>(({children, viewStyle, border}) => {
  const {containerBlue, containerPink} = styles;
  const borderColor = border ? 'transparent' : shadowColor;
  return (
    <View style={[containerBlue, {borderColor: aquaShadow}, viewStyle]}>
      <View style={[containerPink, {borderColor}, viewStyle]}>{children}</View>
    </View>
  );
});

export {CardBorder};
