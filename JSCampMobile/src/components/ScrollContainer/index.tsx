import React from 'react'
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { Space } from '../Space'

export function ScrollContainer({ children, viewStyle, bgColor }: ScrollContainerT) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[container, viewStyle, bgColor ? { backgroundColor: bgColor } : {}]}
    >
      <Space height={vs(15)} />
      {children}
      <Space height={vs(50)} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(15),
    flex: 1
  }
})

const { container } = styles

interface ScrollContainerT {
  children?: any
  viewStyle?: StyleProp<ViewStyle>
  bgColor?: string
}
