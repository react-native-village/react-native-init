import React from 'react'
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScaledSheet, ms, s } from 'react-native-size-matters'
import { W } from '../../../constants'
import { Text } from '../../'

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    minWidth: W / 2.2,
    height: s(53),
    borderRadius: s(40),
    borderWidth: s(1)
  }
})

interface ButtonT {
  title: string
  cancel?: boolean
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
  color?: string
}

function Button({ title, onPress, textStyle, color, viewStyle }: ButtonT) {
  const { container } = styles
  const {
    colors: { border }
  } = useTheme()
  return (
    <TouchableOpacity
      style={[container, { borderColor: color ? color : border }, viewStyle]}
      onPress={onPress}
    >
      <Text oneColor={color} h8 textStyle={textStyle} centerText title={title} />
    </TouchableOpacity>
  )
}

export { Button }
