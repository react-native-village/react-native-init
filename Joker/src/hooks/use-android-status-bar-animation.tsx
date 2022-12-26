import {useCallback, useRef} from 'react';

import {Animated} from 'react-native';

import {LIGHT_BG_9, TRANSPARENT} from '../variables';

interface useAndroidStatusBarAnimationT {
  animatedValueRange: [number, number];
  duration?: number;
  animatedValueOutputRange?: [string, string];
}

export const useAndroidStatusBarAnimation = ({
  animatedValueRange,
  animatedValueOutputRange = [TRANSPARENT, LIGHT_BG_9],
  duration = 250,
}: useAndroidStatusBarAnimationT) => {
  const [startPoint, endPoint] = animatedValueRange;

  const statusBarAnim = useRef(new Animated.Value(startPoint)).current;

  const toDark = useCallback(() => {
    Animated.timing(statusBarAnim, {
      toValue: endPoint,
      duration,
      useNativeDriver: false,
    }).start();
  }, [statusBarAnim, endPoint, duration]);

  const toLight = useCallback(() => {
    Animated.timing(statusBarAnim, {
      toValue: startPoint,
      duration,
      useNativeDriver: false,
    }).start();
  }, [statusBarAnim, startPoint, duration]);

  const setBackgroundColor = (newVal: number) => {
    statusBarAnim.setValue(newVal);
  };

  const backgroundColor = statusBarAnim.interpolate({
    inputRange: animatedValueRange,
    outputRange: animatedValueOutputRange,
  });

  return {
    toDark,
    toLight,
    setBackgroundColor,
    backgroundColor,
  };
};
