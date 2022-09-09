import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Emoji from 'react-native-emoji'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'
import { s, vs } from 'react-native-size-matters'
import { darkGray, gray, lightGray, W } from '../../constants'

const lineW = W - s(50)
const left = s(-18.8)

export function EmojiSlider({ emojiL, emojiR, onChange, initPercent }: EmojiSliderT) {
  const {
    dark,
    colors: { background, card, text }
  } = useTheme()
  const initX = initPercent ? initPercent * (lineW / 100) : 0
  const initHalf = initX < lineW / 2
  const [icon, setIcon] = useState(initHalf ? emojiL : emojiR)
  const x = useSharedValue(initX)
  const prevX = useSharedValue(initX)
  const isPressed = useSharedValue(false)
  const isLeftHalf = useSharedValue(initHalf)

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true
    })
    .onUpdate(e => {
      const offsetX = e.translationX + prevX.value
      x.value = offsetX > lineW ? lineW : offsetX < 0 ? 0 : offsetX
      const prevIcon = isLeftHalf.value
      isLeftHalf.value = offsetX < lineW / 2
      if (prevIcon !== isLeftHalf.value) {
        runOnJS(setIcon)(isLeftHalf.value ? emojiL : emojiR)
      }
    })
    .onFinalize(e => {
      const newPosition = x.value > lineW ? lineW : x.value < 0 ? 0 : x.value
      prevX.value = newPosition
      isPressed.value = false
      if (onChange) runOnJS(onChange)(Math.round((newPosition / lineW) * 100))
    })
  const turtleAnim = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: x.value },
        { scale: withSpring(isPressed.value ? 1.1 : 1) }
      ],
      left: withTiming(isPressed.value ? left * 1.05 : left)
    }
  })
  const lineAnim = useAnimatedStyle(() => {
    return {
      width: x.value,
      backgroundColor: dark ? text : darkGray
    }
  })
  return (
    <View style={[lineContainer, { backgroundColor: card }]}>
      <Animated.View style={[line, lineAnim]} />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[turtleAnim, turtleContainer]}>
          <Emoji style={turtle} name={icon} />
        </Animated.View>
      </GestureDetector>
    </View>
  )
}
const styles = StyleSheet.create({
  lineContainer: {
    width: lineW,
    alignSelf: 'center',
    height: vs(5),
    borderRadius: vs(5),
    justifyContent: 'center'
  },
  turtle: {
    transform: [{ rotateY: '180deg' }],
    fontSize: s(30)
  },
  turtleContainer: {
    position: 'absolute'
  },
  line: {
    height: vs(5),
    borderRadius: vs(5),
    position: 'absolute'
  }
})

const { lineContainer, turtle, turtleContainer, line } = styles

interface EmojiSliderT {
  emojiR: string
  emojiL: string
  onChange?: (percents: number) => void
  initPercent?: number
}
