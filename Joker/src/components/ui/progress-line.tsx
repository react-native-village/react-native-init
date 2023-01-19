import React, {forwardRef, memo, useImperativeHandle} from 'react';

import {ColorValue, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Spacer, Text} from 'src/components/ui';
import {useTheme, useThemeObject} from 'src/hooks';
import {ColorTheme} from 'src/types';

export type ProgressLineProps = {
  initialProgress?: number;
  lineColor?: ColorValue;
  max?: number;
  total?: number;
  showBottomInfo?: true;
  markPosition?: number;
};

export interface ProgressLineInterface {
  updateProgress: (newVotes: number) => void;
}

export const ProgressLine = memo(
  forwardRef(
    (
      {
        initialProgress = 0,
        lineColor = undefined,
        max = 0,
        total = 0,
        markPosition,
        showBottomInfo,
      }: ProgressLineProps,
      ref,
    ) => {
      const {color} = useTheme();
      const styles = useThemeObject(createStyles);
      if (lineColor === undefined) lineColor = color.graphicBlue1;
      const width = useSharedValue(initialProgress);

      useImperativeHandle(ref, () => ({
        updateProgress(percent: number) {
          width.value = withTiming(percent, {duration: 500});
        },
      }));

      const progressWidth = useAnimatedStyle(() => ({
        width: `${width.value * 100}%`,
      }));

      return (
        <>
          <View style={styles.container}>
            <Animated.View
              style={[
                styles.lineStyle,
                {backgroundColor: lineColor},
                progressWidth,
              ]}
            />
            {markPosition !== undefined && (
              <View
                style={[styles.markLine, {left: `${markPosition * 100}%`}]}
              />
            )}
          </View>
          <Spacer height={8} />
          {showBottomInfo && (
            <Text t15 color={color.textBase2}>
              {total.toFixed(0)} ISLM from {max.toFixed(0)} ISLM
            </Text>
          )}
        </>
      );
    },
  ),
);
const createStyles = (color: ColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: color.graphicSecond1,
      width: '100%',
      borderRadius: 40,
    },
    lineStyle: {
      borderRadius: 40,
      height: 8,
    },
    markLine: {
      position: 'absolute',
      height: 10,
      width: 1,
      transform: [{translateY: -1}, {translateX: -0.5}],
      borderRadius: 5,
      backgroundColor: color.graphicSecond4,
    },
  });
  return styles;
};
