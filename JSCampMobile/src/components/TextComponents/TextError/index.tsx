import React, { memo } from 'react'
import { Platform, View, StyleProp, TextStyle, ViewStyle } from 'react-native'
import { s, ScaledSheet, vs } from 'react-native-size-matters'
import { Text } from '../'

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: vs(5),
    marginHorizontal: s(10)
  },
  h1: {
    color: 'red',
    fontFamily: '3270Narrow',
    fontSize: s(17)
  }
})
interface TextErrorT {
  title: string
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const TextError = memo<TextErrorT>(({ title, onPress, textStyle, viewStyle }) => {
  const { container, h1 } = styles
  return (
    <View style={[container, viewStyle]}>
      <Text textStyle={[h1, textStyle]} title={title} onPress={onPress} />
    </View>
  )
})

export { TextError }
