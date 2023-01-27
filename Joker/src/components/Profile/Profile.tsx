import React from 'react';

import {useWindowDimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';

import {useThematicStyles} from 'src/hooks';
import {SHADOW_COLOR} from 'src/themes';
import {Color} from 'src/themeTypes';

import {Avatar} from '../avatar';
import {Background, CustomHeader} from '../ui';

const bounceLimit = 100;
const imageSize = 220;

interface ProfileProps {
  onPressBack: () => void;
}

export function Profile({onPressBack}: ProfileProps) {
  const {styles} = useThematicStyles(rawStyles);
  const {height, width} = useWindowDimensions();

  const translationY = useSharedValue(0);
  const startY = useSharedValue(0);

  const imageAnimation = useAnimatedStyle(() => {
    return {
      height:
        translationY.value < 0
          ? Math.max(
              imageSize - Math.max(translationY.value, -bounceLimit),
              imageSize,
            )
          : imageSize,
    };
  });
  const contentAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: Math.min(
            Math.min(
              translationY.value > 0
                ? Math.max(-translationY.value, -imageSize)
                : 0,
            ),
            imageSize,
          ),
        },
      ],
    };
  });

  const headerState = useDerivedValue(() => {
    return interpolate(
      translationY.value,
      [imageSize / 2, imageSize],
      [0, 1],
      'clamp',
    );
  });

  const headerAnimation = useAnimatedStyle(() => {
    return {
      ...styles.headerStyles,
      opacity: headerState.value,
      display: headerState.value === 0 ? 'none' : 'flex',
    };
  }, [styles]);
  const avaSizeAnimation = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(headerState.value, [0, 1], [1, 0.6])}],
  }));

  const gesture = Gesture.Pan()
    .onStart(() => {
      startY.value = Math.max(translationY.value, -bounceLimit);
    })
    .onUpdate(e => {
      translationY.value = Math.max(
        startY.value - e.translationY,
        -bounceLimit,
      );
    })
    .onEnd(e => {
      if (translationY.value <= 0) {
        translationY.value = withSpring(0, {damping: 10, stiffness: 100});
      } else {
        translationY.value = withDecay(
          {
            velocity: -e.velocityY,
            deceleration: 0.998,
            clamp: [-bounceLimit, imageSize],
          },
          () => {
            if (translationY.value <= -100) {
              translationY.value = Math.max(translationY.value, -bounceLimit);
              translationY.value = withSpring(0, {damping: 100, stiffness: 80});
            }
          },
        );
      }
    });

  return (
    <>
      <CustomHeader
        onPressLeft={onPressBack}
        iconLeft="chevron-thin-left"
        style={headerAnimation}
        title="Dmitry"
      />
      <Animated.View style={[{height: height + imageSize}, contentAnimation]}>
        <Animated.Image
          style={[styles.imgContainer, imageAnimation]}
          resizeMode="cover"
          source={{
            // Yanix: https://m.the-flow.ru/uploads/images/origin/00/19/30/36/41/8a28f7e.jpg
            uri: 'https://txt-pesni.ru/wp-content/uploads/2020/06/tekst-pesni-pososi-670x381.jpg',
          }}
        />
        <GestureDetector gesture={gesture}>
          <Animated.View style={[{height, width}, styles.mediumShadow]}>
            <Background style={{height, width}} bgImg="symbols">
              <Animated.View style={[styles.ava, avaSizeAnimation]}>
                <Avatar
                  size="xLarge"
                  uri="https://avatars.githubusercontent.com/u/6774813?s=60&v=4"
                />
              </Animated.View>
            </Background>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    </>
  );
}

const rawStyles = StyleSheet.create({
  imgContainer: {
    width: '100%',
  },
  scrollContainer: {
    width: '100%',
  },
  flexOne: {
    flex: 1,
  },
  headerStyles: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Color.bg1,
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  mediumShadow: {
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  ava: {
    position: 'absolute',
    top: -65,
    alignSelf: 'center',
  },
});
