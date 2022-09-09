import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters'
import { goBack, red } from '../../constants'
import { Button } from '../Buttons'
import { Space } from '../Space'
import { Text } from '../TextComponents'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native'

export function LoadFailed() {
  const {
    colors: { text }
  } = useTheme()
  return (
    <SafeAreaView style={container}>
      <Ionicons color={text} size={s(100)} name="warning-outline" />
      <Text h8 title="Произошла ошибка загрузки контента" />
      <Space height={vs(30)} />
      <Button title="Вернуться назад" onPress={goBack} color={red} viewStyle={btnStyle} />
      <Space height={vs(30)} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnStyle: {
    paddingHorizontal: s(12)
  }
})

const { container, btnStyle } = styles
