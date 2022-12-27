import React, {useCallback, useRef} from 'react';

import {useFocusEffect} from '@react-navigation/native';
import {Keyboard, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {KeyboardSafeAreaProps} from '.';

export function KeyboardSafeArea({
  children,
  style,
  isNumeric,
  ...props
}: KeyboardSafeAreaProps) {
  const {bottom} = useSafeAreaInsets();
  const paddingBottom = useSharedValue(0);
  const prevHeight = useRef(0);

  useFocusEffect(
    useCallback(() => {
      const keyboardWillShowSub = Keyboard.addListener(
        'keyboardDidShow',
        ({endCoordinates: {height}}) => {
          const newHeight = isNumeric
            ? Math.min(height, prevHeight.current)
            : Math.max(height, prevHeight.current);
          prevHeight.current = newHeight > 0 ? newHeight : height;
          paddingBottom.value = withTiming(prevHeight.current, {
            duration: 50,
          });
        },
      );
      const keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', () => {
        paddingBottom.value = withTiming(0, {duration: 70});
      });
      return () => {
        keyboardWillShowSub.remove();
        keyboardDidHideSub.remove();
        paddingBottom.value = 0;
      };
    }, [paddingBottom, isNumeric]),
  );

  const keyboardAnimatedStyle = useAnimatedStyle(
    () => ({
      paddingBottom: paddingBottom.value + bottom,
    }),
    [bottom],
  );

  return (
    <Animated.View
      style={[styles.container, style, keyboardAnimatedStyle]}
      {...props}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
