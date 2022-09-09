import React, { memo, useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { s } from 'react-native-size-matters'
import Sound from 'react-native-sound'
import { SvgXml } from 'react-native-svg'
import { getHeartBalloon, getJSBalloon, getSimpleBalloon } from '../../../assets/balloons'
import { H, randomNumber, randomProperty, W } from '../../constants'

const allBalloons = {
  js: getJSBalloon,
  simple: getSimpleBalloon,
  heart: getHeartBalloon
}

const xMin = s(-47.5)
const xMax = W - s(47.5)

const AnimPressable = Animated.createAnimatedComponent(Pressable)

export const Balloon = memo(({ type }: BalloonT) => {
  const balloonSvg = type ? allBalloons[type]() : randomProperty(allBalloons)()

  const x = useSharedValue(randomNumber(xMin, xMax))
  const y = useSharedValue(H + 10)
  const scale = useSharedValue(1)

  const xEnd = randomNumber(xMin, xMax)
  const yEnd = s(-135)

  const duration = randomNumber(2500, 4000)
  const delay = randomNumber(100, 2000)
  const visible = useSharedValue(true)

  useEffect(() => {
    visible.value = true
    setTimeout(() => {
      y.value = withTiming(yEnd, { duration, easing: Easing.in(Easing.sin) })
      x.value = withTiming(xEnd, { duration, easing: Easing.in(Easing.back()) })
    }, delay)
  }, [])
  const onClap = () => {
    const clap = new Sound('clap.mp3', Sound.MAIN_BUNDLE, () => {
      clap.play()
    })
    visible.value = false
  }

  const onPress = () => {
    scale.value = withTiming(1.3, { duration: 150 }, () => {
      'worklet'
      runOnJS(onClap)()
    })
  }

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { scale: scale.value }
      ],
      position: 'absolute',
      display: !visible.value ? 'none' : 'flex',
      zIndex: 2
    }
  })
  return (
    <AnimPressable onPress={onPress} style={animStyle}>
      <SvgXml height={s(125)} width={s(95)} xml={balloonSvg} />
    </AnimPressable>
  )
})
interface BalloonT {
  type?: 'js' | 'simple' | 'heart'
}
