import React from 'react';

import {TouchableOpacity, useWindowDimensions} from 'react-native';
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
import Icon from 'react-native-vector-icons/Ionicons';

import {useThematicStyles} from 'src/hooks';
import {SHADOW_COLOR} from 'src/themes';
import {Color} from 'src/themeTypes';

import {Avatar} from '../avatar';
import {Background, CustomHeader, Spacer, Text} from '../ui';

const bounceLimit = 100;
const imageSize = 220;

interface HomeProfileProps {
  onPressSettings: () => void;
  bgImageUrl: string;
  avaUrl: string;
  cryptoAddress: string;
}

export function HomeProfile({
  onPressSettings,
  bgImageUrl,
  avaUrl,
  cryptoAddress,
}: HomeProfileProps) {
  const {styles, colors} = useThematicStyles(rawStyles);
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
        onPressRight={onPressSettings}
        iconRight="settings-sharp"
        style={headerAnimation}
        title="Dmitry"
      />
      <Animated.View style={[{height: height + imageSize}, contentAnimation]}>
        <Animated.Image
          style={[styles.imgContainer, imageAnimation]}
          resizeMode="cover"
          source={{
            // Yanix: https://m.the-flow.ru/uploads/images/origin/00/19/30/36/41/8a28f7e.jpg
            uri: bgImageUrl,
          }}
        />
        <GestureDetector gesture={gesture}>
          <Animated.View style={[{height, width}, styles.mediumShadow]}>
            <Background style={{height, width}}>
              <Animated.View style={[styles.ava, avaSizeAnimation]}>
                <Avatar size="xLarge" uri={avaUrl} />
              </Animated.View>

              <Spacer height={120} />
              <TouchableOpacity style={styles.addressLine}>
                <Text color={Color.primary} numberOfLines={1} t12>
                  {cryptoAddress}
                </Text>
                <Spacer width={10} />
                <Icon color={colors.primary} name="copy-outline" />
              </TouchableOpacity>
              {/* <TabContextProvider>
                {({tabViewH, screenStyle, headerGesture}: any) => (
                  <Animated.View style={screenStyle}>
                    {OnlinePlayer.store.loadingProf ? (
                      <CenterView>
                        <Spin centered />
                        <Space height={H * 0.5} />
                      </CenterView>
                    ) : (
                      <View style={page.container}>
                        <Space height={vs(5)} />
                        <OwnTabView
                          renderTabBar={props => (
                            <GestureDetector gesture={headerGesture}>
                              <SecondaryTab {...props} />
                            </GestureDetector>
                          )}
                          width={tabViewWidth}
                          screens={[
                            {
                              key: 'reports',
                              title: t('reports'),
                              Scene: ReportsScene,
                            },
                            {
                              key: 'history',
                              title: t('history'),
                              Scene: HistoryScene,
                            },
                            {
                              key: 'intentionOfGame',
                              title: t('intention'),
                              Scene: IntentionOfGame,
                            },
                          ]}
                          style={[page.tabContainer, {height: tabViewH}]}
                        />
                      </View>
                    )}
                  </Animated.View>
                )}
              </TabContextProvider> */}
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
  addressLine: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
