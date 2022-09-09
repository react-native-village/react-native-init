import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getColor, gray, white } from '../../constants'
import { allPartsT } from '../../types/LessonTypes'
import { Space } from '../Space'
import { Text } from '../TextComponents'

interface ComingSoonT {
  textColor?: string
  bg: allPartsT
}
export function ComingSoon({ textColor, bg }: ComingSoonT) {
  const color = getColor(bg)
  const {
    dark,
    colors: { background }
  } = useTheme()
  return (
    <View style={[container, { backgroundColor: dark ? background : color }]}>
      <Text
        oneColor={textColor ? (dark ? white : textColor) : white}
        fontSize={s(53)}
        h9
        title="Soon ..."
      />
      {/* <Space height={vs(30)} />
      <Icon name="clipboard-text-clock-outline" color={gray} size={s(120)} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: s(20)
  }
})

const { container } = styles
