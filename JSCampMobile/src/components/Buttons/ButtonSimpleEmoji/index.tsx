import React from 'react'
import { TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'

export function ButtonSimpleEmoji({
  activeOpacity,
  onPress,
  name,
  fontSize
}: ButtonSimpleEmojiT) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <Emoji style={{ fontSize }} name={name} />
    </TouchableOpacity>
  )
}
interface ButtonSimpleEmojiT {
  name: string
  fontSize: number
  onPress?: () => void
  activeOpacity?: number
}
