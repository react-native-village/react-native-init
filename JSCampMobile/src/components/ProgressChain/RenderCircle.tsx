import React from 'react'
import { View, StyleSheet } from 'react-native'
import { progressElementT } from './'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { s } from 'react-native-size-matters'
import { Text } from '../'
import { en_color, green } from '../../constants'
import CircularProgress from 'react-native-circular-progress-indicator'

interface RenderCircleT {
  item: progressElementT
  index: number
  text: string
  circleColor: string
}

export const RenderCircle = ({ item, index, text, circleColor }: RenderCircleT) => {
  const isComplete = item === 'complete'
  return isComplete ? (
    <View style={[circle, { borderColor: text }]}>
      <MaterialIcon name="check" size={s(20)} color={green} />
    </View>
  ) : item.isStarted ? (
    <CircularProgress
      value={item.percents}
      maxValue={100}
      radius={s(13)}
      valueSuffix={'%'}
      inActiveStrokeColor={green}
      inActiveStrokeOpacity={0}
    >
      <Text title={item.percents.toString()} h2 oneColor={text} />
    </CircularProgress>
  ) : (
    <View style={[circle, { borderColor: text }]}>
      <MaterialIcon name="close" size={s(20)} color={text} />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(26),
    width: s(26),
    height: s(26),
    borderWidth: s(1)
  }
})
const { circle } = styles
