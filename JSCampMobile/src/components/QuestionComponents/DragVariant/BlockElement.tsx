import React, { useCallback, useEffect, useMemo } from 'react'
import { StyleSheet, View, Text as RNText, LayoutChangeEvent } from 'react-native'
import { Text } from '../../'
import { s, vs } from 'react-native-size-matters'
import { useTheme } from '@react-navigation/native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  runOnJS,
  runOnUI
} from 'react-native-reanimated'
import { useTypedDispatch, useTypedSelector } from '../../../store'
import {
  positionsT,
  removeFromOrder,
  removeFromOrderIfExist,
  update,
  updateBlocks,
  updateOrder
} from './DragAndDropSlice'

export const BlockElement = ({ item, index }: BlockElementT) => {
  const {
    colors: { border, card, primary }
  } = useTheme()
  const dispatch = useTypedDispatch()
  const DragAndDrop = useTypedSelector(state => state.DragAndDrop)
  const blocks = useTypedSelector(state => state.DragAndDrop.blocks)
  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout
    dispatch(updateBlocks({ width, height, id: index }))
  }
  // Animation
  const isPressed = useSharedValue(false)
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const startX = useSharedValue(0)
  const startY = useSharedValue(0)
  const isEnd = useSharedValue(true)
  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value
        },
        {
          translateY: y.value
        }
      ],
      backgroundColor: isPressed.value ? primary : card,
      zIndex: isEnd.value ? 1 : 5
    }
  })
  const check = ({
    absoluteX,
    absoluteY,
    translationX,
    translationY,
    blockOffsetX,
    blockOffsetY
  }: checkT) => {
    const animTo = DragAndDrop.points.find(item => {
      const center = getCenter(item)
      const { x, y, halfH, halfW } = center
      return x + halfW >= absoluteX &&
        x - halfW <= absoluteX &&
        y + halfH >= absoluteY &&
        y - halfH <= absoluteY
        ? true
        : false
    })
    if (animTo) {
      const { width, height } = blocks[index]
      const center = getCenter({ ...animTo, width })
      const { x, y } = center
      const toX =
        translationX + startX.value - (absoluteX - x) + (blockOffsetX - width / 2)
      const toY =
        translationY + startY.value - (absoluteY - y) + (blockOffsetY - height / 2)
      dispatch(removeFromOrder(animTo.id))
      dispatch(updateOrder({ text: item, id: animTo.id, blockId: index, width }))
      runOnUI(goToPosition)({ offsetX: toX, offsetY: toY })
    } else {
      dispatch(removeFromOrderIfExist(index))
      runOnUI(goBack)()
    }
  }
  // WORKLET ACTIONS
  const onEnd = () => {
    'worklet'
    isEnd.value = true
  }
  const goBack = () => {
    'worklet'
    const duration = 700
    startX.value = 0
    startY.value = 0
    x.value = withTiming(0, { duration })
    y.value = withTiming(0, { duration }, onEnd)
  }
  const goToPosition = ({ offsetX, offsetY }: goToT) => {
    'worklet'
    const duration = 100
    x.value = withTiming(offsetX, { duration })
    y.value = withTiming(offsetY, { duration }, onEnd)
    startX.value = offsetX
    startY.value = offsetY
  }
  // useEffects
  useEffect(() => {
    if (DragAndDrop.removeId === index) {
      runOnUI(goBack)()
    }
  }, [DragAndDrop.removeId])
  useEffect(() => {
    if (DragAndDrop.removeAll === true) {
      runOnUI(goBack)()
    }
  }, [DragAndDrop.removeAll])
  // GESTURE
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isEnd.value = false
      isPressed.value = true
    })
    .onUpdate(e => {
      x.value = e.translationX + startX.value
      y.value = e.translationY + startY.value
    })
    .onFinalize(e => {
      const { absoluteX, absoluteY, translationX, translationY, x, y } = e
      isPressed.value = false
      runOnJS(check)({
        absoluteX,
        absoluteY,
        translationX,
        translationY,
        blockOffsetX: x,
        blockOffsetY: y
      })
    })
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        onLayout={e => onLayout(e)}
        style={[blockStyle, animStyle, { backgroundColor: card, borderColor: border }]}
      >
        <Text title={item} h3 />
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  blockStyle: {
    height: s(22),
    marginHorizontal: s(10),
    marginVertical: s(5),
    borderRadius: s(5),
    padding: s(2)
  }
})

const { blockStyle } = styles

interface BlockElementT {
  item: string
  index: number
}
interface goToT {
  offsetX: number
  offsetY: number
}
interface checkT {
  absoluteX: number
  absoluteY: number
  translationX: number
  translationY: number
  blockOffsetX: number
  blockOffsetY: number
}

const getCenter = (item: positionsT) => {
  return {
    x: item.px + item.width / 2,
    y: item.py + item.height / 2,
    halfW: item.width / 2 + s(3),
    halfH: item.height / 2 + s(3)
  }
}
