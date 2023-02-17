import { useRef, useState } from 'react'

import { useWindowDimensions } from 'react-native'
import { Gesture, PanGestureHandlerEventPayload } from 'react-native-gesture-handler'
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters'
import { isIos } from 'src/constants'

interface useScrollGestureProps {
  hasBottomTabs?: boolean
}

export const useScrollGesture = (props?: useScrollGestureProps) => {
  const { hasBottomTabs = true } = props || {}
  const { height: H } = useWindowDimensions()
  const { bottom: bottomInsets } = useSafeAreaInsets()

  let topPartH = vs(15) + s(120) + bottomInsets
  topPartH += isIos ? 0 : vs(10) + (hasBottomTabs ? s(30) : 0)
  const tabViewH = H - topPartH
  const screenH = tabViewH + topPartH - vs(10)

  const SNAP_POINTS_FROM_TOP = [-topPartH, 0]

  const FULLY_OPEN_SNAP_POINT = SNAP_POINTS_FROM_TOP[0]
  const CLOSED_SNAP_POINT = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1]

  const [snapPoint, setSnapPoint] = useState(CLOSED_SNAP_POINT)

  const panGestureRef = useRef(Gesture.Pan())
  const blockScrollUntilAtTheTopRef = useRef(Gesture.Tap())
  const translationY = useSharedValue(0)
  const scrollOffset0 = useSharedValue(0)
  const scrollOffset1 = useSharedValue(0)
  const bottomSheetTranslateY = useSharedValue(CLOSED_SNAP_POINT)

  const onHandlerEndOnJS = (point: number) => {
    setSnapPoint(point)
  }
  const onHandlerEnd = ({ velocityY }: PanGestureHandlerEventPayload) => {
    'worklet'
    const dragToss = 0.05
    const endOffsetY =
      bottomSheetTranslateY.value + translationY.value + velocityY * dragToss
    // calculate nearest snap point
    let destSnapPoint = FULLY_OPEN_SNAP_POINT

    if (snapPoint === FULLY_OPEN_SNAP_POINT && endOffsetY < FULLY_OPEN_SNAP_POINT) {
      return
    }

    for (const point of SNAP_POINTS_FROM_TOP) {
      const distFromSnap = Math.abs(point - endOffsetY)
      if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
        destSnapPoint = point
      }
    }

    // update current translation to be able to animate withSpring to snapPoint
    bottomSheetTranslateY.value = bottomSheetTranslateY.value + translationY.value
    translationY.value = 0

    bottomSheetTranslateY.value = withTiming(destSnapPoint, {
      duration: 300,
    })
    runOnJS(onHandlerEndOnJS)(destSnapPoint)
  }

  const panGesture0 = Gesture.Pan()
    .onUpdate(e => {
      // when bottom sheet is not fully opened scroll offset should not influence
      // its position (prevents random snapping when opening bottom sheet when
      // the content is already scrolled)
      if (snapPoint === FULLY_OPEN_SNAP_POINT) {
        translationY.value = e.translationY - scrollOffset0.value
      } else {
        translationY.value = e.translationY
      }
    })
    .onEnd(onHandlerEnd)
    .withRef(panGestureRef)

  const blockScrollUntilAtTheTop0 = Gesture.Tap()
    .maxDeltaY(snapPoint - FULLY_OPEN_SNAP_POINT)
    .maxDuration(100000)
    .simultaneousWithExternalGesture(panGesture0)
    .withRef(blockScrollUntilAtTheTopRef)

  const scrollViewGesture0 = Gesture.Native().requireExternalGestureToFail(
    blockScrollUntilAtTheTop0,
  )

  const panGesture1 = Gesture.Pan()
    .onUpdate(e => {
      // when bottom sheet is not fully opened scroll offset should not influence
      // its position (prevents random snapping when opening bottom sheet when
      // the content is already scrolled)
      if (snapPoint === FULLY_OPEN_SNAP_POINT) {
        translationY.value = e.translationY - scrollOffset1.value
      } else {
        translationY.value = e.translationY
      }
    })
    .onEnd(onHandlerEnd)
    .withRef(panGestureRef)

  const blockScrollUntilAtTheTop1 = Gesture.Tap()
    .maxDeltaY(snapPoint - FULLY_OPEN_SNAP_POINT)
    .maxDuration(100000)
    .simultaneousWithExternalGesture(panGesture1)
    .withRef(blockScrollUntilAtTheTopRef)

  const scrollViewGesture1 = Gesture.Native().requireExternalGestureToFail(
    blockScrollUntilAtTheTop1,
  )

  const headerGesture = Gesture.Pan()
    .onUpdate(e => {
      translationY.value = e.translationY
    })
    .onEnd(onHandlerEnd)

  const screenStyle = useAnimatedStyle(() => {
    const translateY = bottomSheetTranslateY.value + translationY.value

    const minTranslateY = Math.max(FULLY_OPEN_SNAP_POINT, translateY)
    const clampedTranslateY = Math.min(CLOSED_SNAP_POINT, minTranslateY)
    return {
      height: screenH,
      transform: [{ translateY: clampedTranslateY }],
    }
  })
  return {
    tabViewH,
    screenStyle,
    panGesture1,
    panGesture0,
    headerGesture,
    scrollViewGesture1,
    scrollViewGesture0,
    scrollOffset0,
    scrollOffset1,
    blockScrollUntilAtTheTop1,
    blockScrollUntilAtTheTop0,
  }
}
