import React, {forwardRef, memo, useImperativeHandle} from 'react';

import {ColorValue, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Spacer, Text} from 'src/components/ui';
import {useThematicStyles, useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';

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
      const {colors} = useTheme();
      const {styles} = useThematicStyles(rawStyles);
      if (lineColor === undefined) lineColor = colors.primary;
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
            <Text t15 color={Color.textBase2}>
              {total.toFixed(0)} ISLM from {max.toFixed(0)} ISLM
            </Text>
          )}
        </>
      );
    },
  ),
);

const rawStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.graphicSecond1,
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
    backgroundColor: Color.graphicSecond4,
  },
});
