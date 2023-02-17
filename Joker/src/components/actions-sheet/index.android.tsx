import React, {useEffect} from 'react';

import {Keyboard, StyleSheet, View, useWindowDimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  WithTimingConfig,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {ActionsSheetProps} from '.';

const timingOutAnimationConfig: WithTimingConfig = {
  duration: 550,
  easing: Easing.in(Easing.back()),
};

const timingInAnimationConfig: WithTimingConfig = {
  duration: 550,
  easing: Easing.out(Easing.back()),
};

export function ActionsSheet({
  onPressDiscard,
  onPressKeepEditing,
}: ActionsSheetProps) {
  const {height: H} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();
  const {styles} = useThematicStyles(rawStyles);

  const fullyOpen = 0;
  const fullyClosed = H * 0.45;

  const fadeAnim = useSharedValue(fullyClosed);

  const fadeOut = (endCallback?: () => void) => {
    const onEnd = () => endCallback?.();
    fadeAnim.value = withTiming(fullyClosed, timingOutAnimationConfig, () =>
      runOnJS(onEnd)(),
    );
  };

  useEffect(() => {
    Keyboard.dismiss();
    fadeAnim.value = withTiming(fullyOpen, timingInAnimationConfig);
  }, [fadeAnim]);

  const bgAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(fadeAnim.value, [fullyOpen, fullyClosed], [0.5, 0]),
  }));

  const slideFromBottomAnimation = useAnimatedStyle(() => ({
    transform: [{translateY: fadeAnim.value}],
  }));

  const handleDiscard = () => fadeOut(onPressDiscard);

  const handleKeepEditing = () => fadeOut(onPressKeepEditing);

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Animated.View style={[styles.animateView, bgAnimation]} />
      <Animated.View
        style={[
          styles.animateViewFade,
          slideFromBottomAnimation,
          {paddingBottom: bottom},
        ]}>
        <View style={styles.top}>
          <Text /* i18n={I18N.actionSheetMessage} */ t14 style={styles.t8}>
            Are you sure you want to discard your changes?
          </Text>
          <View style={styles.line} />
          <TouchableOpacity style={styles.margin} onPress={handleDiscard}>
            <Text color={Color.textRed1} t8>
              Discard Changes
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.margin} onPress={handleKeepEditing}>
            <Text
              color={Color.textBlue1}
              /* i18n={I18N.actionSheetKeepEditing} */
              t8>
              Keep Editing
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const rawStyles = StyleSheet.create({
  top: {
    borderRadius: 13,
    backgroundColor: Color.graphicSecond1,
  },
  bottom: {
    borderRadius: 13,
    backgroundColor: Color.bg1,
    marginVertical: 8,
  },
  animateView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Color.bg4,
  },
  animateViewFade: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
  },
  t8: {
    marginHorizontal: 16,
    marginVertical: 12,
    textAlign: 'center',
    color: Color.graphicBase2,
  },
  line: {
    width: '100%',
    height: 0.3,
    backgroundColor: Color.textSecond1,
  },
  margin: {
    paddingVertical: 18,
    width: '100%',
    alignItems: 'center',
  },
});
