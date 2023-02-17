import React, {useCallback, useEffect, useRef, useState} from 'react';

import {
  Animated as RNAnimated,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Icon, IconButton, Spacer, SwiperIcon, Text} from 'src/components/ui';
import {
  useAndroidStatusBarAnimation,
  useTheme,
  useThemeObject,
} from 'src/hooks';
import {ColorTheme} from 'src/types';
import {ANIMATION_DURATION, ANIMATION_TYPE, WINDOW_WIDTH} from 'src/variables';

export type BottomSheetProps = {
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
  closeDistance?: number;
  scrollable?: boolean;
};

const AnimatedStatusBar = RNAnimated.createAnimatedComponent(StatusBar);

type pointsT = [number, number];

export function BottomSheet({
  children,
  onClose,
  title,
  closeDistance,
}: BottomSheetProps) {
  const {color} = useTheme();
  const styles = useThemeObject(createStyles);
  const {height} = useWindowDimensions();
  const {bottom: bottomInsets, top: topInsets} = useSafeAreaInsets();

  const bottomSheetHeight = height - (topInsets + 12);
  const snapPointFromTop: pointsT = [0, bottomSheetHeight];

  const fullyOpenSnapPoint = snapPointFromTop[0];
  const closedSnapPoint = snapPointFromTop[snapPointFromTop.length - 1];
  const mockedSnapPointFromTop: pointsT = [
    fullyOpenSnapPoint,
    closeDistance ? closeDistance * 2 : closedSnapPoint,
  ];

  const panGestureRef = useRef(Gesture.Pan());
  const blockScrollUntilAtTheTopRef = useRef(Gesture.Tap());
  const [snapPoint, setSnapPoint] = useState(closedSnapPoint);
  const translationY = useSharedValue(0);
  const scrollOffset = useSharedValue(0);
  const bottomSheetTranslateY = useSharedValue(closedSnapPoint);

  const onHandlerEndOnJS = (point: number) => {
    setSnapPoint(point);
  };

  const onHandlerEnd = ({velocityY}: PanGestureHandlerEventPayload) => {
    'worklet';
    const dragToss = 0.05;
    const endOffsetY =
      bottomSheetTranslateY.value + translationY.value + velocityY * dragToss;

    let destSnapPoint = fullyOpenSnapPoint;

    if (snapPoint === fullyOpenSnapPoint && endOffsetY < fullyOpenSnapPoint) {
      return;
    }

    mockedSnapPointFromTop.forEach((point, id) => {
      const distFromSnap = Math.abs(point - endOffsetY);
      if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
        destSnapPoint = snapPointFromTop[id];
      }
    });

    bottomSheetTranslateY.value =
      bottomSheetTranslateY.value + translationY.value;
    translationY.value = 0;

    bottomSheetTranslateY.value = withTiming(
      destSnapPoint,
      {
        duration: ANIMATION_DURATION,
      },
      success => {
        if (destSnapPoint === closedSnapPoint && success) {
          onClose && runOnJS(onClose)();
        }
      },
    );
    runOnJS(onHandlerEndOnJS)(destSnapPoint);
  };

  const clampedTranslateY = useDerivedValue(() => {
    const translateY = bottomSheetTranslateY.value + translationY.value;

    const minTranslateY = Math.max(fullyOpenSnapPoint, translateY);
    return Math.min(closedSnapPoint, minTranslateY);
  });
  const {toDark, toLight, backgroundColor} = useAndroidStatusBarAnimation({
    animatedValueRange: snapPointFromTop,
  });

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      if (snapPoint === fullyOpenSnapPoint) {
        translationY.value = e.translationY - scrollOffset.value;
      } else {
        translationY.value = e.translationY;
      }
    })
    .onEnd(onHandlerEnd)
    .withRef(panGestureRef);

  const blockScrollUntilAtTheTop = Gesture.Tap()
    .maxDeltaY(snapPoint - fullyOpenSnapPoint)
    .maxDuration(100000)
    .simultaneousWithExternalGesture(panGesture)
    .withRef(blockScrollUntilAtTheTopRef);

  const headerGesture = Gesture.Pan()
    .onUpdate(e => {
      translationY.value = e.translationY;
    })
    .onEnd(onHandlerEnd);

  const scrollViewGesture = Gesture.Native().requireExternalGestureToFail(
    blockScrollUntilAtTheTop,
  );

  const onClosePopup = useCallback(() => {
    toLight();
    bottomSheetTranslateY.value = withTiming(
      closedSnapPoint,
      {
        duration: ANIMATION_DURATION,
        easing: ANIMATION_TYPE,
      },
      () => onClose && runOnJS(onClose)(),
    );
  }, [bottomSheetTranslateY, closedSnapPoint, onClose, toLight]);

  const onOpenPopup = useCallback(() => {
    toDark();
    bottomSheetTranslateY.value = withTiming(fullyOpenSnapPoint, {
      duration: ANIMATION_DURATION,
      easing: ANIMATION_TYPE,
    });
  }, [bottomSheetTranslateY, fullyOpenSnapPoint, toDark]);

  useEffect(() => {
    onOpenPopup();
  }, [onOpenPopup]);

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      clampedTranslateY.value,
      snapPointFromTop,
      [1, 0],
    );
    return {
      opacity,
    };
  });

  const bottomSheetStyle = useAnimatedStyle(() => {
    return {
      maxHeight: bottomSheetHeight,
      transform: [{translateY: clampedTranslateY.value}],
    };
  });

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <AnimatedStatusBar backgroundColor={backgroundColor} />
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          styles.background,
          backgroundAnimatedStyle,
        ]}
      />
      <TouchableWithoutFeedback onPress={onClosePopup}>
        <View style={styles.space} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[styles.animateView, styles.content, bottomSheetStyle]}>
        <GestureDetector gesture={headerGesture}>
          <Animated.View>
            <View style={styles.swipe}>
              <SwiperIcon color={color.graphicSecond2} />
            </View>
            <View style={styles.header}>
              <Text t6 color={color.textBase1}>
                {title}
              </Text>
              <Spacer />
              <IconButton onPress={onClosePopup}>
                <Icon i24 name="close_circle" color={color.graphicSecond2} />
              </IconButton>
            </View>
          </Animated.View>
        </GestureDetector>
        <GestureDetector
          gesture={Gesture.Simultaneous(panGesture, scrollViewGesture)}>
          <Animated.ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            onScrollBeginDrag={e => {
              scrollOffset.value = e.nativeEvent.contentOffset.y;
            }}>
            {children}
            <Spacer style={{height: bottomInsets}} />
          </Animated.ScrollView>
        </GestureDetector>
      </Animated.View>
    </View>
  );
}
const createStyles = (color: ColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      zIndex: 5,
    },
    space: {flex: 1},
    background: {
      backgroundColor: color.bg4,
    },
    animateView: {
      justifyContent: 'flex-end',
    },
    swipe: {
      alignItems: 'center',
      paddingVertical: 6,
      marginBottom: 2,
    },
    content: {
      width: WINDOW_WIDTH,
      backgroundColor: color.bg1,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      height: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
  });
  return styles;
};
