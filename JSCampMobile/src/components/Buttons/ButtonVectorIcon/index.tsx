import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { s } from 'react-native-size-matters'
import { useTheme } from '@react-navigation/native'

interface ButtonVectorIconI {
  name: string
  size?: number
  color?: string
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
}

export function ButtonVectorIcon({
  name,
  onPress,
  size = s(10),
  color,
  viewStyle
}: ButtonVectorIconI) {
  const {
    colors: { text }
  } = useTheme()
  const curColor = color ? color : text
  return (
    <TouchableOpacity style={viewStyle} onPress={onPress} activeOpacity={0.7}>
      <MaterialIcon name={name} size={size} color={curColor} />
    </TouchableOpacity>
  )
}
