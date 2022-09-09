import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { en_color, W } from '../../../constants'
import Emoji from 'react-native-emoji'
import { Text } from '../../TextComponents'
import { vs } from 'react-native-size-matters'
import { useTypedSelector } from '../../../store'

const size = W / 4.6
const fontSize = size / 1.75

// no touch width and height in viewStyle prop!
export function ButtonEmoji({ name, viewStyle, onPress, textColor }: ButtonEmojiT) {
  const {
    dark,
    colors: { background }
  } = useTheme()
  const isSymbol = name.length === 1
  const { bgColor } = useTypedSelector(state => state.bgColor)
  const backgroundColor = dark ? background : bgColor
  return (
    <View>
      <View style={[container, shadow, { backgroundColor: 'white' }]} />
      <View style={[container, mask, { backgroundColor: backgroundColor }]} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[container, { backgroundColor: backgroundColor }]}
      >
        {isSymbol ? (
          <Text oneColor={textColor} textStyle={{ fontSize }} title={name} h7 />
        ) : (
          <Emoji name={name} style={{ fontSize }} />
        )}
      </TouchableOpacity>
    </View>
  )
}

interface ButtonEmojiT {
  name: string
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
  textColor?: string
}

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: size,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 3
  },
  shadow: {
    position: 'absolute',
    transform: [{ translateY: vs(-1.3) }],
    zIndex: 0
  },
  mask: {
    zIndex: 1,
    position: 'absolute'
  }
})
const { container, shadow, mask } = styles
