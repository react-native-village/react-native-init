import React, {useCallback, useEffect} from 'react';

import {
  Pressable,
  Animated as RNAnimated,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  WithTimingConfig,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {useAndroidStatusBarAnimation, useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {ANIMATION_DURATION, ANIMATION_TYPE} from 'src/variables';

const timingOutAnimationConfig: WithTimingConfig = {
  duration: ANIMATION_DURATION,
  easing: ANIMATION_TYPE,
};

const timingInAnimationConfig: WithTimingConfig = {
  duration: ANIMATION_DURATION,
  easing: ANIMATION_TYPE,
};

const AnimatedStatusBar = RNAnimated.createAnimatedComponent(StatusBar);

interface BottomPopupContainerProps {
  children: (handleClose: (onEnd?: () => void) => void) => JSX.Element;
  transparent?: boolean;
  onPressOutContent?: () => void;
  closeOnPressOut?: boolean;
}

export function BottomPopupContainer({
  children,
  transparent,
  onPressOutContent,
  closeOnPressOut,
}: BottomPopupContainerProps) {
  const {height: H} = useWindowDimensions();
  const {styles} = useThematicStyles(rawStyles);
  const fullyOpen = 0;
  const fullyClosed = H * 0.85;
  const {toDark, toLight, backgroundColor} = useAndroidStatusBarAnimation({
    animatedValueRange: [fullyOpen, fullyClosed],
  });
  const fadeAnim = useSharedValue(fullyClosed);

  const fadeOut = useCallback(
    (endCallback?: () => void) => {
      const onEnd = () => endCallback?.();
      toLight();
      fadeAnim.value = withTiming(fullyClosed, timingOutAnimationConfig, () =>
        runOnJS(onEnd)(),
      );
    },
    [fullyClosed, fadeAnim, toLight],
  );

  useEffect(() => {
    toDark();
    fadeAnim.value = withTiming(fullyOpen, timingInAnimationConfig);
  }, [fadeAnim, toDark]);

  const bgAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(fadeAnim.value, [fullyOpen, fullyClosed], [1, 0]),
  }));

  const slideFromBottomAnimation = useAnimatedStyle(() => ({
    transform: [{translateY: fadeAnim.value}],
  }));

  const handlePressOut = () => {
    closeOnPressOut && fadeOut(onPressOutContent);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.fullFill, bgAnimation, !transparent && styles.bgColor]}
      />
      <AnimatedStatusBar backgroundColor={backgroundColor} />
      <Animated.View style={[styles.fullFill, bgAnimation]} />
      <Animated.View style={[styles.animateViewFade, slideFromBottomAnimation]}>
        <Pressable style={styles.fullFill} onPress={handlePressOut} />
        {children(fadeOut)}
      </Animated.View>
    </View>
  );
}
const rawStyles = StyleSheet.create({
  container: {flex: 1},
  fullFill: {
    ...StyleSheet.absoluteFillObject,
  },
  bgColor: {
    backgroundColor: Color.bg4,
  },
  animateViewFade: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
