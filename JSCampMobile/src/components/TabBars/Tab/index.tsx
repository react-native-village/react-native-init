import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { TopIcons, BottomIcons } from './images'
import { s, ms } from 'react-native-size-matters'
import { W } from '../../../constants'

interface TabT {
  icon: string
  onPress?: () => void
  type?: 'top' | 'bottom'
}
const tabWidth = W / 5 - s(2) * 2
export function Tab({ icon, type = 'bottom', onPress }: TabT) {
  const image =
    type === 'top'
      ? TopIcons.find(x => x.title === icon)?.path
      : BottomIcons.find(x => x.title === icon)?.path

  return (
    <Pressable onPress={onPress} style={imgContainer}>
      <Image resizeMode="contain" source={image} style={img} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  img: {
    width: tabWidth,
    height: ms(35, 0.3)
  },
  imgContainer: {
    flex: 1,
    marginHorizontal: s(2),
    alignItems: 'center'
  }
})

const { img, imgContainer } = styles
