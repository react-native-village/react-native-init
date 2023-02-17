import React, {useContext} from 'react';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import {TabContext} from '../TabContext';

export function IssuedScene() {
  const {
    panGesture0,
    scrollViewGesture0,
    scrollOffset0,
    blockScrollUntilAtTheTop0,
  } = useContext(TabContext) as any;

  return (
    <GestureDetector
      gesture={Gesture.Simultaneous(
        Gesture.Race(blockScrollUntilAtTheTop0, panGesture0),
        scrollViewGesture0,
      )}>
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={1}
        onScrollBeginDrag={e => {
          scrollOffset0.value = e.nativeEvent.contentOffset.y;
        }}>
        <></>
      </Animated.ScrollView>
    </GestureDetector>
  );
}

// const rawStyles = StyleSheet.create({
//   noPostBlock: {
//     paddingHorizontal: s(10),
//   },
//   noPostText: {
//     textAlign: 'center',
//   },
// });
